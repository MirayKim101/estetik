<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__specitem-certificates"
    v-if="profile && profile.certificates"
  >
    <div class="main__specitem-certificates-wrapper">
      <h4 class="main__specitem-certificates-wrapper-title">Сертификаты:</h4>

      <div
        v-html="profile.certificates"
        class="main__specitem-certificates-wrapper-text"
      ></div>
      <img
        v-if="profile.certificates"
        class="main__specitem-certificates-wrapper-img"
        src="@/assets/images/icons/quotes.svg"
        alt="декоративная картинка"
      />
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();
const props = defineProps({
  profile: {
    type: Object,
  },
});
</script>
