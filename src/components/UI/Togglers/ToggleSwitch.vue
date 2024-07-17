<template>
  <label class="switch">
    <input
      type="checkbox"
      v-model="isSwitchActive"
      @click="$emit('onSwitch', !isSwitchActive)"
    />
    <span class="slider"></span>
  </label>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps(["active"]);

const isSwitchActive = ref(props.active);

watch(
  () => props.active,
  (newValue) => {
    if (newValue == true) {
      isSwitchActive.value = true;
    } else {
      isSwitchActive.value = false;
    }
  }
);
</script>
