<template>
  <transition name="preloader">
    <Preloader v-if="isLoaded" />
  </transition>
  <div class="main">
    <ProductIntro :productData="productData" />
    <ProductDescription :productData="productData" />
    <ProductParameters :productData="productData" />
    <ProductUsage :productData="productData" />
    <RecommendedProduct
      title="вам понравится"
      :productData="productData ? productData.recommended_products : []"
    />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProduct } from "@/store/Product.js";
import ProductIntro from "@/components/Product/ProductIntro.vue";
import ProductDescription from "@/components/Product/ProductDescription.vue";
import ProductParameters from "@/components/Product/ProductParameters.vue";
import ProductUsage from "@/components/Product/ProductUsage.vue";
import RecommendedProduct from "@/components/Product/RecommendedProduct.vue";
import Feedback from "@/components/Feedback/Feedback.vue";

const isLoaded = ref(false);
const route = useRoute();
const router = useRouter();
const productStore = useProduct();
const productData = computed(() => productStore.product);

watch(
  () => route.params.id,
  async (newId) => {
    isLoaded.value = true;
    document.body.classList.add("no-scroll");
    try {
      const response = await productStore.getProduct(newId);
      if (!response.success) {
        router.push(response.status === 404 ? "/404" : "/error");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      router.push("/error");
    } finally {
      isLoaded.value = false;
      document.body.classList.remove("no-scroll");
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  if (!isLoaded.value) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
