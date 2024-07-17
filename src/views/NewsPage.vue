<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <News @newsLoaded="newsLoaded" />
  <Feedback />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import News from "@/components/News/News.vue";
import Feedback from "../components/Feedback/Feedback.vue";

const isLoaded = ref(false);

const newsLoaded = () => {
  isLoaded.value = true;
  document.body.classList.remove("no-scroll");
};

onMounted(() => {
  document.body.classList.add("no-scroll");
});

onUnmounted(() => {
  if (!isLoaded.value) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
