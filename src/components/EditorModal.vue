<script setup lang="ts">
import { ROUTES, EVENTS, OPTIONS, DetailMessage, postJsonData, comfyApp } from '../constants.js';
// Vue 
import { onMounted, ref, type Ref, onUnmounted } from 'vue'
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
const autosaveTimer: Ref<NodeJS.Timeout | null> = ref(null);

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
// 将准备保存的内容发回后端
function saveNote() {
  postJsonData(
    comfyApp,
    ROUTES.saveContent,
    new DetailMessage(
      editorInstance.value.getValue(),
      notePath.value
    )
  ).then(_ => {
    comfyApp.extensionManager.toast.add({
      severity: "success",
      summary: "MDNotes",
      detail: "Note saved",
      life: 600
    });
  });
}
// 按钮行为控制
class ButtonControl {
  static ok() {
    // 保存内容
    saveNote();
    isModalShown.value = false;
  }
  static cancel() {
    isModalShown.value = false;
  }
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
    keydown: (event) => {
      if (comfyApp.extensionManager.setting.get(OPTIONS.autosave)) {
        // 自动保存计时器启动
        // 若存在旧的计时器，先清除
        clearTimeout(autosaveTimer.value);
        autosaveTimer.value = setTimeout(() => {
          saveNote();
        }, comfyApp.extensionManager.setting.get(OPTIONS.autosaveDelay)); // 2秒自动保存一次
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
  // 自动保存计时器清除
  clearTimeout(autosaveTimer.value);
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
    :header="notePath" close-on-escape>
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