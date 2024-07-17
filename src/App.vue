<template>
  <div class="wrapper">
    <div class="container wrapper__top">
      <Navbar />
      <Navigation />
      <RouterView />
    </div>
    <div class="wrapper__bottom" v-if="!isNotFoundRoute">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Footer from "./components/Footer/Footer.vue";
import Navbar from "./components/Header/Navbar.vue";
import { useProduct } from "./store/Product";

const route = useRoute();
const productStore = useProduct()
const isNotFoundRoute = computed(
  () => route.name === "Ошибка" || route.name === "404"
);
productStore.getCartFromLocal()
</script>
