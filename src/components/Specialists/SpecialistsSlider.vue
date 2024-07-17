<template>
  <swiper
    :data-aos="!isMobile ? 'fade-down' : ''"
    v-if="!isShown && specialistList && specialistList.length"
    :breakpoints="swiperOptions.breakpoints"
    :loop="specialistList && specialistList.length >= 4 ? true : false"
    :spaceBetween="16"
    :modules="modules"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :speed="1000"
    class="main__specialists-slider"
    :lazy="true"
    :lazyPreloadPrevNext="1"
    preloadImages="false"
  >
    <swiper-slide
      v-for="specialist in specialistList"
      :key="specialist.id"
      class="main__specialists-slider-slide"
    >
      <router-link
        :to="`/specialists/${specialist.id}`"
        class="main__specialists-slider-slide-wrapper"
      >
        <div class="main__specialists-slider-slide-wrapper-img">
          <img loading="lazy" :src="specialist.photo" alt="фото врача" />
          <div class="swiper-lazy-preloader"></div>
        </div>

        <div class="main__specialists-slider-slide-wrapper-content">
          <h4 class="main__specialists-slider-slide-wrapper-content-title">
            {{ specialist.full_name }}
          </h4>
          <span class="main__specialists-slider-slide-wrapper-content-position">
            {{ specialist.position }}
          </span>
          <span class="main__specialists-slider-slide-wrapper-content-exp">
            {{ specialist.experience_in_years }}+ опыта
          </span>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>

  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    v-else
    class="main__specialists-cards"
  >
    <div
      v-if="specialistList && specialistList.length"
      class="main__specialists-cards-card"
      v-for="specialist in specialistList"
      :key="specialist.id"
    >
      <router-link
        :to="`/specialists/${specialist.id}`"
        class="main__specialists-cards-card-wrapper"
      >
        <div class="main__specialists-cards-card-wrapper-content">
          <div class="main__specialists-cards-card-wrapper-content-img">
            <img v-lazy="specialist.photo" alt="фото врача" />
          </div>

          <div class="main__specialists-cards-card-wrapper-content-text">
            <h4 class="main__specialists-cards-card-wrapper-content-text-title">
              {{ specialist.full_name }}
            </h4>
            <span
              class="main__specialists-cards-card-wrapper-content-text-position"
            >
              {{ specialist.position }}
            </span>
            <span class="main__specialists-cards-card-wrapper-content-text-exp">
              {{ specialist.experience_in_years }}+ опыта
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/Specialists/Specialists.scss";
const { isMobile } = useIsMobile();
const modules = ref([Autoplay]);
const isShown = ref(true);
const mediaQuery = window.matchMedia("(min-width: 481px)");
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
let swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    360: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    375: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },

    576: {
      slidesPerView: 2.1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },

    772: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },

    992: {
      slidesPerView: 3.1,
      spaceBetween: 24,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 4.1,
      spaceBetween: 24,
      slidesPerGroup: 1,
    },
    1330: {
      slidesPerView: 4.2,
      spaceBetween: 24,
      slidesPerGroup: 1,
    },
  },
});
const props = defineProps({
  specialistList: {
    typeof: Array,
  },
});
</script>
