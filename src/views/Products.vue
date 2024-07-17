<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main">
    <Content title="Наши продукты" :img="img" />
    <ProductsMain />
    <ExDiscountSlider :discountsContent="discountsContent" />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useActionList } from "@/store/Actions.js";
import Content from "@/components/UI/Content.vue";
import ProductsMain from "../components/Products/ProductsMain.vue";
import ExDiscountSlider from "@/components/Discount/ExDiscountSlider.vue";
import Feedback from "@/components/Feedback/Feedback.vue";
import img from "@/assets/images/UI/content-products.jpg";

const isLoaded = ref(false);
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
