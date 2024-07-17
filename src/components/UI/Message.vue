<template>
  <div
    class="messages"
    :class="{
      visibility: isVisible,
    }"
  >
    <img src="@/assets/images/icons/check.svg" alt="иконка" />
    <span class="messages-title">{{ title }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps(["title", "isVisible"]);
const isVisible = ref(false);

watch(
  () => props.isVisible,
  (newValue) => {
    isVisible.value = true;

    setTimeout(() => {
      isVisible.value = false;
    }, 2000);
  }
);
</script>
