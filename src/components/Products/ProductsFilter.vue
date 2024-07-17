<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="main__products-filters">
    <div class="main__products-filters-wrapper">
      <div class="main__products-filters-title">
        <img src="@/assets/images/icons/parameters-icon.svg" alt="" />
        <span>подбор параметров</span>
      </div>
      <div class="main__products-filters-filter list">
        <!-- Фильтр по убыванию или возрастанию -->
        <div class="main__products-filters-filter-category">
          <h4>Сортировать</h4>
          <div class="main__products-filters-filter-sorts">
            <div class="main__products-filters-filter-sorts-item">
              <ToggleSwitch
                @onSwitch="
                  (v) => {
                    filters.priceUp = v;
                    if (filters.priceDown == true && v == true) {
                      filters.priceDown = false;
                    }
                    productStore.filterProducts(filters);
                  }
                "
                :active="filters.priceUp"
              />
              <span>По возрастанию цены</span>
            </div>
            <div class="main__products-filters-filter-sorts-item">
              <ToggleSwitch
                @onSwitch="
                  (v) => {
                    filters.priceDown = v;
                    if (filters.priceUp == true && v == true) {
                      filters.priceUp = false;
                    }
                    productStore.filterProducts(filters);
                  }
                "
                :active="filters.priceDown"
              />
              <span>По убыванию цены</span>
            </div>
          </div>
        </div>

        <!-- Фильтр по категориям -->
        <div class="main__products-filters-filter-category">
          <h4>категория</h4>
          <div
            v-for="category in categories"
            :key="category.id"
            class="main__products-filters-filter-category-inner"
          >
            <div
              @change="updateFilters('category_ids', category.id)"
              class="main__products-filters-filter-category-inner-checkbox"
            >
              <label :for="category.title">
                <input :id="category.title" type="checkbox" />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#586BFF"
                      stroke-width="1.6666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                {{ category.title }}
              </label>
              <span
                class="main__products-filters-filter-category-inner-checkbox-count"
              >
                {{ category.products_count }}
              </span>
            </div>
          </div>
        </div>

        <!-- Фильтр по цене  -->
        <div
          v-if="min !== null && max !== null && min !== max"
          class="main__products-filters-filter-category"
        >
          <h4 class="main__products-filters-filter-category-price">цена</h4>

          <vue-slider
            v-if="range.length"
            v-model="range"
            :min="min"
            :max="max"
            :interval="1"
            tooltip="always"
            @change="debouncedUpdatePriceRange"
          />
        </div>

        <!-- Фильтр по Производителю -->
        <div class="main__products-filters-filter-category">
          <h4>производитель</h4>
          <div
            v-for="manufacturer in isAllManufactures
              ? manufactures
              : manufactures?.slice(0, 3)"
            :key="manufacturer.id"
            class="main__products-filters-filter-category-inner"
          >
            <div
              @change="updateFilters('manufacturer_ids', manufacturer.id)"
              class="main__products-filters-filter-category-inner-checkbox"
            >
              <label :for="manufacturer.name">
                <input :id="manufacturer.name" type="checkbox" />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#586BFF"
                      stroke-width="1.6666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                {{ manufacturer.name }}
              </label>
              <span
                class="main__products-filters-filter-category-inner-checkbox-count"
              >
                {{ manufacturer.products_count }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="main__products-filters-show list">
        <span>
          {{
            isAllManufactures
              ? "Скрыть"
              : `Еще ${manufactures?.length - 3} производителей`
          }}
        </span>
        <button
          :class="{ active: isAllManufactures }"
          @click.prevent="isAllManufactures = !isAllManufactures"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8 9.60039L12 14.4004L7.20005 9.60039"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <button
        v-if="isVisibleBtn"
        @click.prevent="openModal"
        class="main__products-filters-open"
      >
        открыть фильтр
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.60002 7.19922L14.4 11.9992L9.60002 16.7992"
            stroke="#848484"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
  <ProductsFilterModal v-show="isVisibleModal" @closeModal="closeModal" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useProducts } from "@/store/Products.js";
import { useIsMobile } from "@/useIsMobile.js";
import ProductsFilterModal from "./ProductsFilterModal.vue";
import ToggleSwitch from "@/components/UI/Togglers/ToggleSwitch.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
const { isMobile } = useIsMobile();

const isVisibleModal = ref(false);
const isVisibleBtn = ref(false);

const checkMobile = () => {
  isVisibleBtn.value = window.matchMedia("(max-width: 600px)").matches;
};

const openModal = () => {
  isVisibleModal.value = true;
  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  isVisibleModal.value = false;
  document.body.classList.remove("no-scroll");
};

const isAllManufactures = ref(false);
const productStore = useProducts();
const categories = computed(() => productStore.categories);
const manufactures = computed(() => productStore.manufactures);
const min = computed(() => productStore.min);
const max = computed(() => productStore.max);

const filters = ref({
  priceUp: false,
  priceDown: false,
});

const range = ref([]);

function updateFilters(type, value) {
  if (!productStore.savedQueryParams[type]) {
    productStore.savedQueryParams[type] = [];
  }
  const currentValues = productStore.savedQueryParams[type];
  const valueIndex = currentValues.indexOf(value);

  if (valueIndex > -1) {
    currentValues.splice(valueIndex, 1);
  } else {
    currentValues.push(value);
  }

  const newFilters = {
    ...productStore.savedQueryParams,
    [type]: currentValues,
  };

  productStore.getProducts(newFilters);
}

function updatePriceRange(range) {
  const filter = {
    price__gte: range[0],
    price__lte: range[1],
  };
  productStore.getProducts(filter);
}

function debounce(fn, delay) {
  let timeoutID;
  return function (...args) {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedUpdatePriceRange = debounce(updatePriceRange, 300);

onMounted(async () => {
  await productStore.getProductsCategories();
  await productStore.getProductsManufactures();
  await productStore.getMinMax();
  range.value = [min.value, max.value];
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
