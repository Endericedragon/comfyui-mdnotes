// vue & primevue & bootstrap utils
import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap';
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
        let originalMenuOptions = nodeType.prototype.getExtraMenuOptions;
        nodeType.prototype.getExtraMenuOptions = function (_, options) {
            // 调用原始方法
            originalMenuOptions?.apply(this, arguments);

            let nodeWithCkpt = this.widgets.find(w => w.name === "ckpt_name");
            let nodesWithLora = this.widgets.filter(w => w.name === "lora_name");
            let newMenuOptions = [];

            if (nodeWithCkpt) {
                let modelType = MODEL_TYPES.CKPT;
                // 添加自定义菜单项
                newMenuOptions.push({
                    content: "Show note of checkpoint",
                    callback: () => {
                        // 获取当前选中的模型名称
                        const ckptName = nodeWithCkpt.value;
                        // 发送当前选中的模型
                        postJsonData(comfyApp, ROUTES.sendCurrentModel, { model_type: modelType, model_name: ckptName })
                            .then((data: DetailMessage) => {
                                let content = data.content;
                                let relFilePath = data.rel_file_path;
                                // 触发自定义事件，展示编辑器并设置内容
                                window.dispatchEvent(new CustomEvent(EVENTS.showEditor));
                                window.dispatchEvent(new CustomEvent(EVENTS.setContent, {
                                    detail: new DetailMessage(content, relFilePath)
                                }))
                            });
                    }
                });
            }

            if (nodesWithLora) {
                let modelType = MODEL_TYPES.LORA;
                // 添加自定义菜单项
                for (let [idx, each] of nodesWithLora.entries()) {
                    newMenuOptions.push({
                        content: `Show note of lora${idx + 1}`,
                        callback: () => {
                            // 获取当前选中的模型名称
                            const loraName = each.value;
                            if (loraName !== "None") {
                                // 发送当前选中的模型
                                postJsonData(comfyApp, ROUTES.sendCurrentModel, { model_type: modelType, model_name: loraName })
                                    .then((data: DetailMessage) => {
                                        let content = data.content;
                                        let relFilePath = data.rel_file_path;
                                        // 触发自定义事件，展示编辑器并设置内容
                                        window.dispatchEvent(new CustomEvent(EVENTS.showEditor));
                                        window.dispatchEvent(new CustomEvent(EVENTS.setContent, {
                                            detail: new DetailMessage(content, relFilePath)
                                        }))
                                    });
                            } else {
                                comfyApp.extensionManager.toast.add({
                                    severity: "warn",
                                    life: 3000,
                                    summary: "MDNotes",
                                    detail: "Lora model seems not selected correctly..."
                                });
                            }
                        }
                    });
                }
            }

            options.unshift(...newMenuOptions);
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