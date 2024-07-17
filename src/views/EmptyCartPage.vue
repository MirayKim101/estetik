<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main">
    <Empty />
    <RecommendedProduct title="вам понравится" :productData="productsList" />
    <ExDiscountSlider :discountsContent="discountsContent" />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useProducts } from "@/store/Products.js";
import { useActionList } from "@/store/Actions.js";
import Empty from "@/components/Cart/EmptyCart/Empty.vue";
import RecommendedProduct from "@/components/Product/RecommendedProduct.vue";
import ExDiscountSlider from "@/components/Discount/ExDiscountSlider.vue";
import Feedback from "@/components/Feedback/Feedback.vue";

const isLoaded = ref(false);

const productsStore = useProducts();
const productsList = computed(() => productsStore.products);

const action = useActionList();
const discountsContent = computed(() => action.actionList);

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
