<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import type { Ref } from 'vue';
import { BModal } from "bootstrap-vue-next";
import Vditor from "vditor";

let vditorInstance: Ref<Vditor | undefined> = ref();
onMounted(() => {
  vditorInstance.value = new Vditor("mde-point", {
    minHeight: 320
  });
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
  <BModal visible teleport-disabled title="Note Editor" @ok="handleOk" @cancel="handleCancel"
    @update:model-value="handleVisibilityChange">
    <div id="mde-point"></div>
  </BModal>
</template>

<style scoped></style>