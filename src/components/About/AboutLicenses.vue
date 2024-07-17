<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__about-licenses"
    v-if="licensesList && licensesList.length"
  >
    <h2 class="main__about-licenses-title">лицензии на мед. деятельность</h2>
    <swiper
      v-if="!isShown"
      :loop="true"
      :spaceBetween="16"
      :breakpoints="swiperOptions.breakpoints"
      class="main__about-licenses-slider"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide
        v-for="(photo, index) in licensesList"
        :key="index"
        class="main__about-licenses-slider-slide"
      >
        <img
          @click="openModal(photo.photo)"
          loading="lazy"
          :src="photo.photo"
          alt="фотография лицензии"
        />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>

    <div v-else class="main__about-licenses-images">
      <div
        v-for="(photo, index) in licensesList"
        :key="index"
        :class="{ 'main__about-licenses-images-img-large': index === 1 }"
        class="main__about-licenses-images-img"
      >
        <img
          @click="openModal(photo.photo)"
          v-lazy="photo.photo"
          alt="фотография лицензии"
        />
      </div>
    </div>
  </div>
  <div
    v-if="showModal"
    class="main__about-licenses-images-modal"
    @click="closeModal"
  >
    <div class="main__about-licenses-images-modal-content" @click.stop>
      <img v-lazy="selectedImage" alt="фотография лицензии" />
    </div>

    <svg
      class="main__about-licenses-images-modal-close"
      @click="closeModal"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 1L1 15M15 15L1 1" stroke-width="2" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script setup>
import { ref, watchEffect, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/About/About.scss";
const { isMobile } = useIsMobile();

const props = defineProps({
  licensesList: Array,
});
const showModal = ref(false);
const selectedImage = ref("");

const openModal = (img) => {
  selectedImage.value = img;
  showModal.value = true;
  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("no-scroll");
};

const isShown = ref(false);

const mediaQuery = window.matchMedia("(min-width:481px)");

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
      slidesPerView: "auto",
      centeredSlides: true,
    },
    480: {
      slidesPerView: "auto",
      centeredSlides: true,
    },
  },
});
</script>
