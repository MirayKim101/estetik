<template>
  <div class="stories__modal">
    <button @click="modalProductClose" class="stories__modal-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.7998 9.60039L11.9998 14.4004L7.19981 9.60039"
          stroke="#848484"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Скрыть
    </button>

    <swiper
      v-if="productsList && productsList.length"
      :spaceBetween="24"
      :slidesPerView="`auto`"
      :loop="productsList && productsList.length > 6 ? true : false"
      class="stories__modal-slider"
    >
      <swiper-slide
        v-for="product in productsList"
        :key="product.id"
        class="stories__modal-slider-slide"
      >
        <ProductsItem :product="product.item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@/components/Stories/Stories.scss";
import ProductsItem from "@/components/Products/ProductsItem.vue";

const props = defineProps({
  productsList: {
    type: Array,
  },
});

const emit = defineEmits(["modalProductClose"]);
const modalProductClose = () => {
  emit("modalProductClose");
};
</script>
