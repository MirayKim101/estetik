<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="article__top"
    v-if="articleData"
  >
    <h3 class="article__top-title">статья</h3>

    <div class="article__top-wrapper">
      <div class="article__top-wrapper-img">
        <img v-lazy="articleData.image" :alt="articleData.title" />
      </div>

      <div class="article__top-wrapper-info">
        <h4 class="article__top-wrapper-info-title">
          {{ articleData.title }}
        </h4>

        <div class="article__top-wrapper-info-category">
          <span class="article__top-wrapper-info-category-title">
            {{ articleData.tags[0] }}
          </span>
          <span class="article__top-wrapper-info-category-date">
            {{ new Date(articleData.created_at).toLocaleDateString() }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const props = defineProps({
  articleData: {
    type: Object,
  },
});
</script>
