<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="serviceItem">
    <ServiceItemIntro :service="service" />
    <ServiceItemMain :service="service" />
    <ExSpecSlider
      title="кто проводит процедуру"
      :showDescription="false"
      :list="service ? service.who_performs_procedures : []"
    />
    <ServiceItemVisit />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useServicePage } from "@/store/ServicePage";
import { useRoute, useRouter } from "vue-router";
import ServiceItemIntro from "@/components/ServiceItem/ServiceItemIntro.vue";
import ServiceItemMain from "@/components/ServiceItem/ServiceItemMain.vue";
import ServiceItemVisit from "@/components/ServiceItem/ServiceItemVisit.vue";
import ExSpecSlider from "@/components/Specialists/ExSpecSlider.vue";

const isLoaded = ref(false);
const route = useRoute();
const router = useRouter();
const serviceStore = useServicePage();
const service = computed(() => serviceStore.service);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  isLoaded.value = false;

  try {
    const response = await serviceStore.getService(route.params.id);
    if (!response.success) {
      router.push(response.status === 404 ? "/404" : "/error");
    }
  } catch (error) {
    console.error("Ошибка при получении услуги:", error);
    router.push("/error");
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
