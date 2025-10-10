import Vditor from "vditor";
import "vditor/dist/index.css";
import { EditorTrait } from "@/editors/traits";

// 会改变编辑器内容的键盘事件
function canChangeContent(e: KeyboardEvent) {
    if (e.ctrlKey || e.metaKey) {
        const contentChangingKeysWithCtrl = "vxzy";
        return contentChangingKeysWithCtrl.includes(e.key.toLowerCase())
    }
    const contentChangingKeys = new Set([
        "tab", "enter", "backspace", "delete"
    ]);
    return contentChangingKeys.has(e.key.toLowerCase()) || e.key.length === 1;
}

class VditorImpl implements EditorTrait {
    editor: Vditor;

    constructor(
        rootElemId: string,
        mdContent: string,
        cdnURL: string,
        callbacks: {
            afterRender?: (obj: VditorImpl) => void;
            afterContentChange?: (obj: VditorImpl) => void;
        }
    ) {
        this.editor = new Vditor(rootElemId, {
            cdn: cdnURL,
            toolbarConfig: {
                pin: true
            },
            preview: {
                maxWidth: 2147483647
            },
            // 监听键盘事件，当用户输入时，将需要保存
            keydown: (e) => {
                if (callbacks.afterContentChange && canChangeContent(e)) {
                    callbacks.afterContentChange(this);
                }
            },
            after: () => {
                this.editor.setValue(mdContent);
                if (callbacks.afterRender) {
                    callbacks.afterRender(this);
                }
            }
        });
    }
    getMarkdownContent(): string {
        return this.editor.getValue();
    }
    getScrollTop(): number {
        // let mountPoint = document.getElementById(this.rootElemId);
        let mountPoint = this.editor.vditor.element;
        let dialogContainer = mountPoint.parentElement;
        return dialogContainer.scrollTop;
    }
    setScrollTop(x: number) {
        // let mountPoint = document.getElementById(this.rootElemId);
        let mountPoint = this.editor.vditor.element;
        let dialogContainer = mountPoint.parentElement;
        console.log("[mdnotes] Setting scrollTop value to ", x);
        dialogContainer.scrollTo({
            top: x,
            left: 0,
            behavior: "smooth"
        });
    }

    gc() {
        this.editor.destroy();
    }
}

export { VditorImpl }