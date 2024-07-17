<template>
  <div class="stories" v-if="storiesList && storiesList.length">
    <div
      @wheel.prevent="handleWheel"
      :data-aos="!isMobile ? 'fade-down' : ''"
      class="stories__wrapper"
    >
      <div
        @click="modalOpen(storiesCategory.id)"
        v-for="storiesCategory in storiesList"
        :key="storiesCategory.id"
        class="stories__category"
      >
        <div class="stories__category-img">
          <img v-lazy="storiesCategory.image" :alt="storiesCategory.title" />
        </div>
        <span class="stories__category-title">{{ storiesCategory.title }}</span>
      </div>
    </div>
  </div>
  <StoriesSlider
    :currentIndex="currentIndex"
    @modalClose="modalClose"
    v-if="isModalOpen"
    :storiesList="storiesList"
  />
</template>

<script setup>
import { ref } from "vue";
import { useIsMobile } from "@/useIsMobile.js";
import StoriesSlider from "@/components/Stories/StoriesSlider.vue";
const { isMobile } = useIsMobile();

const props = defineProps({
  storiesList: {
    type: Array,
  },
});

const isModalOpen = ref(false);
const currentIndex = ref(null);

const modalOpen = (id) => {
  currentIndex.value = props.storiesList.findIndex((story) => story.id === id);
  isModalOpen.value = true;
  document.body.classList.add("no-scroll");
};

const modalClose = () => {
  isModalOpen.value = false;
  document.body.classList.remove("no-scroll");
};

const handleWheel = (evt) => {
  const container = evt.currentTarget;
  container.scrollLeft += evt.deltaY;
};
</script>
