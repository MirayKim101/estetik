<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__product-recommended"
    v-if="productData && productData.length"
  >
    <div class="main__product-recommended-title">
      <h4>{{ title }}</h4>
      <p>
        На нашем сайте вы можете посмотреть продукцию и приобрести ее с
        доставкой в клинику.
      </p>
    </div>

    <div class="main__product-recommended-wrapper">
      <swiper
        :navigation="{
          prevEl: '.main__product-recommended-btns-prev',
          nextEl: '.main__product-recommended-btns-next',
        }"
        :speed="1000"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
        :modules="modules"
        :spaceBetween="24"
        :slidesPerView="`auto`"
        :loop="productData && productData.length > 4 ? true : false"
        class="main__product-recommended-slider"
      >
        <swiper-slide
          v-for="product in productData"
          :key="product.id"
          class="main__product-recommended-slider-slide"
        >
          <ProductsItem :product="product" />
        </swiper-slide>
      </swiper>
      <div class="main__product-recommended-btns">
        <button class="main__product-recommended-btns-prev">
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
        <button class="main__product-recommended-btns-next">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/Product/Product.scss";
import ProductsItem from "../Products/ProductsItem.vue";
const { isMobile } = useIsMobile();

const modules = ref([Navigation, Autoplay]);

const props = defineProps({
  productData: {
    type: Array,
  },
  title: {
    type: String,
  },
});
</script>
