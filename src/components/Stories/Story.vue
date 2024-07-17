<template>
  <swiper
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :pagination="pagination"
    :modules="modules"
    v-if="stories && stories.length"
    class="stories__story"
    :allowTouchMove="false"
    :allowSlideNext="!isModalProduct"
    :allowSlidePrev="!isModalProduct"
    :lazy="true"
    :lazyPreloadPrevNext="1"
    preloadImages="false"
  >
    <swiper-slide
      v-for="story in stories"
      :key="story.id"
      class="stories__story-slide"
    >
      <div class="stories__story-slide-content">
        <div class="stories__story-slide-content-img">
          <img loading="lazy" :src="story.video" :alt="story.title" />
          <div class="swiper-lazy-preloader"></div>
        </div>

        <button
          @click="prevSlide"
          class="stories__story-slide-content-prev"
        ></button>
        <button
          @click="nextSlide"
          class="stories__story-slide-content-next"
        ></button>
        <button
          v-if="story.products && story.products.length"
          @click="openProductModal(story.products)"
          class="stories__story-slide-content-products"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.7998 9.60039L11.9998 14.4004L7.19981 9.60039"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          использвуемые продукты
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/components/Stories/Stories.scss";

const props = defineProps({
  stories: {
    type: Array,
  },
  paginationClass: {
    type: String,
  },
  isModalProduct: {
    type: Boolean,
  },
});

const modules = ref([Pagination, Autoplay]);
const swiperInstance = ref(null);
const isAtEnd = ref(false);
const isAtStart = ref(false);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const prevSlide = () => {
  if (swiperInstance.value) {
    if (swiperInstance.value.isBeginning) {
      if (isAtStart.value) {
        emit("innerSlideStartReached");
      } else {
        isAtStart.value = true;
      }
    } else {
      isAtStart.value = false;
      swiperInstance.value.slidePrev();
    }
  }
};

const nextSlide = () => {
  if (swiperInstance.value) {
    if (swiperInstance.value.isEnd) {
      if (isAtEnd.value) {
        emit("innerSlideEndReached");
      } else {
        isAtEnd.value = true;
      }
    } else {
      isAtEnd.value = false;
      swiperInstance.value.slideNext();
    }
  }
};

const onSlideChange = () => {
  if (swiperInstance.value.isEnd) {
    isAtEnd.value = true;
  } else {
    isAtEnd.value = false;
  }

  if (swiperInstance.value.isBeginning) {
    isAtStart.value = true;
  } else {
    isAtStart.value = false;
  }
};

const pagination = computed(() => ({
  el: `.${props.paginationClass}`,
  clickable: false,
  renderBullet: function (index, className) {
    return `<span class="${className}"></span>`;
  },
}));

const emit = defineEmits([
  "openProductModal",
  "innerSlideEndReached",
  "innerSlideStartReached",
]);

const openProductModal = (products) => {
  emit("openProductModal", products);
};
</script>
