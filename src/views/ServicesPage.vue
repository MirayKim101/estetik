<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="services">
    <Content title="Услуги" height="260%" :img="img" />
    <ServicesParameters />
    <ServicesCosmetology
      v-for="(item, i) in categories"
      :key="i"
      :item="item"
    />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useServices } from "@/store/Services";
import ServicesCosmetology from "@/components/Services/ServicesList/ServicesCosmetology.vue";
import Feedback from "@/components/Feedback/Feedback.vue";
import ServicesParameters from "@/components/Services/ServicesParameters.vue";
import Content from "@/components/UI/Content.vue";
import img from "@/assets/images/UI/content-services.jpg";

const isLoaded = ref(false);
const servicesStore = useServices();
const categories = computed(() => servicesStore.categories);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  try {
    await servicesStore.getCategories();
  } finally {
    isLoaded.value = true;
    document.body.classList.remove("no-scroll");
  }
});

onUnmounted(() => {
  if (isLoaded.value === false) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
