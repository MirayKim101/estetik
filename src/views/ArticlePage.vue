<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="article">
    <ArticleTop :articleData="articleData" />
    <ArticleBody :articleContent="articleData?.contents" />
    <ClientConnect v-if="isVisible" />
    <ProMed />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNews } from "@/store/news";
import Feedback from "@/components/Feedback/Feedback.vue";
import ArticleTop from "@/components/News/Article/ArticleTop.vue";
import ArticleBody from "@/components/News/Article/ArticleBody.vue";
import ProMed from "@/components/UI/ProMed.vue";
import ClientConnect from "@/components/ClientConnect/ClientConnect.vue";

const isVisible = ref(false);
const isLoaded = ref(false);

const updateOnMobile = () => {
  isVisible.value = window.matchMedia("(max-width: 480px)").matches;
};

const route = useRoute();
const router = useRouter();
const newsStore = useNews();
const id = route.params.id;
const articleData = computed(() => newsStore.article);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  updateOnMobile();
  window.addEventListener("resize", updateOnMobile);
  isLoaded.value = false;
  try {
    const response = await newsStore.getArticle(id);
    if (!response.success) {
      router.push(response.status === 404 ? "/404" : "/error");
    }
  } catch (error) {
    console.error("Ошибка при получение статей:", error);
    router.push("/error");
  } finally {
    isLoaded.value = true;
    document.body.classList.remove("no-scroll");
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", updateOnMobile);
  if (!isLoaded.value) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
