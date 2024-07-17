<template>
  <div class="serviceItem__modal__bg" v-if="isOpen">
    <div class="serviceItem__modal" @click.stop>
      <div class="serviceItem__modal__completed" @click.stop>
        <img
          class="serviceItem__modal__completed-img"
          v-lazy="
            successRequest
              ? 'src/assets/images/check-contained.svg'
              : 'src/assets/images/errornetwork.png'
          "
          alt=""
        />
        <h3 class="serviceItem__modal__completed-title error">
          {{ successRequest ? "Поздравляем!" : "Ошибка" }}
        </h3>
        <p class="serviceItem__modal__completed-text">
          {{
            successRequest
              ? "Ваш заказ успешно оформлен"
              : "Ошибка. Свяжитесь с администратором"
          }}
        </p>
        <p
          v-if="successRequest"
          class="serviceItem__modal__completed-text"
          style="font-size: 12px"
        >
          Если возникли сложности вы можете обратиться в тех поддержку
        </p>
        <div class="serviceItem__modal-wrapper">
          <router-link to="/contacts" v-if="successRequest">
            <button class="serviceItem__modal__completed-btn first">
              Написать тех поддержке
            </button>
          </router-link>
          <router-link to="/">
            <button class="serviceItem__modal__completed-btn">
              Вернуться на главную
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["isOpen", "successRequest"]);
</script>
