<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__product-usage"
    v-if="productData && productData.instructions.length"
  >
    <div class="main__product-usage-text">
      <h4 class="main__product-usage-text-title">применение</h4>
      <div
        class="main__product-usage-text-wrapper"
        v-if="productData.instructions"
      >
        <p class="main__product-usage-text-wrapper-caption">
          {{ productData.instructions[0].title }}
        </p>
      </div>
    </div>

    <div class="main__product-usage-images">
      <svg
        class="main__product-usage-images-svg"
        viewBox="0 0 636 679"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip0_1575_6295">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M636 40C636 17.9086 618.091 0 596 0H240C217.909 0 200 17.9086 200 40V141C200 163.091 182.091 181 160 181H40C17.9086 181 0 198.909 0 221V639C0 661.091 17.9086 679 40 679H200H596C618.091 679 636 661.091 636 639V181V40Z"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#clip0_1575_6295)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M636 40C636 17.9086 618.091 0 596 0H240C217.909 0 200 17.9086 200 40V141C200 163.091 182.091 181 160 181H40C17.9086 181 0 198.909 0 221V639C0 661.091 17.9086 679 40 679H200H596C618.091 679 636 661.091 636 639V181V40Z"
            fill="#A3C8F2"
            fill-opacity="0.2"
          />

          <image
            :href="productData.instructions[0].left_image"
            x="0"
            y="0"
            width="100%"
            height="105%"
            preserveAspectRatio="xMaxYMax slice"
          />
        </g>
      </svg>
      <div class="main__product-usage-images-wrapper">
        <div class="main__product-usage-images-wrapper-img">
          <img
            v-lazy="productData.instructions[0].right_image"
            alt="картинка продукта"
          />
        </div>
        <div class="main__product-usage-images-wrapper-text">
          <p class="main__product-usage-images-wrapper-text-caption">
            {{ productData.instructions[0].desc }}
          </p>
        </div>
      </div>
    </div>
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
