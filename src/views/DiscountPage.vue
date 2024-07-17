<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main__discount">
    <h1 data-aos="fade-down" class="main__discount-title">акции и скидки</h1>
    <DiscountSlider :discountsContent="discountsContent" />
    <DiscountCards :discountsContent="discountsContent" />
    <Promed />
    <Beautiful :beat="beatObj" />
    <ServiceItemVisit />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useActionList } from "@/store/Actions.js";
import DiscountSlider from "@/components/Discount/DiscountSlider.vue";
import DiscountCards from "@/components/Discount/DiscountCards.vue";
import Beautiful from "@/components/Beautiful/Beautiful.vue";
import Promed from "@/components/UI/ProMed.vue";
import ServiceItemVisit from "@/components/ServiceItem/ServiceItemVisit.vue";
import img1 from "@assets/images/beat/discount-beat-1.jpeg";
import img2 from "@assets/images/beat/discount-beat-2.jpg";

const isLoaded = ref(false);

const beatObj = ref({
  desc: "«Наши акции – это уникальные предложения, объединяющие лучшие методы и средства для вашего совершенства. Мы стремимся сделать красоту доступной для всех, даря вам неповторимые моменты радости и гармонии».",
  reverse: false,
  img1: img1,
  img2: img2,
});
const action = useActionList();
const discountsContent = computed(() => action.actionList);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  try {
    await action.getActions();
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
