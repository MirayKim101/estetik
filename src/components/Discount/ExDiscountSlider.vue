<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="main__discount-exslider">
    <div class="main__discount-exslider-info">
      <h2 class="main__discount-exslider-info-title">Акции</h2>

      <router-link to="/discounts">
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
      </router-link>
    </div>

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
      :spaceBetween="24"
      class="main__discount-exslider-slider"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide
        v-for="item in discountsContent"
        :key="item.id"
        class="main__discount-exslider-slider-slide"
      >
        <div class="main__discount-exslider-slider-slide-content">
          <div class="main__discount-exslider-slider-slide-content-img">
            <img
              loading="lazy"
              :src="item?.action_images[0]?.image"
              alt="картинка в акции"
            />
            <div class="swiper-lazy-preloader"></div>
          </div>

          <div class="main__discount-exslider-slider-slide-content-info">
            <div
              class="main__discount-exslider-slider-slide-content-info-wrapper"
            >
              <div
                class="main__discount-exslider-slider-slide-content-info-text"
              >
                <h3
                  v-html="styledTitle(item.title)"
                  class="main__discount-exslider-slider-slide-content-info-text-title"
                ></h3>
                <p
                  class="main__discount-exslider-slider-slide-content-info-text-caption"
                >
                  {{ item.short_desc }}
                </p>
                <span
                  class="main__discount-exslider-slider-slide-content-info-text-offer"
                >
                  {{ item.special_offer ? "Акция" : "Спецпредложение" }}
                </span>
              </div>

              <div
                v-html="item.desc"
                class="main__discount-exslider-slider-slide-content-info-rules"
              ></div>
            </div>

            <span
              class="main__discount-exslider-slider-slide-content-info-date"
            >
              до {{ new Date(item.expires_in).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/Discount/Discount.scss";

const modules = ref([Autoplay]);
const { isMobile } = useIsMobile();

let swiperOptions = ref({
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },

    1330: {
      slidesPerView: 1.1,
      spaceBetween: 24,
    },
  },
});

const props = defineProps({
  discountsContent: {
    typeof: Object,
  },
});

const styledTitle = (title) => {
  const regex = /(\d+%)/g;
  return title.replace(
    regex,
    '<span class="main__discount-exslider-slider-slide-content-info-text-title-digit">$1</span>'
  );
};
</script>
