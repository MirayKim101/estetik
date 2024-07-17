<template>
  <div class="main__products">
    <div class="main__products-wrapper">
      <ProductsFilter />
      <ProductsList />
    </div>

    <div class="main__products-list-btn">
      <button
        class="main__products-list-btn-prev"
        :class="{ disabled: activePage == 0 }"
        @click="onPrev"
      >
        Назад
      </button>

      <div
        class="main__products-list-btn-bullets"
        v-for="(item, i) in getBulletsCount()"
        :key="i"
        :class="{ active: activePage == i }"
        @click="onBulletPressed(i)"
      >
        {{ item }}
      </div>
      <button
        class="main__products-list-btn-next"
        :class="{ disabled: activePage == getBulletsCount() - 1 }"
        @click="onNext"
      >
        Дальше
      </button>
    </div>

    <button
      class="main__products-list-btn-more"
      @click="onLoadMore()"
      v-if="activePage < getBulletsCount() - 1"
    >
      загрузить еще...
    </button>
  </div>
</template>

<script setup>
import ProductsFilter from "./ProductsFilter.vue";
import ProductsList from "./ProductsList.vue";
import { useProducts } from "@/store/Products.js";
import { computed, ref } from "vue";



const productsStore = useProducts();
const count = computed(() => productsStore.count);
const activePage = ref(0);
const getBulletsCount = () => {
  return Math.round(count.value / 12);
};

const onNext = () => {
  if (activePage.value < getBulletsCount() - 1) {
    activePage.value++;
    productsStore.getProducts({ limit: 12, offset: activePage.value * 12 });
  }
};
const onPrev = () => {
  if (activePage.value > 0) {
    activePage.value--;
    productsStore.getProducts({ limit: 12, offset: activePage.value * 12 });
  }
};
const onBulletPressed = (page) => {
  productsStore.getProducts({ limit: 12, offset: page * 12 });
  activePage.value = page;
};
const onLoadMore = () => {
  activePage.value++;
  productsStore.getProducts({ limit: (activePage.value + 1) * 12, offset: 0 });
};
</script>
