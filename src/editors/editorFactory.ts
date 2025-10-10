import { EditorTrait } from "./traits";
import { VditorImpl } from "./vditorImpl";
import { MilkdownImpl } from "./milkdownImpl";
import { CDNs, MD_EDITOR_NAMES } from "@/constants";

interface EditorConfig {
    rootElemId: string;
    mdContent: string;
    cdnUrl?: string;
    callbacks: {
        afterRender?: (obj: EditorTrait) => void;
        afterContentChange?: (obj: EditorTrait) => void;
    }
}

function createEditor(type: MD_EDITOR_NAMES, config: EditorConfig): EditorTrait {
    switch (type) {
        case MD_EDITOR_NAMES.vditor:
            return new VditorImpl(
                config.rootElemId,
                config.mdContent,
                config.cdnUrl || CDNs.unpkg,
                config.callbacks,
            );
        case MD_EDITOR_NAMES.milkdown:
            return new MilkdownImpl(
                config.rootElemId,
                config.mdContent,
                config.callbacks
            );
    }
}

export { createEditor, EditorConfig }