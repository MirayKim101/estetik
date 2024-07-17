<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="serviceItem__intro"
    v-if="service"
  >
    <div class="serviceItem__intro-sliders">
      <div class="serviceItem__intro-sliders-top">
        <swiper
          :pagination="pagination"
          :loop="service.images.length > 4 ? true : false"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="serviceItem__intro-sliders-top-slider"
          :lazy="true"
          :lazyPreloadPrevNext="1"
          preloadImages="false"
        >
          <swiper-slide
            v-for="(item, index) in service.images"
            :key="item.id"
            class="serviceItem__intro-sliders-top-slider-slide"
          >
            <div class="serviceItem__intro-sliders-top-slider-slide-img">
              <img loading="lazy" :src="item.image" alt="фото услуги" />
              <div class="swiper-lazy-preloader"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="serviceItem__intro-sliders-bullets"></div>

      <div class="serviceItem__intro-sliders-bottom">
        <swiper
          :breakpoints="swiperOptionsBottom.breakpoints"
          @swiper="setThumbsSwiper"
          :loop="service.images.length > 4 ? true : false"
          :spaceBetween="79"
          :slidesPerView="`auto`"
          :modules="modules"
          class="serviceItem__intro-sliders-bottom-slider"
          :lazy="true"
          :lazyPreloadPrevNext="1"
          preloadImages="false"
        >
          <swiper-slide
            v-for="(item, index) in service.images"
            :key="item.id"
            class="serviceItem__intro-sliders-bottom-slider-slide"
          >
            <div class="serviceItem__intro-sliders-bottom-slider-slide-img">
              <img loading="lazy" :src="item.image" alt="фото услуги" />
              <div class="swiper-lazy-preloader"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="serviceItem__intro-info">
      <div class="serviceItem__intro-info-content">
        <span class="serviceItem__intro-info-content-part"
          >{{ service.for_what }}
        </span>
        <h3 class="serviceItem__intro-info-content-title">
          {{ service.title }}
        </h3>
        <p class="serviceItem__intro-info-content-caption">
          {{ service.short_desc }}
        </p>
      </div>
      <div class="serviceItem__intro-info-price">
        <span class="serviceItem__intro-info-price-cost">
          <span class="serviceItem__intro-info-price-cost-start"> от </span>
          {{ service.price }} Р
        </span>
        <button @click="openModal" class="serviceItem__intro-info-price-btn">
          <span>Записаться на процедуру</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              d="M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <BookingModal @closeModalRewiev="closeModalRewiev" v-if="isModalOpen" />
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Autoplay, Pagination } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";

import BookingModal from "../UI/Modals/BookingModal.vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/components/ServiceItem/ServiceItem.scss";
const { isMobile } = useIsMobile();

const modules = ref([FreeMode, Thumbs, Autoplay, Pagination]);

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add("no-scroll");
};

const closeModalRewiev = () => {
  isModalOpen.value = false;
  document.body.classList.remove("no-scroll");
};

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const props = defineProps(["service"]);

const pagination = ref({
  clickable: true,
  el: ".serviceItem__intro-sliders-bullets",
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "</span>";
  },
});

let swiperOptionsBottom = ref({
  breakpoints: {
    320: {
      spaceBetween: 16,
    },
    360: {
      spaceBetween: 16,
    },

    400: {
      spaceBetween: 40,
    },

    580: {
      spaceBetween: 60,
    },
  },
});
</script>
