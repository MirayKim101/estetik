<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="сlientсonnect">
    <div class="сlientсonnect-wrapper">
      <div class="сlientсonnect-wrapper-left">
        <h3 class="сlientсonnect-wrapper-left-title">мы всегда на связи</h3>
        <p class="сlientсonnect-wrapper-left-text">
          Если у вас есть дополнительные вопросы, позвоните нам мы с радостью
          ответим на все и сориентируем по стоимости услуг
        </p>
        <a href="tel:+79043762512" class="сlientсonnect-wrapper-left-btn">
          Позвонить нам
          <img src="@/assets/images/icons/phone.svg" alt="иконка телефона" />
        </a>
      </div>

      <div class="сlientсonnect-wrapper-right">
        <div class="сlientсonnect-wrapper-right-outline">
          <div class="сlientсonnect-wrapper-right-border">
            <img
              src="@/assets/images/forms/client-connect.png"
              alt="фото в блоке"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

</script>
