<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main__vacancies">
    <Content height="190%" title="вакансии" :img="img" type="vacancies" />
    <div class="main__vacancies-list">
      <VacanciesItem
        v-for="vacancy in vacansiesList"
        :vacancy="vacancy"
        :key="vacancy.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useVacansies } from "@/store/Vacansies";
import Content from "@/components/UI/Content.vue";
import VacanciesItem from "@/components/Vacancies/VacanciesItem.vue";
import img from "@/assets/images/UI/content-vacancy.jpg";
const isLoaded = ref(false);
const vacansies = useVacansies();
const vacansiesList = computed(() => vacansies.vacansiesList);

onMounted(async () => {
  document.body.classList.add("no-scroll");
  try {
    await vacansies.getVacansies();
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
