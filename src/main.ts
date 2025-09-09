// vue
import { createApp } from "vue"
// bootstrap
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "bootstrap-icons/font/bootstrap-icons.min.css";
// ComfyUI utils
import { app } from "../../../scripts/app.js";
import * as utils from '../../../scripts/utils.js';
import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'
// vditor
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
            // 每次点击右键都会触发这个回调函数
            // 调用原始方法
            originalMenuOptions?.apply(this, arguments);

            let nodeWithCkpt = this.widgets.find(w => w.name === "ckpt_name");
            let nodesWithLora =
                this.widgets.filter(w => w.name.includes("lora") && w.name.includes("name"));
            type DeducedContextMenuValue = typeof options[0];
            let newMenuOptions: DeducedContextMenuValue[] = [];

            function genCallback(modelName: string, modelType: MODEL_TYPES) {
                // 发送当前选中的模型
                postJsonData(comfyApp, ROUTES.sendCurrentModel, { model_type: modelType, model_name: modelName })
                    .then((data: DetailMessage) => {
                        let content = data.content;
                        let relFilePath = data.rel_file_path;
                        // 触发自定义事件，展示编辑器并设置内容
                        window.dispatchEvent(new CustomEvent(EVENTS.showEditor, {
                            detail: new DetailMessage(content, relFilePath)
                        }));
                    },
                (_: number) => {
                    comfyApp.extensionManager.toast.add({
                        severity: "error",
                        summary: "MDNotes Error",
                        detail: `Directory of <${modelName}> not found`,
                        life: 3000
                    });
                });
            }

            if (nodeWithCkpt) {
                let modelType = MODEL_TYPES.CKPT;
                // 获取当前选中的模型名称
                const ckptName = nodeWithCkpt.value as string;
                // 添加自定义菜单项
                newMenuOptions.push({
                    content: "Show note of checkpoint",
                    callback: () => {
                        genCallback(ckptName, modelType);
                    }
                });
            }

            if (nodesWithLora) {
                let modelType = MODEL_TYPES.LORA;
                // 添加自定义菜单项
                for (let [idx, each] of nodesWithLora.entries()) {
                    // 获取当前选中的模型名称
                    const loraName = each.value as string;
                    if (loraName === "None") {
                        continue;
                    }
                    newMenuOptions.push({
                        content: `Show note of lora${idx + 1}`,
                        callback: () => {
                            genCallback(loraName, modelType);
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