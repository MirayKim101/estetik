<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__product-profile"
    v-if="productData"
  >
    <div class="main__product-profile-wrapper">
      <div class="main__product-profile-wrapper-images">
        <div class="main__product-profile-wrapper-images-top">
          <swiper
            :pagination="pagination"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="main__product-profile-wrapper-images-top-slider"
            :lazy="true"
            :lazyPreloadPrevNext="1"
            preloadImages="false"
          >
            <swiper-slide
              v-for="product in productData.product_images"
              :key="product.id"
              class="main__product-profile-wrapper-images-top-slider-slide"
            >
              <img
                loading="lazy"
                :src="product.image"
                alt="картинка продукта"
              />
              <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="main__product-profile-wrapper-images-bullets"></div>

        <div class="main__product-profile-wrapper-images-bottom">
          <swiper
            :freeMode="true"
            :breakpoints="swiperOptions.breakpoints"
            :slidesPerView="`auto`"
            :watchSlidesProgress="true"
            :modules="modules"
            @swiper="setThumbsSwiper"
            class="main__product-profile-wrapper-images-bottom-slider"
            :lazy="true"
            :lazyPreloadPrevNext="1"
            preloadImages="false"
          >
            <swiper-slide
              v-for="product in productData.product_images"
              :key="product.id"
              class="main__product-profile-wrapper-images-bottom-slider-slide"
            >
              <img
                loading="lazy"
                :src="product.image"
                alt="картинка продукта"
              />
              <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="main__product-profile-wrapper-info">
        <div class="main__product-profile-wrapper-info-text">
          <span class="main__product-profile-wrapper-info-text-subtitle">
            {{ productData.category }}
          </span>
          <h3 class="main__product-profile-wrapper-info-text-title">
            {{ productData.title }}
          </h3>
          <p class="main__product-profile-wrapper-info-text-caption">
            {{ productData.short_desc }}
          </p>
        </div>
        <div class="main__product-profile-wrapper-info-attention">
          <p>
            На нашем сайте вы можете посмотреть продукцию и приобрести ее с
            доставкой в клинику.
          </p>
        </div>

        <div class="main__product-profile-wrapper-info-price">
          <span class="main__product-profile-wrapper-info-price-current">
            {{ productData.price.toLocaleString() }} р
          </span>
          <span
            v-if="productData.discount > 1"
            class="main__product-profile-wrapper-info-price-old"
          >
            {{ productData.discount.toLocaleString() }} р
          </span>
        </div>
        <div class="main__product-profile-wrapper-info-btn">
          <button
            @click="
              productStore.addProductToCart({
                product_id: productData.id,
                quantity: amount,
                ...productData,
              });
              isAdded = !isAdded;
              amount = 1;
            "
            class="main__product-profile-wrapper-info-btn-cart"
          >
            Добавить в корзину
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5335 8.79961V5.29961C16.5335 2.98001 14.6531 1.09961 12.3335 1.09961C10.0139 1.09961 8.13354 2.98001 8.13354 5.29961V8.79961M3.8487 24.8996H20.8184C22.3179 24.8996 23.5335 23.7066 23.5335 22.2349L21.7942 8.09957C21.7942 6.62791 20.5785 5.43489 19.079 5.43489H5.2487C3.74916 5.43489 2.53354 6.62791 2.53354 8.09957L1.13354 22.2349C1.13354 23.7066 2.34916 24.8996 3.8487 24.8996Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="main__product-profile-wrapper-info-btn-counter">
            <button
              @click="changeAmount('-')"
              class="main__product-profile-wrapper-info-btn-counter-minus"
            >
              <svg
                :class="{ disable: amount === 1 }"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.2 12L4.79999 12"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <span class="main__product-profile-wrapper-info-btn-counter-count">
              {{ amount }}
            </span>
            <button
              @click="changeAmount('+')"
              class="main__product-profile-wrapper-info-btn-counter-plus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.80078L12 19.2008M19.2 12.0008L4.79999 12.0008"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Message title="ТОВАР ДОБАВЛЕН В КОРЗИНУ" :isVisible="isAdded" />
</template>

<script setup>
import { ref } from "vue";
import Message from "@/components/UI/Message.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Autoplay, Pagination } from "swiper/modules";
import { useProduct } from "@/store/Product";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/components/Product/Product.scss";
const { isMobile } = useIsMobile();

const modules = ref([FreeMode, Thumbs, Autoplay, Pagination]);

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const pagination = ref({
  clickable: true,
  el: ".main__product-profile-wrapper-images-bullets",
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "</span>";
  },
});

const props = defineProps({
  productData: {
    type: Object,
  },
});

const productStore = useProduct();
const isAdded = ref(false);
const amount = ref(1);

const changeAmount = (target) => {
  if (target === "+" && amount.value >= 1) {
    amount.value++;
  } else if (target === "-" && amount.value > 1) {
    amount.value--;
  }
};
let swiperOptions = ref({
  breakpoints: {
    360: {
      spaceBetween: 16,
    },
    600: {
      spaceBetween: 79,
    },
  },
});
</script>
