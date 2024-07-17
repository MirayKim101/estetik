<template>
  <div class="news__cards-wrapper">
    <router-link class="news__cards-card" :to="`/news/${item ? item.id : 0}`">
      <div class="news__cards-card-img">
        <img v-lazy="item.image" :alt="item.title" />
      </div>

      <span class="news__cards-card-offer">
        {{ item.special_offer ? "Общие новости" : "Промо-акции" }}
      </span>

      <h3 class="news__cards-card-title">
        {{ item.title }}
      </h3>

      <p class="news__cards-card-desc">
        {{ item.short_desc }}
      </p>

      <div class="news__cards-card-inner">
        <button class="news__cards-card-inner-btn">прочитать новость</button>

        <span class="news__cards-card-inner-date">
          {{ getCreatedDate(item.created_at) }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});

const getCreatedDate = (date) => {
  return new Date(Date.parse(date)).toLocaleDateString();
};
</script>
