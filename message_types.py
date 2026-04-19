from typing import TypedDict


class ModelInfo(TypedDict):
    model_type: str
    model_path: str


class RouteInfo(TypedDict):
    sendCurrentModel: str
    saveContent: str


class ContentNPath(TypedDict):
    content: str
    rel_file_path: str
