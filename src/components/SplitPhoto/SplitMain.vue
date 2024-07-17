<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="main__split">
    <h2 class="main__split-title">мы решаем ваши проблемы</h2>
    <div class="main__split-subtitle">
      <span>
        Взгляните на наши успешные проекты, мы готовы решить любую вашу
        косметическую проблему
      </span>
      <span>Записывайтесь!</span>
    </div>

    <SplitSlider />
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
import SplitSlider from "./SplitSlider.vue";
const { isMobile } = useIsMobile();

</script>
