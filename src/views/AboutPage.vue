<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>

  <div class="main__about">
    <AboutImage :aboutBanner="aboutBanner" />
    <AboutUs />
    <AboutSlider :images="images" :categories="categories" />
    <AboutLicenses :licensesList="licensesList" />
    <ClientConnect />
    <ExSpecSlider :specialistList="specialistList" />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useAboutUs } from "@/store/AboutUs.js";
import { usePhotogalleries } from "@/store/Photogalleries.js";
import { useLicenes } from "@/store/Licenses.js";
import { useSpecialists } from "@/store/Specialists.js";
import AboutImage from "@/components/About/AboutImage.vue";
import AboutUs from "@/components/About/AboutUs.vue";
import AboutSlider from "@/components/About/AboutSlider.vue";
import ClientConnect from "@/components/ClientConnect/ClientConnect.vue";
import Feedback from "@/components/Feedback/Feedback.vue";
import AboutLicenses from "@/components/About/AboutLicenses.vue";
import ExSpecSlider from "@/components/Specialists/ExSpecSlider.vue";

const isLoaded = ref(false);

const about = useAboutUs();
const aboutBanner = computed(() => about.about);

const photogalleries = usePhotogalleries();
const categories = computed(() => photogalleries.categories);
const images = computed(() => photogalleries.images);

const licenses = useLicenes();
const licensesList = computed(() => licenses.licensesList);

let specialist = useSpecialists();
let specialistList = computed(() => specialist.specialists);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  isLoaded.value = false;
  try {
    await Promise.all([
      about.getAbout(),
      photogalleries.getPhotoCategories(),
      licenses.getLicenses(),
      specialist.getSpecialists(),
    ]);
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
