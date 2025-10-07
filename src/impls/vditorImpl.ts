import Vditor from "vditor";
import "vditor/dist/index.css";
import { Editor } from "@/traits/Editor";

// 会改变编辑器内容的键盘事件
function canChangeContent(e: KeyboardEvent) {
    const isCtrlC = (e.key === "c") && e.ctrlKey;
    const isCtrlA = (e.key === "a") && e.ctrlKey;
    return !isCtrlC && !isCtrlA && (e.key === "Tab" || e.key === "Backspace" || e.key === "Delete" || e.key.length === 1);
}

class VditorImpl implements Editor {
    editor: Vditor;

    constructor(rootElemId: string, _mdContent: string, unique: {
        cdnURL: string,
        callbacks: {
            afterRender?: (obj: VditorImpl) => void;
            afterContentChange?: (obj: VditorImpl) => void;
        }
    }) {
        this.editor = new Vditor(rootElemId, {
            // cdn: `https://cdn.jsdelivr.net/npm/vditor@${VDITOR_VERSION}`,
            // cdn: `https://registry.npmmirror.com/vditor/${VDITOR_VERSION}/files`,
            cdn: unique.cdnURL,
            toolbarConfig: {
                pin: true
            },
            preview: {
                maxWidth: 2147483647
            },
            // 监听键盘事件，当用户输入时，将需要保存
            keydown: (e) => {
                if (unique.callbacks.afterContentChange && canChangeContent(e)) {
                    unique.callbacks.afterContentChange(this);
                }
            },
            after: () => {
                if (unique.callbacks.afterRender) {
                    unique.callbacks.afterRender(this);
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