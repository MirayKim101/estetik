<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__specialists-exslider"
    v-if="list && list.length"
  >
    <div class="main__specialists-exslider-title">
      <h3>{{ title }}</h3>
      <p v-if="showDescription">
        Наши профессионалы обладают глубокими знаниями и опытом в медицинской
        косметологии, а также привержены вашему благополучию.
      </p>
    </div>

    <div class="main__specialists-exslider-inner">
      <swiper
        :breakpoints="swiperOptions.breakpoints"
        :loop="list && list.length >= 4 ? true : false"
        :modules="modules"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
        :speed="1000"
        class="main__specialists-exslider-slider"
        :lazy="true"
        :lazyPreloadPrevNext="1"
        preloadImages="false"
      >
        <swiper-slide
          v-for="item in list"
          :key="item.id"
          class="main__specialists-exslider-slider-slide"
        >
          <router-link
            class="main__specialists-exslider-slider-slide-wrapper"
            :to="`/specialists/${
              item.specialist ? item.specialist.id : item.id
            }`"
          >
            <div class="main__specialists-exslider-slider-slide-wrapper-img">
              <img
                loading="lazy"
                :src="item.photo || item.specialist.photo"
                alt="фото врача"
              />
              <div class="swiper-lazy-preloader"></div>
            </div>

            <div
              class="main__specialists-exslider-slider-slide-wrapper-content"
            >
              <h4
                class="main__specialists-exslider-slider-slide-wrapper-content-title"
              >
                {{ item.full_name || item.specialist.full_name }}
              </h4>
              <span
                class="main__specialists-exslider-slider-slide-wrapper-content-position"
              >
                {{ item.position || item.specialist.position }}
              </span>
              <span
                class="main__specialists-exslider-slider-slide-wrapper-content-exp"
              >
                {{
                  item.experience_in_years ||
                  item.specialist.experience_in_years
                }}+ опыта
              </span>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/Specialists/Specialists.scss";
const { isMobile } = useIsMobile();

const props = defineProps({
  list: {
    type: Array,
  },
  showDescription: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
  },
});

const modules = ref([Autoplay]);
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
</script>
