<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="main__discount-slider">
    <swiper
      :loop="discountsContent && discountsContent.length >= 4 ? true : false"
      :centeredSlides="
        discountsContent && discountsContent.length <= 2 ? true : false
      "
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
      :speed="1000"
      :breakpoints="swiperOptions.breakpoints"
      :modules="modules"
      class="main__discount-slider"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide
        v-for="item in discountsContent"
        :key="item.id"
        class="main__discount-slider-slide"
        :class="{ noImage: !item.action_images.length }"
      >
        <div class="main__discount-slider-slide-content">
          <div
            v-if="item.action_images.length"
            class="main__discount-slider-slide-content-img"
          >
            <img
              :src="item?.action_images[0]?.image"
              loading="lazy"
              alt="картинка в акции"
            />
            <div class="swiper-lazy-preloader"></div>
          </div>

          <div class="main__discount-slider-slide-content-wrapper">
            <div class="main__discount-slider-slide-content-wrapper-text">
              <h2
                class="main__discount-slider-slide-content-wrapper-text-title"
                v-html="styledTitle(item.title)"
              ></h2>

              <p
                class="main__discount-slider-slide-content-wrapper-text-subtitle"
              >
                {{ item.short_desc }}
              </p>

              <span
                class="main__discount-slider-slide-content-wrapper-text-offer"
              >
                {{ item.special_offer ? "Акция" : "Спецпредложение" }}
              </span>

              <div
                class="main__discount-slider-slide-content-wrapper-text-rules"
                v-html="item.desc"
              ></div>
            </div>
            <p class="main__discount-slider-slide-content-wrapper-date">
              до {{ new Date(item.expires_in).toLocaleDateString() }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIsMobile } from "@/useIsMobile.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "@/components/Discount/Discount.scss";
const { isMobile } = useIsMobile();

const modules = ref([Autoplay]);

let swiperOptions = ref({
  breakpoints: {
    360: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    1330: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
  },
});

const props = defineProps({
  discountsContent: {
    type: Object,
  },
});

const styledTitle = (title) => {
  const regex = /(\d+%)/g;
  return title.replace(
    regex,
    '<span class="main__discount-slider-slide-content-wrapper-text-title-digit">$1</span>'
  );
};
</script>
