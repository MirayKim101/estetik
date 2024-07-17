<template>
  <div class="article__body" v-if="articleContent">
    <div class="article__body-wrapper">
      <div  :data-aos="!isMobile ? 'fade-down' : ''" class="article__body-wrapper-inner">
        <div class="article__body-wrapper-img">
          <svg
            viewBox="0 0 1296 421"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="image-1">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40 0C17.9086 0 0 17.9086 0 40V141V381C0 403.091 17.9086 421 40 421H666H1256C1278.09 421 1296 403.091 1296 381V141C1296 118.909 1278.09 101 1256 101H746C723.909 101 706 83.0914 706 61V40C706 17.9086 688.091 0 666 0H40Z"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#image-1)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40 0C17.9086 0 0 17.9086 0 40V141V381C0 403.091 17.9086 421 40 421H666H1256C1278.09 421 1296 403.091 1296 381V141C1296 118.909 1278.09 101 1256 101H746C723.909 101 706 83.0914 706 61V40C706 17.9086 688.091 0 666 0H40Z"
                fill="#A3C8F2"
                fill-opacity="0.2"
              />

              <image
                :href="articleContent[0].image"
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMaxYMax slice"
              />
            </g>
          </svg>
        </div>

        <div
          class="article__body-wrapper-text"
          v-html="articleContent[0].text"
        ></div>
      </div>
      <div  :data-aos="!isMobile ? 'fade-down' : ''" class="article__body-wrapper-inner">
        <div class="article__body-wrapper-img">
          <svg
            viewBox="0 0 1296 401"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="image-2">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M811 0H40C17.9086 0 0 17.9086 0 40V300C0 322.091 17.9086 340 40 340H780.5C797.345 340 811 353.655 811 370.5C811 387.345 824.655 401 841.5 401H1256C1278.09 401 1296 383.091 1296 361V340V40C1296 17.9086 1278.09 0 1256 0H811Z"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#image-2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M811 0H40C17.9086 0 0 17.9086 0 40V300C0 322.091 17.9086 340 40 340H780.5C797.345 340 811 353.655 811 370.5C811 387.345 824.655 401 841.5 401H1256C1278.09 401 1296 383.091 1296 361V340V40C1296 17.9086 1278.09 0 1256 0H811Z"
                fill="#A3C8F2"
                fill-opacity="0.2"
              />

              <image
                :href="articleContent[1].image"
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMaxYMax slice"
              />
            </g>
          </svg>
        </div>

        <div
          class="article__body-wrapper-text"
          v-html="articleContent[1].text"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const props = defineProps({
  articleContent: {
    type: Array,
  },
});
</script>

