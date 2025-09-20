// vue
import { createApp } from "vue"
// primevue
import PrimeVue from "primevue/config";

// shared data types
import { ROUTES, EVENTS, MODEL_TYPES, OPTIONS, DetailMessage, postJsonData, comfyApp, utils } from './constants.js';
import App from './App.vue'

// extensions/comfyui-mdnotes是固定的，后续内容和/web目录有关
const CSS_PATH = "extensions/comfyui-mdnotes/assets/main.css";
utils.addStylesheet(CSS_PATH);

comfyApp.registerExtension({
    name: "endericedragon.comfyui-mdnotes",
    settings: [
        {
            id: OPTIONS.saveOnClose,
            name: "Save on close?",
            type: "boolean",
            defaultValue: false
        }
    ],
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

            function genCallback(modelPath: string, modelType: MODEL_TYPES) {
                // 发送当前选中的模型
                postJsonData(comfyApp, ROUTES.sendCurrentModel, { model_type: modelType, model_path: modelPath })
                    .then((data: DetailMessage) => {
                        let content = data.content;
                        let relFilePath = data.rel_file_path;
                        // 触发自定义事件，展示编辑器并设置内容
                        window.dispatchEvent(new CustomEvent(EVENTS.showEditor, {
                            detail: new DetailMessage(content, relFilePath)
                        }));
                    });
            }

            // 若组件包含ckpt_name，添加自定义菜单项
            if (nodeWithCkpt) {
                // 获取当前选中的模型名称
                const ckptName = nodeWithCkpt.value as string;
                // 添加自定义菜单项
                newMenuOptions.push({
                    content: "Show note of checkpoint",
                    callback: () => {
                        genCallback(ckptName, MODEL_TYPES.CKPT);
                    }
                });
            }
            // 若组件包含lora_name，添加自定义菜单项
            for (let [idx, each] of nodesWithLora.entries()) {
                // 获取当前选中的模型名称
                const loraName = each.value as string;
                if (loraName === "None") {
                    continue;
                }
                newMenuOptions.push({
                    content: `Show note of lora${idx + 1}`,
                    callback: () => {
                        genCallback(loraName, MODEL_TYPES.LORA);
                    }
                });
            }

            options.unshift(...newMenuOptions);
            return options; // 让Linting满意
        }
    },
    async setup() {
        let mountPoint = document.createElement("div");
        mountPoint.id = "mdnotes-ui";
        document.body.appendChild(mountPoint);
        createApp(App)
            .use(PrimeVue)
            .mount(mountPoint);
    }
});