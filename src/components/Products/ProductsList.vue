<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__products-list"
    v-if="products && products.length"
  >
    <ProductsItem
      v-for="product in products"
      :key="product.id"
      class="main__products-list-slider-slide"
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductsItem from "./ProductsItem.vue";
import { computed, onMounted } from "vue";
import { useProducts } from "@/store/Products.js";
import { useIsMobile } from "@/useIsMobile.js";
import "@/components/Products/Products.scss";
const { isMobile } = useIsMobile();

const productStore = useProducts();
const products = computed(() => productStore.products);

onMounted(() => {
  productStore.savedQueryParams = {};
  productStore.getProducts({ limit: 12, offset: 0 });
});
</script>
