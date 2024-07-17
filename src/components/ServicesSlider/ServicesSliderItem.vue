<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__serviceslider-item"
  >
    <div class="main__serviceslider-item-content">
      <h3 class="main__serviceslider-item-content-title">наши услуги</h3>
      <div class="main__serviceslider-item-content-text">
        <p>
          В Эстетик мы предоставляем широкий спектр услуг, чтобы помочь вам
          достичь желаемой красоты и благополучия.
        </p>
        <p>
          Наши профессиональные специалисты обладают богатым опытом и используют
          передовые технологии, чтобы удовлетворить ваши потребности
        </p>
      </div>

      <div class="main__serviceslider-item-slider-btns">
        <button ref="prev" class="main__serviceslider-item-slider-btns-prev">
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
        <button ref="next" class="main__serviceslider-item-slider-btns-next">
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

    <swiper
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween="24"
      :loop="true"
      :speed="1000"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
      class="main__serviceslider-item-slider"
    >
      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-1.png"
          alt="фото раздела косметологии"
        />
        <div class="swiper-lazy-preloader"></div>
        <h3 class="main__serviceslider-item-slider-slide-title">
          Косметология
        </h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-1' }"
        >
          узнать подробнее
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
      </swiper-slide>

      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-2.png"
          alt="фото раздела инъекционная косметология"
        />
        <div class="swiper-lazy-preloader"></div>

        <h3 class="main__serviceslider-item-slider-slide-title">
          Инъекционная косметология
        </h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-2' }"
        >
          узнать подробнее
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
      </swiper-slide>

      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-3.png"
          alt="фото раздела лазерные технологии"
        />
        <div class="swiper-lazy-preloader"></div>

        <h3 class="main__serviceslider-item-slider-slide-title">
          Лазерные технологии
        </h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-3' }"
        >
          узнать подробнее
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
      </swiper-slide>

      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-4.png"
          alt="фото раздела трихология"
        />
        <div class="swiper-lazy-preloader"></div>

        <h3 class="main__serviceslider-item-slider-slide-title">Трихология</h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-4' }"
        >
          узнать подробнее
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
      </swiper-slide>

      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-5.png"
          alt="фото раздела трихология ногтевой сервис"
        />
        <div class="swiper-lazy-preloader"></div>

        <h3 class="main__serviceslider-item-slider-slide-title">
          Ногтевой сервис
        </h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-5' }"
        >
          узнать подробнее
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
      </swiper-slide>

      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-6.png"
          alt="фото раздела трихология массаж"
        />
        <div class="swiper-lazy-preloader"></div>

        <h3 class="main__serviceslider-item-slider-slide-title">Массаж</h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-6' }"
        >
          узнать подробнее
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
      </swiper-slide>

      <swiper-slide class="main__serviceslider-item-slider-slide">
        <div
          class="main__serviceslider-item-slider-slide-overlaygradient"
        ></div>

        <img
          loading="lazy"
          class="main__serviceslider-item-slider-slide-img"
          src="@/assets/images/servicesCategorySlider/servicesCategorySlider-7.png"
          alt="фото раздела уходовые процедуры"
        />
        <div class="swiper-lazy-preloader"></div>

        <h3 class="main__serviceslider-item-slider-slide-title">
          Уходовые процедуры
        </h3>
        <router-link
          class="main__serviceslider-item-slider-slide-btn"
          :to="{ path: '/services', hash: '#service-7' }"
        >
          узнать подробнее
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
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/ServicesSlider/ServicesSlider.scss";
const { isMobile } = useIsMobile();

const prev = ref(null);
const next = ref(null);
const modules = ref([Navigation, Autoplay], prev, next);

let swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    800: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    930: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 2.1,
      slidesPerGroup: 1,
    },
  },
});
</script>
