<template>
  <div
  :data-aos="!isMobile ? 'fade-down' : ''"
  v-if="images && images.length"
    class="main__about-wrapper"
  >
    <h3 class="main__about-slider-title">фотогалерея</h3>

    <div class="main__about-slider-switcher">
      <button
        @click="getCategoryId(category.id)"
        v-for="category in categories"
        :key="category.id"
        class="main__about-slider-switcher-btn"
        :class="{
          active: category.id === activeCategoryId,
        }"
      >
        {{ category.title }}
      </button>
    </div>
    <swiper
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween="24"
      :loop="images && images.length >= 4 ? true : false"
      :centeredSlides="images && images.length <= 2 ? true : false"
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :speed="1000"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
      class="main__about-slider"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide
        v-for="photo in images"
        :key="photo.id"
        class="main__about-slider-slide"
      >
        <div class="main__about-slider-slide-img">
          <img loading="lazy" :src="photo.photo" alt="фотография в слайдере" />
          <div class="swiper-lazy-preloader"></div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="main__about-slider-btns">
      <button ref="prev" class="main__about-slider-btns-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M16.8002 19.6001L11.2002 14.0001L16.8002 8.4001"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button ref="next" class="main__about-slider-btns-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M11.1998 8.3999L16.7998 13.9999L11.1998 19.5999"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/About/About.scss";
import { usePhotogalleries } from "@/store/Photogalleries.js";
const { isMobile } = useIsMobile();

const photogalleries = usePhotogalleries();

const props = defineProps({
  categories: {
    type: Array,
  },
  images: {
    type: Array,
  },
});

const activeCategoryId = ref(null);

const getCategoryId = async (category_id) => {
  if (activeCategoryId.value === category_id) {
    activeCategoryId.value = null;

    await photogalleries.getImages();
  } else {
    activeCategoryId.value = category_id;

    await photogalleries.getImages(category_id);
  }
};

const prev = ref(null);
const next = ref(null);
const modules = ref([Navigation, Autoplay], prev, next);

let swiperOptions = ref({
  breakpoints: {
    360: {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
    },
    1330: {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
    },
  },
});

onMounted(() => {
  getCategoryId();
});
</script>
