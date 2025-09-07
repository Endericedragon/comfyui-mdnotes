import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'

const ROUTES = {
    sendCurrentModel: "/mdnotes/current_model",
    saveContent: "/mdnotes/save"
};

const EVENTS = {
    showEditor: "endericedragon-show-editor",
    setContent: "endericedragon-set-content"
}

enum MODEL_TYPES {
    CKPT = "ckpt",
    LORA = "lora",
    UNKNOWN = "unknown"
}

class DetailMessage {
    content: string;
    abs_file_path: string;

    constructor(content: string, abs_file_path: string) {
        this.content = content;
        this.abs_file_path = abs_file_path;
    }
}

async function postJsonData(app: ComfyApp, route: string, data: any) {
    return app.api.fetchApi(route, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export { ROUTES, EVENTS, MODEL_TYPES, DetailMessage, postJsonData };