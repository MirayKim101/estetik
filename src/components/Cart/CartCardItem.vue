<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__cart-card"
    v-if="isVisible"
  >
    <div class="main__cart-card-img" v-if="productData.product_images.length">
      <img
        v-lazy="productData.product_images[0].image"
        :alt="productData.title"
      />
    </div>

    <div class="main__cart-card-content">
      <div class="main__cart-card-content-left">
        <div class="main__cart-card-content-left-text">
          <span class="main__cart-card-content-left-text-title">
            {{ productData.category }}
          </span>
          <span class="main__cart-card-content-left-text-subtitle">
            {{ productData.title }}
          </span>
        </div>

        <div class="main__cart-card-content-left-counter">
          <div class="main__cart-card-content-left-counter-wrapper">
            <button
              @click="
                minus();
                $emit('infoChanged');
              "
              class="main__cart-card-content-left-counter-wrapper-minus"
            >
              <svg
                :class="{ disable: count === 1 }"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M9.59844 6L2.39844 6"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <span class="main__cart-card-content-left-counter-wrapper-count">
              {{ count }}
            </span>
            <button
              @click="
                plus();
                $emit('infoChanged');
              "
              class="main__cart-card-content-left-counter-wrapper-plus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.99844 2.3999L5.99844 9.5999M9.59844 5.9999L2.39844 5.9999"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <span class="main__cart-card-content-left-counter-type"> товар </span>
        </div>
      </div>

      <div class="main__cart-card-content-right">
        <div class="main__cart-card-content-right-cost">
          <span class="main__cart-card-content-right-cost-price"
            >{{ productData.price }}р</span
          >
          <span
            v-if="productData.discount > 1"
            class="main__cart-card-content-right-cost-sale"
            >{{ productData.discount }}р
          </span>
        </div>
        <button
          @click="
            removeCard();
            $emit('infoChanged');
          "
          class="main__cart-card-content-right-cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.39844 5.3998H21.5984M8.39844 1.7998H15.5984M9.59844 17.3998V10.1998M14.3984 17.3998V10.1998M16.1984 22.1998H7.79844C6.47295 22.1998 5.39844 21.1253 5.39844 19.7998L4.85052 6.64976C4.82211 5.96801 5.36714 5.3998 6.04948 5.3998H17.9474C18.6297 5.3998 19.1748 5.96801 19.1464 6.64976L18.5984 19.7998C18.5984 21.1253 17.5239 22.1998 16.1984 22.1998Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProduct } from "@/store/Product";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const productStore = useProduct();

const props = defineProps(["productData"]);

const count = ref(props.productData.quantity);

const isVisible = ref(true);

const removeCard = () => {
  isVisible.value = false;
  productStore.deleteFromCart(props.productData);
};

const minus = () => {
  if (count.value > 1) {
    count.value--;
    productStore.changeQuantity("-", props.productData);
  }
};

const plus = () => {
  count.value++;
  productStore.changeQuantity("+", props.productData);
};
</script>
