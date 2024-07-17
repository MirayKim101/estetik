<template>
  <div class="stories__inner">
    <button @click="modalClose" class="stories__inner-close">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 1L1 15M15 15L1 1"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <swiper
      v-if="storiesList && storiesList.length"
      :allowTouchMove="false"
      :initialSlide="currentIndex"
      :space-between="100"
      :effect="'coverflow'"
      :modules="modules"
      :centeredSlides="true"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 1,
      }"
      :allowSlideNext="!isModalProduct"
      :allowSlidePrev="!isModalProduct"
      :navigation="{
        prevEl: '.stories__inner-slider-prev',
        nextEl: '.stories__inner-slider-next',
      }"
      :slides-per-view="'auto'"
      class="stories__inner-slider"
      @swiper="onOuterSwiper"
    >
      <swiper-slide
        v-for="innerCategory in storiesList"
        :key="innerCategory.id"
        class="stories__inner-slider-slide"
      >
        <div class="stories__inner-slider-info">
          <div
            :class="`stories__inner-slider-info-bullets bullets-${innerCategory.id}`"
          ></div>

          <div class="stories__inner-slider-info-avatar">
            <div class="stories__inner-slider-info-avatar-img">
              <img :src="innerCategory.image" alt="" />
            </div>
            <div class="stories__inner-slider-info-avatar-text">
              <span class="stories__inner-slider-info-avatar-text-title">
                {{ innerCategory.title }}
              </span>
              <span class="stories__inner-slider-info-avatar-text-subtitle">
              </span>
            </div>
          </div>
        </div>
        <button class="stories__inner-slider-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M30 12L18 24L30 36"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="stories__inner-slider-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M18 12L30 24L18 36"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <Story
          @innerSlideEndReached="handleInnerSlideEndReached"
          @innerSlideStartReached="handleInnerSlideStartReached"
          @openProductModal="handleProductModal"
          :isModalProduct="isModalProduct"
          :stories="innerCategory.stories"
          :paginationClass="`bullets-${innerCategory.id}`"
        />
      </swiper-slide>
    </swiper>
    <StoriesProductModal
      :productsList="productsList"
      @modalProductClose="modalProductClose"
      v-if="isModalProduct"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "@/components/Stories/Stories.scss";
import Story from "./Story.vue";
import StoriesProductModal from "./StoriesProductModal.vue";

const modules = ref([EffectCoverflow, Navigation]);
const isModalProduct = ref(false);
const outerSwiper = ref(null);

const props = defineProps({
  storiesList: {
    type: Array,
  },
  currentIndex: {
    type: Number,
  },
});

const onOuterSwiper = (swiper) => {
  outerSwiper.value = swiper;
};

const handleInnerSlideEndReached = () => {
  if (outerSwiper.value) {
    outerSwiper.value.slideNext();
  }
};

const handleInnerSlideStartReached = () => {
  if (outerSwiper.value) {
    outerSwiper.value.slidePrev();
  }
};

const productsList = ref(null);

const handleProductModal = (products) => {
  productsList.value = products;
  isModalProduct.value = true;
};

const modalProductClose = () => {
  isModalProduct.value = false;
};

const emit = defineEmits(["modalClose"]);
const modalClose = () => {
  emit("modalClose");
};
</script>
