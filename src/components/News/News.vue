<template>
  <div class="news">
    <div :data-aos="!isMobile ? 'fade-down' : ''" class="news__title">
      <h2>новости</h2>
      <span v-if="isVisible">категория</span>
    </div>

    <div
      :data-aos="!isMobile ? 'fade-down' : ''"
      v-if="newsCategories && newsCategories.length"
      class="news__filter"
    >
      <div class="news__filter-wrapper">
        <button
          @click="getCategoryId(category.id)"
          v-for="category in allCategoryVisible
            ? newsCategories
            : newsCategories.slice(0, 4)"
          :key="category.id"
          class="news__filter-btn"
          :class="{ active: category.id === activeCategoryId }"
        >
          {{ category.title }}
        </button>
      </div>
      <button
        v-if="shouldShowMoreButton"
        @click="allCategoryVisible = !allCategoryVisible"
        class="news__filter-more"
      >
        {{ allCategoryVisible ? "скрыть" : "посмотреть все..." }}
      </button>
    </div>

    <div
      :data-aos="!isMobile ? 'fade-down' : ''"
      v-if="newCards && newCards.length"
      class="news__cards"
    >
      <NewsCard :item="card" v-for="card in newCards" :key="card.id" />
    </div>

    <button
      :data-aos="!isMobile ? 'fade-down' : ''"
      v-if="newCards.length < totalNewsCount"
      @click="loadMore"
      class="news__more"
    >
      загрузить еще...
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useNews } from "@/store/news";
import { useIsMobile } from "@/useIsMobile.js";
import NewsCard from "./NewsCard.vue";
const { isMobile } = useIsMobile();

const emit = defineEmits(["newsLoaded"]);

const newsStore = useNews();
const newsCategories = computed(() => newsStore.categories);
const newCards = computed(() => newsStore.newsArr);
const activeCategoryId = ref(null);
const totalNewsCount = computed(() => newsStore.totalNewsCount);
const isVisible = ref(false);
const allCategoryVisible = ref(false);

const mediaMobile = () => {
  isVisible.value = window.matchMedia("(max-width:480px)").matches;
};
const shouldShowMoreButton = computed(() => {
  return newsCategories.value.length > 4;
});

const getCategoryId = async (categoryId) => {
  if (activeCategoryId.value === categoryId) {
    activeCategoryId.value = null;

    await newsStore.getNews();
  } else {
    activeCategoryId.value = categoryId;
    await newsStore.getNews(false, categoryId);
  }
};
const loadMore = () => {
  newsStore.getNews(true);
};

onMounted(async () => {
  await newsStore.getCategories();
  await newsStore.getNews();
  emit("newsLoaded");
  mediaMobile();
  window.addEventListener("resize", mediaMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", mediaMobile);
});
</script>
