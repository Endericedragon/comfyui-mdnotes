from asyncio.base_subprocess import ReadSubprocessPipeProto
import json
import os
import pathlib
from typing import TypedDict

# import nodes
# from comfy_config import config_parser
from server import PromptServer
from aiohttp import web
import folder_paths


class ModelInfo(TypedDict):
    model_type: str
    model_name: str


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


def get_bigram(txt: str) -> set[str]:
    bigram = set()
    for i in range(1, len(txt)):
        bigram.add(txt[i - 1 : i + 1])
    return bigram


def get_dice_similiarity(t1: str, t2: str) -> float:
    b1 = get_bigram(t1)
    b2 = get_bigram(t2)
    return 2 * len(b1 & b2) / (len(b1) + len(b2))


@PromptServer.instance.routes.post("/mdnotes/current_model")
async def get_current_model(request: web.Request):
    data: ModelInfo = await request.json()
    match data["model_type"]:
        case "ckpt":
            model_path = ckpt_base_dir / pathlib.Path(data["model_name"])
        case "lora":
            model_path = lora_base_dir / pathlib.Path(data["model_name"])
    model_dir = model_path.parent
    # 检查model_dir是否存在
    if not model_dir.exists():
        return web.json_response(None, status=404)
    model_name = model_path.stem
    similarities = [
        (get_dice_similiarity(model_name, each.stem), each)
        for each in filter(lambda x: x.suffix == ".md", model_dir.iterdir())
    ]
    likelihood, most_likely_md_path = max(similarities, key=lambda x: x[0])
    resp_json: ContentNPath = {"content": "", "rel_file_path": ""}
    if likelihood >= 0.5:
        with open(most_likely_md_path, "r", encoding="utf-8") as f:
            content = f.read()
            resp_json["content"] = content
            resp_json["rel_file_path"] = str(
                most_likely_md_path.relative_to(model_base_dir)
            )
    else:
        resp_json["rel_file_path"] = str(
            model_dir.relative_to(model_base_dir) / (model_name + ".md")
        )
    # print(resp_json)
    return web.json_response(resp_json, status=200)


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
