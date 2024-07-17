<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__product-desc"
    v-if="productData && productData.description"
  >
    <h4 class="main__product-desc-title">описание</h4>
    <p class="main__product-desc-text">
      {{ productData.description }}
    </p>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const props = defineProps({
  productData: {
    type: Object,
  },
});
</script>
