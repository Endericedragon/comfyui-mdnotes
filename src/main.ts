// vue
import { createApp } from "vue"
// primevue
import PrimeVue from "primevue/config";
// // ComfyUI utils
// import { app } from "../../../scripts/app.js";
// import * as utils from '../../../scripts/utils.js';
// import type { ComfyApp } from '@comfyorg/comfyui-frontend-types'

// shared data types
import { ROUTES, EVENTS, MODEL_TYPES, DetailMessage, postJsonData, comfyApp, utils } from './constants.js';
import App from './App.vue'

// extensions/mdnotes是固定的，后续内容和/web目录有关
const CSS_PATH = "extensions/comfyui-mdnotes/assets/main.css";
utils.addStylesheet(CSS_PATH);

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
        let dummy = document.createElement("div");
        dummy.id = "mdnotes-ui";
        document.body.appendChild(dummy);
        createApp(App)
            .use(PrimeVue)
            .mount(dummy);
    }
});