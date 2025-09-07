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
import { ROUTES, EVENTS, MODEL_TYPES, DetailMessage, postJsonData } from './constants.js';
import App from './App.vue'

// extensions/mdnotes是固定的，后续内容和/web目录有关
utils.addStylesheet("extensions/comfyui-mdnotes/assets/main.css");

const comfyApp: ComfyApp = app;

comfyApp.registerExtension({
    name: "endericedragon.mdnotes",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        let ckptNodeNames = new Set([
            "CheckpointLoaderSimple", "CheckpointLoader",
            "easy fullLoader", "easy a1111Loader", "easy comfyLoader",
            "Efficient Loader"
        ]);
        let loraNodeNames = new Set([
            "LoraLoader", "Load Lora"
        ]);
        let isCkpt = ckptNodeNames.has(nodeType.comfyClass);
        let isLora = loraNodeNames.has(nodeType.comfyClass);
        let modelType = isCkpt ? MODEL_TYPES.CKPT : isLora ? MODEL_TYPES.LORA : MODEL_TYPES.UNKNOWN;
        if (isCkpt || isLora) {
            const originalMenuOptions = nodeType.prototype.getExtraMenuOptions;
            nodeType.prototype.getExtraMenuOptions = function (_, options) {
                // 调用原始方法
                originalMenuOptions?.apply(this, arguments);

                // 添加自定义菜单项
                options.unshift({
                    content: "Show model note",
                    callback: () => {
                        // 获取当前选中的模型名称
                        let modelNameWidget;
                        switch (modelType) {
                            case MODEL_TYPES.CKPT:
                                modelNameWidget = this.widgets.find(w => w.name === "ckpt_name");
                                break;
                            case MODEL_TYPES.LORA:
                                modelNameWidget = this.widgets.find(w => w.name === "lora_name");
                                break;
                            default:
                                modelNameWidget = null;
                                break;
                        }
                        const modelName = modelNameWidget?.value;
                        if (modelName) {
                            // 发送当前选中的模型
                            postJsonData(comfyApp, ROUTES.sendCurrentModel, { model_type: modelType, model_name: modelName })
                                .then((data: DetailMessage) => {
                                    let content = data.content;
                                    let absFilePath = data.abs_file_path;
                                    // 触发自定义事件，展示编辑器并设置内容
                                    window.dispatchEvent(new CustomEvent(EVENTS.showEditor));
                                    window.dispatchEvent(new CustomEvent(EVENTS.setContent, {
                                        detail: new DetailMessage(content, absFilePath)
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