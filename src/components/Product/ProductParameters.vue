<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__product-characteristics"
    v-if="productData && productData.characteristics.length"
  >
    <div class="main__product-characteristics-wrapper">
      <h4 class="main__product-characteristics-wrapper-title">
        характеристики
      </h4>

      <div class="main__product-characteristics-wrapper-form">
        <div class="main__product-characteristics-wrapper-form-wrapper">
          <div
            v-for="product in isVisibleAll
              ? productData.characteristics
              : productData.characteristics.slice(0, 5)"
            :key="product.id"
            class="main__product-characteristics-wrapper-form-wrapper-item"
          >
            <h3
              class="main__product-characteristics-wrapper-form-wrapper-item-title"
            >
              {{ product.title }}
            </h3>

            <div
              class="main__product-characteristics-wrapper-form-wrapper-item-caption"
            >
              <span v-for="value in product.values" :key="value.id">{{
                value.title
              }}</span>
            </div>
          </div>
        </div>

        <div
          class="main__product-characteristics-wrapper-form-btn"
          v-if="
            productData.characteristics &&
            productData.characteristics.length >= 5
          "
        >
          <button
            @click="isVisibleAll = !isVisibleAll"
            class="main__product-characteristics-wrapper-form-btn-title"
          >
            {{ isVisibleAll ? "скрыть" : "посмотреть еще" }}
          </button>
          <button
            :class="{ active: isVisibleAll }"
            @click="isVisibleAll = !isVisibleAll"
            class="main__product-characteristics-wrapper-form-btn-arrow"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Icon"
                  d="M16.8 10.0999L12 14.8999L7.2 10.0999"
                  stroke="#848484"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const isVisibleAll = ref(false);
const props = defineProps({
  productData: {
    type: Object,
  },
});
</script>
