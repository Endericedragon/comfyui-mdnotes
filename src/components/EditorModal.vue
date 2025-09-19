<script setup lang="ts">
import { ROUTES, EVENTS, OPTIONS, DetailMessage, postJsonData, comfyApp } from '../constants.js';
// Vue 
import { onMounted, ref, type Ref, onUnmounted, computed } from 'vue'
// bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.min.css";
// primevue
import { Button, Dialog } from 'primevue';
// Vditor 
import Vditor from "vditor";
import "vditor/dist/index.css";

const notePath = ref("");
const mdContent = ref("");
const isModalShown = ref(false);
const scrollTopVal = ref(0);
const unsaveMark = ref(false);
const dialogTitle = computed(() => {
  return unsaveMark.value ? `${notePath.value}*` : notePath.value;
});
const need2Save = ref(false);

// create vditor instance to show/edit markdown notes
let editorInstance: Ref<Vditor | undefined> = ref();
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
  unsaveMark.value = false;
  const newContent = editorInstance.value?.getValue();
  if (newContent !== mdContent.value) {
    mdContent.value = newContent;
    postJsonData(
      comfyApp,
      ROUTES.saveContent,
      new DetailMessage(
        editorInstance.value.getValue(),
        notePath.value
      )
    ).then(_ => {
      // 是否提示用户保存成功？
      if (comfyApp.extensionManager.setting.get(OPTIONS.showSaveToast)) {
        comfyApp.extensionManager.toast.add({
          severity: "success",
          summary: "MDNotes",
          detail: "Note is saved!",
          life: 2000
        });
      }
    });
  }
}
// 按钮行为控制
class ButtonControl {
  static ok() {
    // 保存内容
    need2Save.value = true;
    isModalShown.value = false;
  }
  static cancel() {
    isModalShown.value = false;
  }
}
// 会改变编辑器内容的键盘事件
function canChangeContent(e: KeyboardEvent) {
  console.log(e);
  const isCtrlC = (e.key === "c") && e.ctrlKey;
  const isCtrlA = (e.key === "a") && e.ctrlKey;
  return !isCtrlC && !isCtrlA && (e.key === "Tab" || e.key === "Backspace" || e.key === "Delete" || e.key.length === 1);
}
// 对话框显示时，创建编辑器实例
function handleShow() {
  let mountPoint = document.getElementById("mde-point");
  let dialogContainer = mountPoint.parentElement;

  editorInstance.value = new Vditor("mde-point", {
    minHeight: 320,
    toolbarConfig: {
      pin: true
    },
    preview: {
      hljs: {
        lineNumber: true
      },
      maxWidth: 2147483647 // 具体的宽度由Dialog说了算
    },
    // 监听键盘事件，当用户输入时，将需要保存
    keydown: (e) => {
      if (canChangeContent(e)) {
        unsaveMark.value = true;
        if (comfyApp.extensionManager.setting.get(OPTIONS.autosave)) {
          need2Save.value = true;
        }
      }
    },
    after: () => {
      editorInstance.value?.setTheme(
        "dark",
        "dark",
        "atom-one-dark"
      );
      // 装入数据
      editorInstance.value?.setValue(mdContent.value);
      mdContent.value = "";
      // 滚动记忆
      console.log("[mdnotes] Setting scrollTop value to ", scrollTopVal.value);
      dialogContainer.scrollTo({
        top: scrollTopVal.value,
        left: 0,
        behavior: "smooth"
      });
    }
  });
}
// 隐藏对话框后，销毁编辑器实例
function handleHide() {
  // 若需要保存，执行保存操作
  if (need2Save.value) {
    saveNote();
    need2Save.value = false;
  }
  editorInstance.value?.destroy();
}
// 对话框隐藏时，记录滚动位置
function rememberScrollValue() {
  let dialogContainer = document.getElementById("mde-point").parentElement;
  console.log("[mdnotes] Scrolled to ", dialogContainer.scrollTop);
  scrollTopVal.value = dialogContainer.scrollTop;
}
</script>

<template>
  <Dialog v-model:visible="isModalShown" @show="handleShow" @hide="rememberScrollValue" @after-hide="handleHide"
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