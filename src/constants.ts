import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'

const ROUTES = {
    sendCurrentModel: "/mdnotes/current_model",
    saveContent: "/mdnotes/save"
};

const EVENTS = {
    showEditor: "endericedragon-show-editor"
}

enum MODEL_TYPES {
    CKPT = "ckpt",
    LORA = "lora",
    UNKNOWN = "unknown"
}

class DetailMessage {
    status: string;
    content: string;
    rel_file_path: string;

    constructor(content: string, rel_file_path: string) {
        this.status = "ok";
        this.content = content;
        this.rel_file_path = rel_file_path;
    }

    toJSON() {
        return {
            content: this.content,
            rel_file_path: this.rel_file_path
        }
    }
}

async function postJsonData(app: ComfyApp, route: string, data: any) {
    return app.api.fetchApi(route, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(resp => {
        if (resp.status === 200) {
            return resp.json();
        } else {
            return Promise.reject(resp.status);
        }
    });
}

export { ROUTES, EVENTS, MODEL_TYPES, DetailMessage, postJsonData };