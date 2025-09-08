<script setup lang="ts">
import { ROUTES, EVENTS, DetailMessage, postJsonData } from '../constants.js';
// Vue utils
import { onMounted, ref, type Ref, onUnmounted } from 'vue'
// Bootstrap Vue Next utils
import { BModal } from "bootstrap-vue-next";
// Vditor utils
import Vditor from "vditor";
import { app } from "../../../scripts/app.js";
import type { ComfyApp } from '@comfyorg/comfyui-frontend-types';

const notePath = ref("");
const modalTitle = ref("");
const isModalShown = ref(false);

// create vditor instance to show/edit markdown notes
let vditorInstance: Ref<Vditor | undefined> = ref();
// mount vditor instance
onMounted(() => {
  vditorInstance.value = new Vditor("mde-point", {
    minHeight: 320,
    mode: "wysiwyg",
    toolbarConfig: {
      pin: true
    },
    after: () => {
      // 渲染完成后方可设置颜色主题
      vditorInstance.value.setTheme("dark", "dark", "tokyo-night-dark")
    }
  });
  // 监听事件，当打开编辑器时，设置内容
  window.addEventListener(EVENTS.showEditor, openNSetContent);
});
onUnmounted(() => {
  window.removeEventListener(EVENTS.showEditor, openNSetContent);
});

// 设置编辑器内容
function openNSetContent(e: Event) {
  isModalShown.value = true;
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
  if (vditorInstance.value !== undefined) {
    let content = vditorInstance.value.getValue();
    let comfyApp: ComfyApp = app;
    postJsonData(comfyApp, ROUTES.saveContent, new DetailMessage(content, notePath.value));
  }
}
// 舍弃修改
function handleCancel() { }
// 检查编辑器状态，并相应修改状态变量
function handleVisibilityChange(isVisible: boolean) {
  isModalShown.value = isVisible;
}
</script>

<template>
  <BModal centered header-variant="secondary" footer-variant="secondary" body-variant="secondary" cancel-variant="dark"
    size="xl" :title="modalTitle" @ok="handleOk" @cancel="handleCancel" v-model:visible="isModalShown"
    @update:model-value="handleVisibilityChange">
    <div id="mde-point"></div>
  </BModal>
</template>

<style scoped></style>