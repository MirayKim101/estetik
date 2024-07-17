<template>
  <div v-if="isOpen" @click.self="closeModal" class="status__modal">
    <div class="status__modal-wrapper">
      <div v-if="success" class="status__modal-img">
        <svg
          width="121"
          height="120"
          viewBox="0 0 121 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="120" height="120" rx="60" fill="#ECFDF3" />
          <path
            d="M74.4645 51.0355L55.5 70L49.0355 63.5355M60.5 20C38.4086 20 20.5 37.9086 20.5 60C20.5 82.0914 38.4086 100 60.5 100C82.5914 100 100.5 82.0914 100.5 60C100.5 37.9086 82.5914 20 60.5 20Z"
            stroke="#039855"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div v-else class="status__modal-img">
        <svg
          width="121"
          height="121"
          viewBox="0 0 121 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.527344"
            width="120"
            height="120"
            rx="60"
            fill="#FFF6F6"
          />
          <g opacity="0.9">
            <path
              d="M75.5 75.5273L45.5 45.5273M100.5 60.5273C100.5 82.6187 82.5914 100.527 60.5 100.527C38.4086 100.527 20.5 82.6187 20.5 60.5273C20.5 38.436 38.4086 20.5273 60.5 20.5273C82.5914 20.5273 100.5 38.436 100.5 60.5273Z"
              stroke="#FF4B4B"
              stroke-width="7"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
      <h4 class="status__modal-title">
        {{
          success
            ? "Данные успешно отправлены"
            : "Произошла ошибка при отправке данных"
        }}
      </h4>
      <span class="status__modal-subtitle"
        >Если возникли сложности, свяжитесь с администратором</span
      >
      <router-link @click="closeModal" class="status__modal-btn" :to="{}">
        закрыть
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  success: {
    type: Boolean,
  },
  isOpen: {
    type: Boolean,
  },
  onClose: {
    type: Function,
  },
});

const emit = defineEmits(["closeModalRewiev"]);

const closeModal = () => {
  props.onClose();
  emit("closeModalRewiev");
};
</script>
