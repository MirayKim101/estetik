<template>
  <div v-if="isShown">
    <div
      :data-aos="!isMobile ? 'fade-down' : ''"
      :id="`service-${item.id}`"
      class="services__cosmetology"
      v-if="item && checkForSelectedCategory(item.id)"
    >
      <h2 class="services__cosmetology-title">{{ item.title }}</h2>
      <div class="services__cosmetology__wrapper">
        <ServicesItem
          :item="service"
          v-for="(service, index) in item.services"
          :key="index"
        />
      </div>
    </div>
  </div>

  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    :id="`service-${item.id}`"
    v-else-if="item && checkForSelectedCategory(item.id)"
    class="services__wrapper"
  >
    <h2 class="services__wrapper-title">{{ item.title }}</h2>
    <swiper
      v-if="item.services && item.services.length"
      :key="item.id"
      :loop="item.services.length > 4"
      :breakpoints="swiperOptions.breakpoints"
      class="services__wrapper-slider"
    >
      <swiper-slide
        v-for="service in item.services"
        :key="service.id"
        class="services__wrapper-slider-slide"
      >
        <ServicesItem :item="service" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import ServicesItem from "../ServicesItem.vue";
import { useServices } from "@/store/Services";
import { useIsMobile } from "@/useIsMobile.js";
import "swiper/css";
import "@/components/Services/Services.scss";
const { isMobile } = useIsMobile();

const props = defineProps(["item"]);
const servicesStore = useServices();
const services = ref([]);
const isLoading = ref(true);

const checkForSelectedCategory = (id) => {
  const cat = servicesStore.selectedCategory;
  return cat === null || cat === id;
};

const isShown = ref(false);

const mediaQuery = window.matchMedia("(min-width: 710px)");

const onResize = () => {
  isShown.value = mediaQuery.matches;
};

watchEffect(() => {
  onResize();
  mediaQuery.addEventListener("change", onResize);
});

onBeforeUnmount(() => {
  mediaQuery.removeEventListener("change", onResize);
});

const swiperOptions = ref({
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    680: {
      slidesPerView: 2,
    },
  },
});

onMounted(async () => {
  try {
    await servicesStore.getServices(props.item.id);
    isLoading.value = false;
    services.value = servicesStore.services;
  } catch (error) {
    console.error("Ошибка при загрузке услуг: ", error);
  }
});
</script>
