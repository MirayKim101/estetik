<template>
  <div v-if="isShown" class="main__specitem-performed">
    <div
      :data-aos="!isMobile ? 'fade-down' : ''"
      v-if="specialiList && specialiList.length"
      class="main__specitem-performed-wrapper"
    >
      <h2 class="main__specitem-performed-wrapper-title">
        выполняемые процедуры
      </h2>
      <div class="main__specitem-performed-inner">
        <ServicesItem
          :item="item.service"
          v-for="item in specialiList"
          :key="item.id"
        />
      </div>
    </div>
  </div>

  <div v-else class="main__specitem-performed">
    <div
      :data-aos="!isMobile ? 'fade-down' : ''"
      v-if="specialiList && specialiList.length"
      class="main__specitem-performed-wrapper"
    >
      <h2 class="main__specitem-performed-wrapper-title">
        выполняемые процедуры
      </h2>

      <div class="main__specitem-performed-slider">
        <swiper
          :loop="specialiList.length > 4"
          :breakpoints="swiperOptions.breakpoints"
        >
          <swiper-slide v-for="item in specialiList" :key="item.id">
            <ServicesItem :item="item.service" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useIsMobile } from "@/useIsMobile.js";
import ServicesItem from "@/components/Services/ServicesItem.vue";
const { isMobile } = useIsMobile();

const props = defineProps({
  specialiList: {
    type: Array,
  },
});
const isShown = ref(false);
const mediaQuery = window.matchMedia("(min-width: 710px)");
const onResize = () => {
  isShown.value = mediaQuery.matches;
};
watchEffect(() => {
  onResize();
  mediaQuery.addEventListener("change", onResize);
});
onBeforeUnmount(() => {
  mediaQuery.removeEventListener("change", onResize);
});
const swiperOptions = ref({
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    680: {
      slidesPerView: 2,
    },
  },
});
</script>
