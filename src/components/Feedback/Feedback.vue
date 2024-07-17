<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="feedback">
    <div class="feedback__title">
      <h3>связь с главным врачом</h3>
      <p>
        Если у вас есть предложения по улучшению качества нашего обслуживания,
        методикам, специалистам – свяжитесь, пожалуйста, со мной!
      </p>
    </div>

    <div class="feedback__wrapper">
      <div class="feedback__wrapper-img">
        <img src="@/assets/images/forms/services.png" alt="фото врача" />
      </div>
      <form
        @submit.prevent="chiefDoctorApoint()"
        class="feedback__wrapper-form"
      >
        <Input
          v-mask="computedMask"
          name="feedback__phone"
          label="Ваш номер телефона"
          placeholder="Введите ваш номер"
          type="text"
          v-model:value="phone_number"
          :required="true"
        />

        <Input
          name="feedback__name"
          label="Ваше имя"
          placeholder="Как вас зовут?"
          type="text"
          :required="true"
          v-model:value="v.full_name.$model"
          :error="v.full_name.$errors"
        />
        <div class="feedback__wrapper-form-message">
          <h4 class="feedback__wrapper-form-message-title">
            Напишите ваше обращение
          </h4>
          <textarea
            name="feedBackTextArea"
            v-model="message"
            required
            placeholder="Ваше сообщение"
          ></textarea>
        </div>

        <div class="feedback__wrapper-form-checkbox">
          <input
            name="feedBackCheckbox"
            required
            v-model="checked"
            @click="checked = !checked"
            type="checkbox"
          />
          <a>продолжая, вы подтверждаете обработку персональных данных</a>
        </div>

        <button type="submit" class="feedback__wrapper-form-btn">
          ОТПРАВИТЬ
        </button>
      </form>
    </div>
  </div>
  <StatusModal :success="success" :onClose="closeModal" :isOpen="isModalOpen" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useOnlineChiefApoint } from "@/store/chiefDoctorApoint";
import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const isModalOpen = ref(false);
const success = ref(null);

function openModal() {
  isModalOpen.value = true;
  document.body.classList.add("no-scroll");
}

function closeModal() {
  isModalOpen.value = false;
  document.body.classList.remove("no-scroll");
}

const phone_number = ref("");
const full_name = ref("");
const message = ref("");
const checked = ref(false);

const lettersOnly = (value) => {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  return /^[^\d!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(value);
};

const rules = {
  full_name: {
    lettersOnly: helpers.withMessage("Некорректное имя", lettersOnly),
  },
};

const computedMask = computed(() => {
  if (
    phone_number.value.startsWith("+7") ||
    phone_number.value.startsWith("7")
  ) {
    return "+7 (###) ###-##-##";
  } else if (phone_number.value.startsWith("8")) {
    return "8 (###) ###-##-##";
  } else {
    return "+7 (###) ###-##-##";
  }
});

const v = useVuelidate(rules, { full_name });
const apoint = useOnlineChiefApoint();

const chiefDoctorApoint = async (contact) => {
  v.value.$touch();

  if (!v.value.$invalid) {
    contact = {
      phone_number: phone_number.value,
      full_name: full_name.value,
      message: message.value,
    };
    apoint.postChiefApoint(contact);

    success.value = true;
    openModal();
  } else {
    success.value = false;
    openModal();
  }
  phone_number.value = "";
  full_name.value = "";
  message.value = "";
  checked.value = false;
};


</script>
