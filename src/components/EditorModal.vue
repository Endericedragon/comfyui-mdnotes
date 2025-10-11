<script setup lang="ts">
import { ROUTES, EVENTS, OPTIONS, DetailMessage, postJsonData, comfyApp, MD_EDITOR_NAMES, CDNs, postTextData } from "@/constants.js";
// Vue 
import { onMounted, onUnmounted, ref, type Ref, computed } from "vue";
// bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.min.css";
// primevue
import { Button, Dialog } from "primevue";
// Our editor implement 
import {type VditorImpl } from "@/editors/vditorImpl";
import { type MilkdownImpl } from "@/editors/milkdownImpl";
import { type EditorTrait } from "@/editors/traits";
import { createEditor, EditorConfig } from "@/editors/editorFactory";

const notePath = ref("");
const mdContent = ref("");
const isModalShown = ref(false);
const scrollTopVal = ref(0);
const unsaveMark = ref(false);
const needSaving = ref(false);
const dialogTitle = computed(() => {
  return unsaveMark.value ? `${notePath.value}*` : notePath.value;
});
const cdnToUse = computed(() => {
  if (comfyApp.extensionManager.setting.get(OPTIONS.useLocalCDN)) {
    // 发送当前选定的远程CDN
    postTextData(comfyApp, ROUTES.setCDN, comfyApp.extensionManager.setting.get(OPTIONS.cdnSwitch)).then();
    return CDNs.localCachedCDN;
  } else {
    return comfyApp.extensionManager.setting.get(OPTIONS.cdnSwitch) as string;
  }
});

// create vditor instance to show/edit markdown notes
const editorInstance: Ref<EditorTrait | null> = ref(null);
// let editorInstance: Ref<Vditor | undefined> = ref();
// mount vditor instance
onMounted(() => {
  // 监听事件，当打开编辑器时，设置内容
  window.addEventListener(EVENTS.showEditor, openNSetContent);
});
onUnmounted(() => {
  window.removeEventListener(EVENTS.showEditor, openNSetContent);
});

// 打开编辑器，并设置内容
function openNSetContent(e: Event) {
  // 获取标题栏和内容
  let detail = (e as CustomEvent<DetailMessage>).detail;
  let content = detail.content;
  let relFilePath = detail.rel_file_path;
  if (notePath.value !== relFilePath) {
    notePath.value = relFilePath;
    scrollTopVal.value = 0;
  }
  mdContent.value = content;
  // 触发handleShow，从而设置对话框可见性
  isModalShown.value = true;
}
// 将发生变化的笔记发回后端保存
function saveNote() {
  const newContent = editorInstance.value?.getMarkdownContent();
  if (newContent !== mdContent.value) {
    mdContent.value = newContent;
    postJsonData(
      comfyApp,
      ROUTES.saveContent,
      new DetailMessage(
        newContent,
        notePath.value
      )
    ).then(_ => {
      comfyApp.extensionManager.toast.add({
        severity: "success",
        summary: "MDNotes",
        detail: "Note is saved!",
        life: 2000
      });
    });
  }
}
// 按钮行为控制
class ButtonControl {
  static ok() {
    // 保存内容
    needSaving.value = true;
    isModalShown.value = false;
  }
  static cancel() {
    isModalShown.value = false;
  }
}
// 对话框显示时，创建编辑器实例
function handleShow() {
  // 复位所有修改标志位
  unsaveMark.value = false;
  needSaving.value = false;
  // Setting Vditor or Milkdown
  const editorConfig: EditorConfig = {
    rootElemId: "mde-point",
    mdContent: mdContent.value,
    callbacks: {
      afterContentChange: (_) => {
        unsaveMark.value = true;
        if (comfyApp.extensionManager.setting.get(OPTIONS.saveOnClose)) {
          needSaving.value = true;
        }
      }
    }
  };
  switch (comfyApp.extensionManager.setting.get(OPTIONS.editorSwitch)) {
    case MD_EDITOR_NAMES.vditor:
      editorConfig.cdnUrl = cdnToUse.value;
      editorConfig.callbacks.afterRender = (obj: VditorImpl) => {
        // console.log(comfyApp.extensionManager.setting.get("Comfy.ColorPalette"));
        obj.editor.setTheme(
          "dark",
          "dark",
          "atom-one-dark"
        );
        // 滚动记忆
        obj.setScrollTop(scrollTopVal.value);
      };
      editorInstance.value = createEditor(MD_EDITOR_NAMES.vditor, editorConfig);
      break;
    case MD_EDITOR_NAMES.milkdown:
      editorConfig.callbacks.afterRender = (obj: MilkdownImpl) => {
        // 滚动记忆
        obj.setScrollTop(scrollTopVal.value);
      };
      editorInstance.value = createEditor(MD_EDITOR_NAMES.milkdown, editorConfig);
      break;
  }
}
// 隐藏对话框后，销毁编辑器实例
function handleAfterHide() {
  // 若需要保存，执行保存操作
  if (needSaving.value) {
    saveNote();
  }
  editorInstance.value?.gc();
}
// 对话框隐藏时，记录滚动位置
function handleHide() {
  scrollTopVal.value = editorInstance.value?.getScrollTop();
}
</script>

<template>
  <Dialog v-model:visible="isModalShown" @show="handleShow" @hide="handleHide" @after-hide="handleAfterHide"
    :header="dialogTitle" close-on-escape>
    <div id="mde-point"></div>
    <div class="endericedragon-sticky-buttons">
      <Button severity="danger" @click="ButtonControl.cancel">
        <i class="bi bi-x-circle"></i>
      </Button>
      <Button severity="success" @click="ButtonControl.ok">
        <i class="bi bi-check2-circle"></i>
      </Button>
    </div>
  </Dialog>
</template>

<style scoped>
#mde-point {
  max-width: 64vw;
}

.endericedragon-sticky-buttons {
  position: sticky;
  bottom: 0;
  margin: 1em 0.5em 0 0;
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
}
</style>

<style>
#mde-point .cm-line {
  font-family: Consolas, monospace;
}
</style>