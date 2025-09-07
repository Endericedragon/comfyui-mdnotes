import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'

const ROUTES = {
    sendCurrentCheckpoint: "/mdnotes/current_ckpt",
    saveContent: "/mdnotes/save"
};

const EVENTS = {
    showEditor: "endericedragon-show-editor",
    setContent: "endericedragon-set-content"
}

class DetailMessage {
    content: string;
    filename: string;

    constructor(content: string, filename: string) {
        this.content = content;
        this.filename = filename;
    }
}

async function postJsonData(app: ComfyApp, route: string, data: any) {
    return app.api.fetchApi(route, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export { ROUTES, EVENTS, DetailMessage, postJsonData };