<template>
  <div class="services__item">
    <div class="services__item-wrapper">
      <router-link
        class="services__item-wrapper-inner"
        :to="`/services/${item.id}`"
      >
        <div class="services__item-wrapper-inner-text">
          <h4>{{ props.item.title }}</h4>
          <span>{{ item.subtitle }} </span>
        </div>

        <div class="services__item-wrapper-inner-img">
          <img v-lazy="item.image" alt="фото" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
</script>
