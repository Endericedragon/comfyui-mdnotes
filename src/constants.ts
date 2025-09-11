// ComfyUI utils
import { app } from "../../../scripts/app.js";
import * as utils from '../../../scripts/utils.js';
import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'

const comfyApp: ComfyApp = app;

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
    content: string;
    rel_file_path: string;

    constructor(content: string, rel_file_path: string) {
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
        switch (resp.status) {
            case 201:
                comfyApp.extensionManager.toast.add({
                    severity: "warn",
                    summary: "MDNotes Warning",
                    detail: "Note not found, ready to create one",
                    life: 3000
                });
            case 200:
                return resp.json();
            default:
                comfyApp.extensionManager.toast.add({
                    severity: "error",
                    summary: "MDNotes Error",
                    detail: `Path of model not found`,
                    life: 3000
                });
                return Promise.reject(resp.status);
        }
    });
}

export { ROUTES, EVENTS, MODEL_TYPES, DetailMessage, postJsonData, comfyApp, utils };