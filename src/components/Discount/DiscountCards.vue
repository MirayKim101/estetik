<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="main__discount-cards"
    v-if="discountsContent"
  >
    <div class="main__discount-cards-wrapper">
      <div
        v-for="item in discountsContent"
        :key="item.id"
        class="main__discount-cards-wrapper-card"
      >
        <div
          v-if="item.action_images.length"
          class="main__discount-cards-wrapper-card-img"
        >
          <img v-lazy="item?.action_images[0]?.image" alt="картинка в акции" />
        </div>

        <div class="main__discount-cards-wrapper-card-content">
          <div class="main__discount-cards-wrapper-card-content-inner">
            <h3
              v-html="styledTitle(item.title)"
              class="main__discount-cards-wrapper-card-content-title"
            ></h3>
            <p class="main__discount-cards-wrapper-card-content-caption">
              {{ item.short_desc }}
            </p>
            <span class="main__discount-cards-wrapper-card-content-offer">
              {{ item.special_offer ? "Акция" : "Спецпредложение" }}
            </span>
            <pre></pre>

            <div
              v-html="item.desc"
              class="main__discount-cards-wrapper-card-content-rules"
            ></div>
          </div>
          <span class="main__discount-cards-wrapper-card-content-date">
            до {{ new Date(item.expires_in).toLocaleDateString() }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const props = defineProps({
  discountsContent: {
    typeof: Object,
  },
});

const styledTitle = (title) => {
  const regex = /(\d+%)/g;
  return title.replace(
    regex,
    '<span class="main__discount-cards-wrapper-card-content-title-digit">$1</span>'
  );
};
</script>
