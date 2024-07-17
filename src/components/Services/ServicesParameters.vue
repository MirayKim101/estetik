<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="services__parameters">
    <div class="services__parameters-wrapper">
      <div class="services__parameters-title">
        <img
          src="@/assets/images/icons/parameters-icon.svg"
          alt="иконка параметров"
        />
        <span>подбор параметров</span>
      </div>
      <div class="services__parameters__body">
        <span class="services__parameters__body-title">категория</span>
        <div class="services__parameters__body__btns">
          <button
            v-for="(item, i) in paramsArr"
            :key="i"
            :class="{ active: servicesStore.selectedCategory == item.id }"
            @click="selectCategory(item)"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useServices } from "@/store/Services";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();
const servicesStore = useServices();
const paramsArr = ref([]);
const getCategories = async () => {
  await servicesStore.getCategories();
  servicesStore.categories.forEach((element) => {
    paramsArr.value.push({
      title: element.title,
      id: element.id,
      active: false,
    });
  });
};
getCategories();
const selectCategory = (item) => {
  if (item.active) {
    servicesStore.selectedCategory = null;
  } else {
    servicesStore.selectedCategory = item.id;
  }
  item.active = !item.active;
};

onMounted(() => {
  servicesStore.getServices();
});
</script>
