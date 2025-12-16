// vue
import { createApp } from "vue"
// primevue
import PrimeVue from "primevue/config";
// shared data types
import { CDNs, ROUTES, EVENTS, MODEL_TYPES, DetailMessage, postJsonData, comfyApp, utils, OPTIONS, MD_EDITOR_NAMES } from "./constants.js";
import App from "./App.vue"

// extensions/comfyui-mdnotes是固定的，后续内容和/web目录有关
const CSS_PATH = "extensions/comfyui-mdnotes/assets/style.css";
utils.addStylesheet(CSS_PATH);


comfyApp.registerExtension({
    name: "endericedragon.comfyui-mdnotes",
    settings: [
        {
            id: OPTIONS.saveOnClose,
            name: "Always save on close?",
            type: "boolean",
            defaultValue: false
        },
        {
            id: OPTIONS.editorSwitch,
            name: "Markdown editor to use",
            type: "combo",
            defaultValue: MD_EDITOR_NAMES.vditor,
            options: [
                { text: "vditor", value: MD_EDITOR_NAMES.vditor },
            ]
        },
        {
            id: OPTIONS.cdnSwitch,
            name: "CDN for vditor resources",
            type: "combo",
            defaultValue: CDNs.unpkg,
            options: [
                { text: "unpkg", value: CDNs.unpkg },
                { text: "jsDelivr", value: CDNs.jsDelivr },
                { text: "npmmirror", value: CDNs.npmmirror },
            ],
            tooltip: "Set the CDN used for fetching resources of vditor."
        },
        {
            id: OPTIONS.useLocalCDN,
            name: "Cache vditor resources locally?",
            type: "boolean",
            defaultValue: false,
            tooltip: (
                "Store resources of vditor locally." +
                "This is recommended since editor could be loaded much faster."
            )
        }
    ],
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        let originalMenuOptions = nodeType.prototype.getExtraMenuOptions;
        nodeType.prototype.getExtraMenuOptions = function (_, options) {
            // 每次点击右键都会触发这个回调函数
            // 调用原始方法
            originalMenuOptions?.apply(this, arguments);

            // //! 调试用，正式发布时记得注释掉
            // for (let widget of this.widgets) {
            //     console.log(widget.name?.toString());
            // }

            const candidates = this.widgets.filter(w => w.name.includes("name"));
            const nodeWithCkpt = candidates.find(w => w.name.includes("ckpt"));    // For checkpoints
            const nodesWithUnet = candidates.find(w => w.name.includes("unet"));   // For Unet such as Z-Image
            const nodesWithLora = candidates.filter(w => w.name.includes("lora")); // For Loras
            // IContextValue是保密的类型，因此只能用typeof来使用、标注
            type DeducedContextMenuValue = typeof options[0];
            let newMenuOptions: DeducedContextMenuValue[] = [];

            function genCallback(modelPath: string, modelType: MODEL_TYPES) {
                // 发送当前选中的模型
                postJsonData(comfyApp, ROUTES.sendCurrentModel, { model_type: modelType, model_path: modelPath })
                    .then(webJsonData => {
                        if (webJsonData.status_code === 201) {
                            comfyApp.extensionManager.toast.add({
                                severity: "warn",
                                life: 3000,
                                summary: "MDNotes Warning",
                                detail: "Found no note, ready to create one",
                            });
                        }

                        const data = webJsonData.data;
                        const content = data.content;
                        const relFilePath = data.rel_file_path;
                        // 触发自定义事件，展示Markdown编辑器窗口并设置内容
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
            // 若组件包含unet_name，添加自定义菜单项
            if (nodesWithUnet) {
                // 获取当前选中的模型名称
                const unetName = nodesWithUnet.value as string;
                // 添加自定义菜单项
                newMenuOptions.push({
                    content: "Show note of unet",
                    callback: () => {
                        genCallback(unetName, MODEL_TYPES.UNET);
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
