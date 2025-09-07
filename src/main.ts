// vue & bootstrap utils
import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'
// COmfyUI utils
import { app } from "../../../scripts/app.js";
import * as utils from '../../../scripts/utils.js';
import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "vditor/dist/index.css";

// shared data types
import { ROUTES, EVENTS, DetailMessage, postJsonData } from './constants.js';
import App from './App.vue'

// extensions/mdnotes是固定的，后续内容和/web目录有关
utils.addStylesheet("extensions/comfyui-mdnotes/assets/main.css");

const comfyApp: ComfyApp = app;

comfyApp.registerExtension({
    name: "endericedragon.mdnotes",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        let targetNodeNames = new Set([
            "CheckpointLoaderSimple", "CheckpointLoader",
            "easy fullLoader", "easy a1111Loader", "easy comfyLoader",
            "Efficient Loader"
        ]);
        if (targetNodeNames.has(nodeType.comfyClass)) {
            const original_getExtraMenuOptions = nodeType.prototype.getExtraMenuOptions;
            nodeType.prototype.getExtraMenuOptions = function (_, options) {
                // 调用原始方法
                original_getExtraMenuOptions?.apply(this, arguments);

                // 添加自定义菜单项
                options.unshift({
                    content: "Show model note",
                    callback: () => {
                        // 获取当前选中的模型名称
                        const modelName = this.widgets.find(w => w.name === "ckpt_name")?.value;
                        if (modelName) {
                            // 发送当前选中的模型
                            postJsonData(comfyApp, ROUTES.sendCurrentCheckpoint, { ckpt_name: modelName })
                                .then((data) => {
                                    let content = data["content"];
                                    let filename = data["filename"];
                                    // 触发自定义事件，展示编辑器并设置内容
                                    window.dispatchEvent(new CustomEvent(EVENTS.showEditor));
                                    window.dispatchEvent(new CustomEvent(EVENTS.setContent, {
                                        detail: new DetailMessage(content, filename)
                                    }))
                                });
                        } else {
                            console.error("No model name found");
                        }
                    }
                });
            }
            console.log(`[mdnotes] ${nodeType.comfyClass} registered`);
        }
    },
    async nodeCreated(node: any) {
        console.info(`[mdnotes] nodeCreated: ${node.comfyClass}`);
    },
    async setup() {
        let mountPoint = document.createElement("div");
        mountPoint.id = "mdnotes-ui";
        document.body.appendChild(mountPoint);

        createApp(App).use(createBootstrap()).mount(mountPoint);
    }
});