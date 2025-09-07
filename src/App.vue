<script setup lang="ts">
import { ref, onMounted, onUnmounted, Ref } from 'vue';
import EditorModal from '@/components/EditorModal.vue';
import { EVENTS } from './constants';

const isModalShown = ref(false);

onMounted(() => {
  window.addEventListener(EVENTS.showEditor, showModal);
});
onUnmounted(() => {
  window.removeEventListener(EVENTS.showEditor, showModal);
});

function showModal() {
  isModalShown.value = true;
}
function hideModal() {
  isModalShown.value = false;
}
</script>

<template>
  <EditorModal v-model:visible="isModalShown" @keydown.stop @editor-closed="hideModal">
  </EditorModal>
</template>

<style scoped></style>
