<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    class="serviceItem__main"
    v-if="service"
  >
    <div class="serviceItem__main-text" v-if="service.desc">
      <h2 class="serviceItem__main-text-title">описание</h2>
      <p class="serviceItem__main-text-subtitle">
        {{ service.desc }}
      </p>
    </div>

    <div
      class="serviceItem__main-features"
      v-if="service && service.characteristics"
    >
      <h3 class="serviceItem__main-features-title">характеристики</h3>
      <div class="serviceItem__main-features-cards">
        <div
          v-for="item in service.characteristics"
          :key="item.title"
          class="serviceItem__main-features-cards-card"
        >
          <div class="serviceItem__main-features-cards-card-img">
            <img v-lazy="getImageSrc(item.title)" alt="иконка характеристики" />
          </div>
          <span class="serviceItem__main-features-cards-card-caption">
            {{ item.title }}
          </span>
          <span class="serviceItem__main-features-cards-card-time">
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>

    <div class="serviceItem__main__prices">
      <h3 class="serviceItem__main__prices-title">стоимость процедуры</h3>

      <div class="serviceItem__main__prices-inner">
        <div
          v-for="item in isAllprocedureCostsVisible
            ? service.procedure_costs
            : service.procedure_costs.slice(0, 5)"
          :key="item.title"
          class="serviceItem__main__prices-inner-item"
        >
          <h4 class="serviceItem__main__prices-inner-item-title">
            {{ item.title }}
          </h4>
          <span class="serviceItem__main__prices-inner-item-price">
            {{ item.price }} ₽
          </span>
        </div>

        <div
          v-if="service.procedure_costs.length > 5"
          class="serviceItem__main__prices-inner-btn"
        >
          <button
            @click="isAllprocedureCostsVisible = !isAllprocedureCostsVisible"
            class="serviceItem__main__prices-inner-btn-text"
          >
            {{ isAllprocedureCostsVisible ? "скрыть" : "посмотреть еще" }}
          </button>
          <button
            :class="{ active: isAllprocedureCostsVisible }"
            @click="isAllprocedureCostsVisible = !isAllprocedureCostsVisible"
            class="serviceItem__main__prices-inner-btn-arrow"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Icon"
                  d="M16.8 10.0999L12 14.8999L7.2 10.0999"
                  stroke="#848484"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const props = defineProps(["service"]);
const isAllprocedureCostsVisible = ref(false);

const imagePaths = {
  "Длительность процедуры": new URL(
    "@/assets/images/characteristics/watch.svg",
    import.meta.url
  ).href,
  "Длительность эффекта": new URL(
    "@/assets/images/characteristics/effect.svg",
    import.meta.url
  ).href,
  "Рекомендованный курс": new URL(
    "@/assets/images/characteristics/time.svg",
    import.meta.url
  ).href,
  "Реабилитационный период": new URL(
    "@/assets/images/characteristics/period.svg",
    import.meta.url
  ).href,
};

const getImageSrc = (title) => {
  return imagePaths[title] || "";
};
</script>
