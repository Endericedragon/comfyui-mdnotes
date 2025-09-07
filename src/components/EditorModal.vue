<script setup lang="ts">
import { ROUTES, EVENTS, DetailMessage, postJsonData } from '../constants.js';
// Vue utils
import { ref, onMounted, defineEmits } from 'vue'
import type { Ref } from 'vue';
// Bootstrap Vue Next utils
import { BModal } from "bootstrap-vue-next";
// Vditor utils
import Vditor from "vditor";
import { app } from "../../../scripts/app.js";
import type { ComfyApp } from '@comfyorg/comfyui-frontend-types';

const notePath = ref("");
const modalTitle = ref("mdnotes-editor");
// create vditor instance to show/edit markdown notes
let vditorInstance: Ref<Vditor | undefined> = ref();
// mount vditor instance
onMounted(() => {
  let editor = new Vditor("mde-point", {
    minHeight: 320,
    cache: { enable: false },
  });
  vditorInstance.value = editor;
  // 监听事件，当打开编辑器时，设置内容
  window.addEventListener(EVENTS.setContent, setEditorContent);
});

// 定义编辑器事件
const emit = defineEmits(["editor-opened", "editor-closed"]);

// 设置编辑器主题和内容
function setEditorContent(e: Event) {
  // 每次打开编辑器时都设置一次颜色主题
  vditorInstance.value.setTheme("dark", "dark", "tokyo-night-dark")
  let detail = (e as CustomEvent<DetailMessage>).detail;
  let content = detail.content;
  let relFilePath = detail.rel_file_path;
  notePath.value = relFilePath;
  modalTitle.value = relFilePath;
  if (vditorInstance.value !== undefined) {
    vditorInstance.value.setValue(content);
  }
}
// 保存内容
function handleOk() {
  console.log("Wohooo~!");
  if (vditorInstance.value !== undefined) {
    let content = vditorInstance.value.getValue();
    let comfyApp: ComfyApp = app;
    postJsonData(comfyApp, ROUTES.saveContent, new DetailMessage(content, notePath.value));
  }
}
// 舍弃修改
function handleCancel() {
  console.error("Bruh...");
}
// 检查编辑器状态，并发送相应事件
function handleVisibilityChange(isVisible: boolean) {
  if (isVisible) {
    emit("editor-opened");
  } else {
    emit("editor-closed");
  }
}
</script>

<template>
  <BModal header-variant="secondary" footer-variant="secondary" body-variant="secondary" cancel-variant="dark"
    scrollable size="xl" :title="modalTitle" @ok="handleOk" @cancel="handleCancel"
    @update:model-value="handleVisibilityChange">
    <div id="mde-point"></div>
  </BModal>
</template>

<style scoped></style>