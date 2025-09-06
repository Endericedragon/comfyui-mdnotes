<script setup lang="ts">
import { Routes } from '../routes.js';
// Vue utils
import { ref, onMounted, defineEmits } from 'vue'
import type { Ref } from 'vue';
// Bootstrap Vue Next utils
import { BModal } from "bootstrap-vue-next";
// Vditor utils
import Vditor from "vditor";
import { app } from "../../../scripts/app.js";
import type { ComfyApp } from '@comfyorg/comfyui-frontend-types';

const modalTitle = ref("mdnotes-editor");
// create vditor instance to show/edit markdown notes
let vditorInstance: Ref<Vditor | undefined> = ref();
// mount vditor instance
onMounted(() => {
  let editor = new Vditor("mde-point", {
    minHeight: 320,
    cache: { enable: false },
    theme: "dark",
    preview: {
      theme: {
        current: "dark"
      }
    }
  });
  vditorInstance.value = editor;

  window.addEventListener("endericedragon-set-content", setEditorContent);
});

const emit = defineEmits(["editor-opened", "editor-closed"]);

function setEditorContent(e: Event) {
  let detail = (e as CustomEvent).detail;
  let content = detail["content"];
  let filename = detail["filename"];
  modalTitle.value = filename;
  if (vditorInstance.value !== undefined) {
    vditorInstance.value.setValue(content);
  }
}
function handleOk() {
  console.log("Wohooo~!");
  if (vditorInstance.value !== undefined) {
    let content = vditorInstance.value.getValue();
    let filename = modalTitle.value;

    let comfyApp: ComfyApp = app;
    comfyApp.api.fetchApi(Routes.saveContent, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filename: filename,
        content: content
      })
    });
  }
}
function handleCancel() {
  console.error("Bruh...");
}
function handleVisibilityChange(isVisible: boolean) {
  if (isVisible) {
    emit("editor-opened");
  } else {
    emit("editor-closed");
  }
}
</script>

<template>
  <BModal size="xl" :title="modalTitle" @ok="handleOk" @cancel="handleCancel"
    @update:model-value="handleVisibilityChange">
    <div id="mde-point"></div>
  </BModal>
</template>

<style scoped></style>