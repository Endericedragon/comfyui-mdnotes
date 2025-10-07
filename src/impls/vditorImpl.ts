import Vditor from "vditor";
import { Editor } from "@/traits/Editor";
import { Ref } from "vue";

class VditorImpl implements Editor<Vditor> {
    rootElemId: string;
    editor: Ref<Vditor>;

    create(rootElemId: string, mdContent: string, cdnURL: string): Vditor {
        this.rootElemId = rootElemId;

        this.editor.value = new Vditor(this.rootElemId, {
            // cdn: `https://cdn.jsdelivr.net/npm/vditor@${VDITOR_VERSION}`,
            // cdn: `https://registry.npmmirror.com/vditor/${VDITOR_VERSION}/files`,
            cdn: cdnURL,
            toolbarConfig: {
                pin: true
            },
            preview: {
                maxWidth: 2147483647
            },
            // todo: 监听键盘事件，当用户输入时，将需要保存
            // keydown: (e) => {
            //     if (canChangeContent(e)) {
            //         unsaveMark.value = true;
            //         if (comfyApp.extensionManager.setting.get(OPTIONS.saveOnClose)) {
            //             needSaving.value = true;
            //         }
            //     }
            // },
            after: () => {
                this.editor.value.setTheme(
                    "dark",
                    "dark",
                    "atom-one-dark"
                );
                // 装入数据
                this.editor.value.setValue(mdContent);
                // 滚动记忆

            }
        });

        return this.editor.value;
    }
    getMarkdownContent(): string {
        throw new Error("Method not implemented.");
    }
    getScrollTop(): number {
        // let mountPoint = document.getElementById(this.rootElemId);
        let mountPoint = this.editor.value.vditor.element;
        let dialogContainer = mountPoint.parentElement;
        return dialogContainer.scrollTop;
    }
    setScrollTop(x: number) {
        // let mountPoint = document.getElementById(this.rootElemId);
        let mountPoint = this.editor.value.vditor.element;
        let dialogContainer = mountPoint.parentElement;
        console.log("[mdnotes] Setting scrollTop value to ", x);
        dialogContainer.scrollTo({
            top: x,
            left: 0,
            behavior: "smooth"
        });
    }

}