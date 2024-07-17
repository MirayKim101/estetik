<template>
  <div class="main__products-item" v-if="product">
    <div class="main__products-item-content">
      <h4 class="main__products-item-content-type">{{ product.title }}</h4>
      <h3 class="main__products-item-content-title">
        {{ product.short_desc }}
      </h3>
      <span class="main__products-item-content-price">
        {{ product.price.toLocaleString() }} р
      </span>
    </div>

    <div class="main__products-item-img">
      <svg
        class="main__products-item-img-svg"
        width="100%"
        height="100%"
        viewBox="0 0 290 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath :id="`clip0_${product.id}`">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M290 20C290 12.7603 280.983 14.5694 275.886 19.7111C270.813 24.8297 263.777 28 256 28C247.552 28 239.977 24.2583 234.843 18.3418C227.604 9.99891 219.046 0 208 0H20C8.95431 0 0 8.95431 0 20V208C0 219.046 8.9543 228 20 228H270C281.046 228 290 219.046 290 208V20Z"
            />
          </clipPath>
        </defs>
        <g :clip-path="`url(#clip0_${product.id})`">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M290 20C290 12.7603 280.983 14.5694 275.886 19.7111C270.813 24.8297 263.777 28 256 28C247.552 28 239.977 24.2583 234.843 18.3418C227.604 9.99891 219.046 0 208 0H20C8.95431 0 0 8.95431 0 20V208C0 219.046 8.9543 228 20 228H270C281.046 228 290 219.046 290 208V20Z"
            fill="#A3C8F2"
            fill-opacity="0.2"
          />

          <image
            :href="product.product_images[0]?.image"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMaxYMax slice"
          />
        </g>
        <a
          class="main__products-item-img-link"
          @click.prevent="goToProduct(product.id)"
        >
          <image
            href="@/assets/images/icons/product.svg"
            x="80%"
            y="-11%"
            width="48px"
            height="48px"
          />
        </a>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
  },
});

const goToProduct = (productId) => {
  router.push(`/products/${productId}`);
};
</script>
