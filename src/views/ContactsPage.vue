<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main__contacts">
    <Content title="контакты" :img="img" />
    <ContactsContent @mapLoaded="handleMapLoaded" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ContactsContent from "@/components/Contacts/ContactsContent.vue";
import Content from "@/components/UI/Content.vue";
import img from "@/assets/images/UI/content-contacts.jpeg";
const isLoaded = ref(false);

const handleMapLoaded = () => {
  isLoaded.value = true;
  document.body.classList.remove("no-scroll");
};

onMounted(() => {
  document.body.classList.add("no-scroll");
});

onUnmounted(() => {
  if (!isLoaded.value) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
