<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <SpecialistProfile :profile="profile" />
  <SpecialistCertificates :profile="profile" />
  <SpecialistPerformed
    v-if="specialist.specialistId && specialist.specialistId.procedures.length"
    :specialiList="specialiList"
  />
  <ClientConnect />
  <DiplomSpecItem :profile="profile" />
  <ServiceItemVisit />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSpecialists } from "@/store/Specialists";
import SpecialistCertificates from "@/components/SpecialistItem/SpecialistCertificates.vue";
import SpecialistProfile from "@/components/SpecialistItem/SpecialistProfile.vue";
import ClientConnect from "@/components/ClientConnect/ClientConnect.vue";
import ServiceItemVisit from "@/components/ServiceItem/ServiceItemVisit.vue";
import DiplomSpecItem from "@/components/SpecialistItem/DiplomSpecItem.vue";
import SpecialistPerformed from "../components/SpecialistItem/SpecialistPerformed.vue";

const isLoaded = ref(false);
const route = useRoute();
const router = useRouter();
let specialist = useSpecialists();
let id = computed(() => (route.params ? route.params.id : 1));
let profile = computed(() => (id ? specialist.specialistId : ""));
const specialiList = computed(() =>
  specialist.specialistId ? specialist.specialistId.procedures : null
);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  isLoaded.value = false;
  try {
    const response = await specialist.getSpecialistById(id.value);
    if (!response.success) {
      router.push(response.status === 404 ? "/404" : "/error");
    }
  } catch (error) {
    console.error("Ошибка при получении специалиста:", error);
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
