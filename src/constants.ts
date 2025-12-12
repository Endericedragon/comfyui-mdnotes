// ComfyUI utils
import { Window } from "./types/comfyAPI.js";
// import { app } from "../../../scripts/app.js";
// import * as utils from "../../../scripts/utils.js";
import type { ComfyApp } from "@comfyorg/comfyui-frontend-types"

const cuWin = window as unknown as Window;
const comfyApp = cuWin.comfyAPI.app.app;
const utils = cuWin.comfyAPI.utils;

const ROUTES = {
    sendCurrentModel: "/mdnotes/current_model",
    saveContent: "/mdnotes/save",
    setCDN: "/mdnotes/setCDN"
};

const EVENTS = {
    showEditor: "endericedragon-show-editor"
}

const OPTIONS = {
    saveOnClose: "comfyui-mdnotes.savingOptions.saveOnClose",
    editorSwitch: "comfyui-mdnotes.markdownEditor.editorSwitch",
    cdnSwitch: "comfyui-mdnotes.markdownEditor.cdnSwitch",
    useLocalCDN: "comfyui-mdnotes.markdownEditor.useLocalCDN",
}

// const VDITOR_VERSION: string = __VDITOR_VERSION__;
const CDNs = {
    npmmirror: `https://registry.npmmirror.com/vditor/${__VDITOR_VERSION__}/files`,
    jsDelivr: `https://cdn.jsdelivr.net/npm/vditor@${__VDITOR_VERSION__}`,
    unpkg: `https://unpkg.com/vditor@${__VDITOR_VERSION__}`,
    localCachedCDN: "mdnotes"
};

enum MD_EDITOR_NAMES {
    vditor,
};

enum MODEL_TYPES {
    CKPT = "ckpt",
    LORA = "lora",
    UNET = "unet",
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

function printTimestamp(text: string) {
    const current = new Date();
    console.log(`[mdnotes] ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}:${current.getMilliseconds()} - ${text}`);
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
                    detail: `Status code = ${resp.status}`,
                    life: 3000
                });
                return Promise.reject(resp.status);
        }
    });
}

async function postTextData(app: ComfyApp, route: string, text: string) {
    return app.api.fetchApi(route, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: text
    }).then(resp => {
        switch (resp.status) {
            case 200:
                return resp.text();
            default:
                comfyApp.extensionManager.toast.add({
                    severity: "error",
                    summary: "MDNotes Error",
                    detail: `Status code = ${resp.status}`,
                    life: 3000
                });
                return Promise.reject(resp.status);
        }
    });
}

export { CDNs, MD_EDITOR_NAMES, ROUTES, EVENTS, MODEL_TYPES, OPTIONS, DetailMessage, postJsonData, postTextData, comfyApp, utils, printTimestamp };