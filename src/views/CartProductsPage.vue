<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main">
    <CartProductsInfo />
    <ExDiscountSlider :discountsContent="discountsContent" />
    <RecommendedProduct title="вам понравится" :productData="productsList" />
    <Feedback />

  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useActionList } from "@/store/Actions.js";
import { useProducts } from "@/store/Products.js";
import CartProductsInfo from "../components/Cart/CartProducts/CartProductsInfo.vue";
import RecommendedProduct from "@/components/Product/RecommendedProduct.vue";
import ExDiscountSlider from "@/components/Discount/ExDiscountSlider.vue";
import Feedback from "@/components/Feedback/Feedback.vue";

const isLoaded = ref(false);

// Акции
const action = useActionList();
const discountsContent = computed(() => action.actionList);

// Продукты

const productsStore = useProducts();
const productsList = computed(() => productsStore.products);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  try {
    await Promise.all([
      productsStore.getProducts({ limit: 10 }),
      action.getActions(),
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
