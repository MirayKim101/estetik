<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    v-if="reviewsSlider && reviewsSlider.length"
    class="reviews"
  >
    <h2 class="reviews-title">ваша обратная связь делает нас лучше</h2>
    <swiper
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :speed="1000"
      :breakpoints="swiperOptions.breakpoints"
      :loop="reviewsSlider && reviewsSlider.length >= 4 ? true : false"
      :centeredSlides="
        reviewsSlider && reviewsSlider.length <= 2 ? true : false
      "
      class="reviews-slider"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide
        v-for="item in reviewsSlider"
        :key="item.id"
        class="reviews-slider-slide"
      >
        <div class="reviews-slider-slide-content">
          <div class="reviews-slider-slide-content-img">
            <img loading="lazy" :src="item.image" alt="фото" />
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="reviews-slider-slide-content-text">
            <h4>{{ item.full_name }}</h4>

            <p
              :class="[
                'reviews-slider-slide-content-text-p',
                item.textOverflow && !item.showFullText
                  ? 'reviews-slider-slide-content-text-p-clamp'
                  : '',
              ]"
            >
              {{ item.text }}
            </p>

            <div class="reviews-slider-slide-content-text-wrapper">
              <span class="reviews-slider-slide-content-text-wrapper-date">
                {{ item.created_at }}
              </span>
              <span
                v-if="item.textOverflow"
                @click="item.showFullText = !item.showFullText"
                class="reviews-slider-slide-content-text-wrapper-more"
              >
                {{ item.showFullText ? "свернуть" : "читать далее" }}
              </span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="reviews-btns">
      <div class="reviews-btns-slider">
        <button class="reviews-btns-slider-prev" ref="prev">
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
        <button class="reviews-btns-slider-next" ref="next">
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
      <button @click="openModal" class="reviews-btns-share">
        поделиться своим отзывом
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
  <ReviewsModal @closeModalRewiev="closeModalRewiev" v-if="isModalOpen" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/Reviews/Reviews.scss";
import ReviewsModal from "@/components/UI/Modals/ReviewsModal.vue";
const { isMobile } = useIsMobile();

const props = defineProps({
  reviewsSlider: {
    type: Array,
  },
});

const prev = ref(null);
const next = ref(null);
const modules = ref([Navigation, Autoplay], prev, next);
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add("no-scroll");
};

const closeModalRewiev = () => {
  isModalOpen.value = false;
  document.body.classList.remove("no-scroll");
};

let swiperOptions = ref({
  breakpoints: {
    360: {
      spaceBetween: 16,
      slidesPerView: 1,
    },
    1330: {
      spaceBetween: 24,
      slidesPerView: 1.05,
    },
  },
});
</script>
