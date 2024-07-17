<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__about-img"
    v-if="aboutBanner"
  >
    <div class="main__about-img-wrapper">
      <div
        v-html="aboutBanner.summary"
        class="main__about-img-wrapper-title"
      ></div>

      <div class="main__about-img-wrapper-content">
        <div v-if="isVideo" class="main__about-img-wrapper-content-video">
          <video
            poster="@/assets/images/poster.png"
            preload="auto"
            muted
            loop
            autoplay
            :src="aboutBanner.video"
            playsinline
            webkit-playsinline
          ></video>
        </div>
        <div v-else class="main__about-img-wrapper-content-img">
          <img
            v-lazy="aboutBanner.video"
            alt=" картинка на странице о клинике"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useIsMobile } from "@/useIsMobile.js";

const props = defineProps({
  aboutBanner: {
    typeof: Object,
  },
});

const isVideo = computed(() => {
  return props.aboutBanner.video && props.aboutBanner.video.endsWith(".mp4");
});
const { isMobile } = useIsMobile();
</script>
