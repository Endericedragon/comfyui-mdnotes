<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import EditorModal from '@/components/EditorModal.vue';

const isModalShown = ref(false);

function showModal() {
  isModalShown.value = true;
}

onMounted(() => {
  window.addEventListener("endericedragon-show-mdnotes", showModal);
});
onUnmounted(() => {
  window.removeEventListener("endericedragon-show-mdnotes", showModal);
});
</script>

<template>
  <EditorModal v-model:visible="isModalShown" @keydown.stop @editor-closed="isModalShown = false"></EditorModal>
</template>

<style scoped></style>
