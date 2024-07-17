<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main">
    <Banner :banners="banners" />
    <StoriesMain :storiesList="storiesList" />
    <Heading />
    <ExDiscountSlider :discountsContent="discountsContent" />
    <Beautiful :beat="beatObj" />
    <ServicesSliderMain />
    <ServiceItemVisit />
    <NewsComp :newsArr="newsArr" />
    <ExSpecSlider title="специалисты" :list="specialistList" />
    <SplitMain />
    <Reviews :reviewsSlider="reviewsSlider" />
    <RecommendedProduct title="наша продукция" :productData="productsList" />
    <Feedback />
    <ClientConnect />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useActionList } from "@/store/Actions.js";
import { useSpecialists } from "@/store/Specialists.js";
import { useProducts } from "@/store/Products.js";
import { useStories } from "@/store/stories.js";
import { useHomeSlider } from "@/store/HomeSlider";
import { useNews } from "@/store/news";
import { useFeedBack } from "@/store/Feedback";
import Banner from "@/components/Banner/Banner.vue";
import StoriesMain from "@/components/Stories/StoriesMain.vue";
import Beautiful from "@/components/Beautiful/Beautiful.vue";
import ClientConnect from "@/components/ClientConnect/ClientConnect.vue";
import ExSpecSlider from "@/components/Specialists/ExSpecSlider.vue";
import NewsComp from "@/components/NewsComp/NewsComp.vue";
import ServiceItemVisit from "@/components/ServiceItem/ServiceItemVisit.vue";
import Feedback from "@/components/Feedback/Feedback.vue";
import Reviews from "@/components/Reviews/Reviews.vue";
import img1 from "@assets/images/beat/beat-1.jpg";
import img2 from "@assets/images/beat/beat-2.jpg";
import ExDiscountSlider from "@/components/Discount/ExDiscountSlider.vue";
import ServicesSliderMain from "../components/ServicesSlider/ServicesSliderMain.vue";
import SplitMain from "../components/SplitPhoto/SplitMain.vue";
import RecommendedProduct from "@/components/Product/RecommendedProduct.vue";

const isLoaded = ref(false);

const beatObj = ref({
  desc: "«Красота – это искусство, которое мы тщательно создаем, объединяя научный подход и мастерство косметологии. Вместе мы обеспечиваем вашу гармонию и делаем каждый момент вашей жизни красивым».",
  reverse: false,
  img1: img1,
  img2: img2,
});

const bannerStore = useHomeSlider();
const banners = computed(() => bannerStore.homeSlider);

const productsStore = useProducts();
const productsList = computed(() => productsStore.products);

const action = useActionList();
const discountsContent = computed(() => action.actionList);

let specialist = useSpecialists();
let specialistList = computed(() => specialist.specialists);

const storiesStore = useStories();
const storiesList = computed(() => storiesStore.stories);

const newsStore = useNews();
const newsArr = computed(() => {
  return newsStore.newsArr ? newsStore.newsArr.slice(0, 3) : [];
});

const feedbacks = useFeedBack();
const reviewsSlider = computed(() => feedbacks.feedbacks);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  try {
    await Promise.all([
      productsStore.getProducts({ limit: 10 }),
      action.getActions(),
      specialist.getSpecialists(),
      storiesStore.getStories(),
      bannerStore.getHomeSlides(),
      newsStore.getNews(false),
      feedbacks.getFeedBack(10, 0),
    ]);
  } finally {
    isLoaded.value = true;
    document.body.classList.remove("no-scroll");
  }
});

onUnmounted(() => {
  if (isLoaded.value === false) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
