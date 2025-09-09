<script setup lang="ts">
import { ROUTES, EVENTS, DetailMessage, postJsonData } from '../constants.js';
// Vue utils
import { onMounted, ref, type Ref, onUnmounted } from 'vue'
// Bootstrap Vue Next utils
import { BModal, BButton } from "bootstrap-vue-next";
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
    preview: {
      hljs: {
        lineNumber: true
      }
    },
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
  vditorInstance.value.setValue(content);
}
// 保存内容
function handleOk() {
  let content = vditorInstance.value.getValue();
  let comfyApp: ComfyApp = app;
  postJsonData(comfyApp, ROUTES.saveContent, new DetailMessage(content, notePath.value));
  isModalShown.value = false;
}
</script>

<template>
  <BModal centered header-variant="secondary" footer-variant="secondary" body-variant="secondary" no-footer size="xl"
    :title="modalTitle" @ok="handleOk" v-model="isModalShown">
    <div id="mde-point"></div>
    <hr class="my-divider">
    <div class="floating-btns">
      <BButton variant="warning" @click="isModalShown = false;">
        <i class="bi bi-x-circle"></i>
      </BButton>
      <BButton variant="info" @click="handleOk">
        <i class="bi bi-check2-circle"></i>
      </BButton>
    </div>
  </BModal>
</template>

<style scoped>
.floating-btns {
  position: sticky;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  bottom: 0.5em;
  margin: 0 0.5em;
  gap: 0.5em;
}

.my-divider {
  margin: 1rem 0;
}
</style>