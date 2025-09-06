<script setup lang="ts">
// Vue utils
import { ref, onMounted, defineEmits } from 'vue'
import type { Ref } from 'vue';
// Bootstrap Vue Next utils
import { BModal } from "bootstrap-vue-next";
// Vditor utils
import Vditor from "vditor";

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
});

const emit = defineEmits(["editor-opened", "editor-closed"]);

function handleOk() {
  console.log("Wohooo~!");
  if (vditorInstance.value !== undefined) {
    console.log(vditorInstance.value.getValue());
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
  <BModal title="Note Editor" @ok="handleOk" @cancel="handleCancel" @update:model-value="handleVisibilityChange">
    <div id="mde-point"></div>
  </BModal>
</template>

<style scoped></style>