import os
import pathlib

# import nodes
# from comfy_config import config_parser
from server import PromptServer
from aiohttp import web
import folder_paths

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]

NODE_CLASS_MAPPINGS = dict()
NODE_DISPLAY_NAME_MAPPINGS = dict()
WEB_DIRECTORY = "web"

custom_node_dir = os.path.dirname(os.path.realpath(__file__))
ckpt_base_dir = pathlib.Path(folder_paths.models_dir) / "checkpoints"


def get_bigram(txt: str) -> set[str]:
    bigram = set()
    for i in range(1, len(txt)):
        bigram.add(txt[i - 1 : i + 1])
    return bigram


def get_dice_similiarity(t1: str, t2: str) -> float:
    b1 = get_bigram(t1)
    b2 = get_bigram(t2)
    return 2 * len(b1 & b2) / (len(b1) + len(b2))


@PromptServer.instance.routes.post("/mdnotes/current_ckpt")
async def get_current_ckpt(request: web.Request):
    data: dict[str, str] = await request.json()
    ckpt = pathlib.Path(data["ckpt_name"])
    ckpt_name = ckpt.stem
    ckpt_dir = ckpt_base_dir / ckpt.parent
    similarities = [
        (get_dice_similiarity(ckpt_name, each.stem), each.name)
        for each in filter(lambda x: x.suffix == ".md", ckpt_dir.iterdir())
    ]
    most_likely = max(similarities, key=lambda x: x[0])
    resp_json = {"content": "", "filename": ""}
    if most_likely[0] >= 0.5:
        with open(ckpt_dir / most_likely[1], "r", encoding="utf-8") as f:
            content = f.read()
            resp_json["content"] = content
            resp_json["filename"] = str(ckpt.parent / most_likely[1])
    else:
        resp_json["filename"] = str(ckpt.parent / (ckpt_name + ".md"))
    # print(resp_json)
    return web.json_response(resp_json, status=200)


@PromptServer.instance.routes.post("/mdnotes/save")
async def save_note(request: web.Request):
    data: dict[str, str] = await request.json()
    content = data["content"]
    filename = data["filename"]
    note_path = ckpt_base_dir / filename
    if not note_path.parent.exists():
        note_path.parent.mkdir(parents=True)
    with open(note_path, "w", encoding="utf-8") as f:
        f.write(content)
    return web.json_response({"status": "ok"}, status=200)
