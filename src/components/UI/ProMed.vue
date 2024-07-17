<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="promed">
    <div class="promed-top">
      <h3 class="promed-top-title">
        Все наши врачи имеют медицинское
        <span>
          <img src="@/assets/images/UI/promed-1.png" alt="" />
        </span>
      </h3>
    </div>

    <div class="promed-bottom">
      <h3 class="promed-bottom-title">
        образование
        <span class="promed-bottom-title-decor-2">
          <img src="@/assets/images/UI/promed-2.png" alt="" />
        </span>
        <span class="promed-bottom-title-decor-3">
          <img src="@/assets/images/UI/promed-3.png" alt="" />
        </span>
      </h3>
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();
</script>
