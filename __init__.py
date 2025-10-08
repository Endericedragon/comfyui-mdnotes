import os
import pathlib
from functools import lru_cache
from typing import TypedDict
import requests
import mimetypes

import folder_paths
from aiohttp import web
from server import PromptServer


class ModelInfo(TypedDict):
    model_type: str
    model_path: str


class RouteInfo(TypedDict):
    sendCurrentModel: str
    saveContent: str


class ContentNPath(TypedDict):
    content: str
    rel_file_path: str


BASE_DIR = pathlib.Path(__file__).parent

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]

NODE_CLASS_MAPPINGS = dict()
NODE_DISPLAY_NAME_MAPPINGS = dict()
WEB_DIRECTORY = "web"

custom_node_dir = os.path.dirname(os.path.realpath(__file__))
model_base_dir = pathlib.Path(folder_paths.models_dir)
ckpt_base_dir = model_base_dir / "checkpoints"
lora_base_dir = model_base_dir / "loras"


@lru_cache(maxsize=256)
def get_bigram(text: str) -> set[str]:
    return set(text[i - 1 : i + 1] for i in range(1, len(text)))


def get_dice_similiarity(t1: str, t2: str) -> float:
    """
    计算两个字符串的Dice相似度，其中的bigram从缓存中获取，若无则按需计算
    """
    b1 = get_bigram(t1)
    b2 = get_bigram(t2)
    return 2 * len(b1 & b2) / (len(b1) + len(b2))


@PromptServer.instance.routes.post("/mdnotes/current_model")
async def get_current_model(request: web.Request):
    data: ModelInfo = await request.json()
    if data["model_type"] == "ckpt":
        model_path = ckpt_base_dir / pathlib.Path(data["model_path"])
    elif data["model_type"] == "lora":
        model_path = lora_base_dir / pathlib.Path(data["model_path"])
    model_dir = model_path.parent
    # 检查model_dir是否存在
    if not model_dir.exists():
        return web.json_response(None, status=404)
    # 计算Dice相似度
    model_name = model_path.stem
    print("[mdnotes] Finding note for model {}".format(model_name))
    similarities = map(
        lambda x: (get_dice_similiarity(model_name, x.stem), x),
        filter(lambda x: x.suffix == ".md", model_dir.iterdir()),
    )
    likelihood, most_likely_md_path = max(similarities, key=lambda x: x[0])
    resp_json: ContentNPath = {"content": "", "rel_file_path": ""}
    status_code: int = 200
    if likelihood >= 0.5:
        rel_file_path_str = str(most_likely_md_path.relative_to(model_base_dir))
        print("[mdnotes] Found note: {}".format(rel_file_path_str))
        with open(most_likely_md_path, "r", encoding="utf-8") as f:
            content = f.read()
            resp_json["content"] = content
            resp_json["rel_file_path"] = rel_file_path_str
    else:
        print("[mdnotes] No note found for model {}".format(model_name))
        status_code = 201  # Created
        resp_json["rel_file_path"] = str(
            model_dir.relative_to(model_base_dir) / (model_name + ".md")
        )
    # print(resp_json)
    return web.json_response(resp_json, status=status_code)


@PromptServer.instance.routes.post("/mdnotes/save")
async def save_note(request: web.Request):
    data: ContentNPath = await request.json()
    content = data["content"]
    note_path = model_base_dir / data["rel_file_path"]
    if not note_path.parent.exists():
        note_path.parent.mkdir(parents=True)
    with open(note_path, "w", encoding="utf-8") as f:
        f.write(content)
    return web.json_response({"status": "ok"}, status=200)

def get_mime_type(thing: str) -> str:
    return (mimetypes.guess_type(thing)[0] or "application/octet-stream").split(";", 1)[0]

@PromptServer.instance.routes.get("/mdnotes/dist/{thing:.+}")
async def get_dist(req: web.Request):
    thing = req.match_info.get("thing")
    if not thing:
        return web.json_response(None, status=404)

    if not (filepath := BASE_DIR / "dist" / thing).exists():
        filepath.parent.mkdir(parents=True, exist_ok=True)
        print("Downloading {}".format(thing))
        with requests.get(
            "https://registry.npmmirror.com/vditor/3.11.2/files/dist/{}".format(thing)
        ) as r:
            if r.status_code != 200:
                return web.json_response(None, status=r.status_code)
            with open(filepath, "wb") as f:
                f.write(r.content)

    with open(filepath, "rb") as f:
        return web.Response(
            body=f.read(),
            content_type=get_mime_type(thing),
        )
