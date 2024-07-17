<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__specitem-diploms"
    v-if="profile && profile.diplomas.length"
  >
    <h3 class="main__specitem-diploms-title">дипломы сотрудника</h3>

    <div class="main__specitem-diploms-wrapper">
      <button ref="prev" class="main__specitem-diploms-wrapper-prev">
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

      <div class="main__specitem-diploms-wrapper-inner">
        <swiper
          :centeredSlides="profile.diplomas.length < 3 ? true : false"
          :breakpoints="swiperOptions.breakpoints"
          :modules="modules"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          :loop="profile.diplomas.length > 3 ? true : false"
          :spaceBetween="24"
          :slidesPerView="`auto`"
          class="main__specitem-diploms-wrapper-inner-slider"
          :lazy="true"
          :lazyPreloadPrevNext="1"
          preloadImages="false"
        >
          <swiper-slide
            v-for="(item, index) in profile.diplomas"
            :key="index"
            class="main__specitem-diploms-wrapper-inner-slider-slide"
          >
            <div class="main__specitem-diploms-wrapper-inner-slider-slide-img">
              <img
                @click="openModal(item.file)"
                :src="item.file"
                alt="фото диплома"
                loading="lazy"
              />
              <div class="swiper-lazy-preloader"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <button ref="next" class="main__specitem-diploms-wrapper-next">
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
  <div
    v-if="showModal"
    class="main__specitem-diploms-modal"
    @click="closeModal"
  >
    <div class="main__specitem-diploms-modal-content" @click.stop>
      <img v-lazy="selectedImage" alt="фото диплома" />
    </div>

    <svg
      @click="closeModal"
      class="main__specitem-diploms-modal-close"
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
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/SpecialistItem/SpecialistItem.scss";
const { isMobile } = useIsMobile();

const props = defineProps({
  profile: {
    type: Object,
  },
});
const prev = ref(null);
const next = ref(null);
const modules = ref([Navigation, Autoplay], prev, next);

let swiperOptions = ref({
  breakpoints: {
    360: {
      spaceBetween: 15,
    },
    600: {
      spaceBetween: 24,
    },
  },
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
</script>
