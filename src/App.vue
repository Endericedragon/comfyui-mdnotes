<script setup lang="ts">
import { ref, onMounted, onUnmounted, Ref, provide } from 'vue';

import { type DynamicDialogInstance } from "primevue/dynamicdialogoptions";
import { DynamicDialog } from "primevue";

import EditorModal from '@/components/EditorModal.vue';
import { EVENTS } from './constants';

const isModalShown = ref(false);
provide("isModalShown", isModalShown); // 注射到EditorModal里去了

onMounted(() => {
  window.addEventListener(EVENTS.showEditor, showModal);
});
onUnmounted(() => {
  window.removeEventListener(EVENTS.showEditor, showModal);
});

function showModal() {
  isModalShown.value = true;
}
// function hideModal() {
//   isModalShown.value = false;
// }
</script>

<template>
  <DynamicDialog></DynamicDialog>
  <EditorModal @keydown.stop> </EditorModal>
</template>

<style scoped></style>
