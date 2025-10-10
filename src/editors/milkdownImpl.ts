import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";

import { EditorTrait } from "@/editors/traits";

class MilkdownImpl implements EditorTrait {
    rootElemId: string;
    editor: Crepe;
    firstLoad: boolean;

    constructor(
        rootElemId: string,
        mdContent: string,
        callbacks: {
            afterRender?: (obj: MilkdownImpl) => void;
            afterContentChange?: (obj: MilkdownImpl) => void;

        }
    ) {
        this.rootElemId = rootElemId;
        this.firstLoad = true;

        this.editor = new Crepe({
            root: document.getElementById(rootElemId),
            defaultValue: mdContent,
        });

        this.editor.on((listener) => {
            listener.markdownUpdated(() => {
                if (!this.firstLoad && callbacks.afterContentChange) {
                    callbacks.afterContentChange(this);
                } else {
                    this.firstLoad = false;
                }
            });
        });

        this.editor.create().then(() => {
            if (callbacks.afterRender) {
                callbacks.afterRender(this);
            }
            console.log("[mdnotes] Crepe editor created!");
        });
    }
    getMarkdownContent(): string {
        return this.editor.getMarkdown();
    }
    getScrollTop(): number {
        let mountPoint = document.getElementById(this.rootElemId);
        let dialogContainer = mountPoint.parentElement;
        return dialogContainer.scrollTop;
    }
    setScrollTop(x: number) {
        let mountPoint = document.getElementById(this.rootElemId);
        let dialogContainer = mountPoint.parentElement;
        console.log("[mdnotes] Setting scrollTop value to ", x);
        dialogContainer.scrollTo({
            top: x,
            left: 0,
            behavior: "smooth"
        });
    }
    gc(): void {
        this.editor.destroy();
    }
}

export { MilkdownImpl }