<template>
  <div class="booking__modal" @click.self="closeModalRewiev">
    <svg
      @click="closeModalRewiev"
      class="reviews__modal-close"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 1L1 15M15 15L1 1" stroke-width="2" stroke-linecap="round" />
    </svg>
    <div class="booking__modal-wrapper">
      <h3 class="booking__modal-wrapper-title">
        Оставьте свои <span>данные</span>
      </h3>
      <form @submit.prevent="apoitPost()" class="booking__modal-form">
        <div class="booking__modal-form-inner">
          <Input
            :required="true"
            v-mask="computedMask"
            type="text"
            name="booking-phone"
            label="Ваш номер телефона"
            placeholder="Введите ваш номер"
            class="booking__modal-form-input"
            v-model:value="phone_number"
          />
          <Input
            :required="true"
            type="date"
            name="booking-date"
            label="выберите желаемую дату"
            class="booking__modal-form-input"
            v-model="book_date"
          />
        </div>
        <Input
          :required="true"
          type="text"
          name="booking-name"
          label="Ваше имя"
          class="booking__modal-form-input"
          placeholder="Ваше имя"
          v-model:value="v.full_name.$model"
          :error="v.full_name.$errors"
        />
        <div class="booking__modal-form-checkbox">
          <input
            required
            v-model="checked"
            @click="checked = !checked"
            type="checkbox"
          />
          <a>продолжая, вы подтверждаете обработку персональных данных</a>
        </div>
        <button type="submit" class="booking__modal-form-btn">ОТПРАВИТЬ</button>
        <StatusModal
          @closeModalRewiev="closeModalRewiev"
          :success="success"
          :onClose="closeModal"
          :isOpen="isModalOpen"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useOnlineApoint } from "@/store/OnlineApoint";
import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";
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

const emit = defineEmits(["closeModalRewiev"]);
const closeModalRewiev = () => {
  emit("closeModalRewiev");
};

const phone_number = ref(""),
  full_name = ref(""),
  book_date = ref(new Date(Date.now()).toISOString().slice(0, 10)),
  checked = ref(false);

const lettersOnly = (value) => {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  return /^[^\d!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(value);
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

const rules = {
  full_name: {
    lettersOnly: helpers.withMessage("Некорректное имя", lettersOnly),
  },
};

const v = useVuelidate(rules, { full_name });
const apoint = useOnlineApoint();

const apoitPost = async (contact) => {
  v.value.$touch();
  if (!v.value.$invalid) {
    contact = {
      phone_number: phone_number.value,
      full_name: full_name.value,
      book_date: book_date.value,
    };
    apoint.postApoint(contact);
    success.value = true;
    openModal();
  } else {
    success.value = false;
    openModal();
  }
  phone_number.value = "";
  full_name.value = "";
  book_date.value = new Date(Date.now()).toISOString().slice(0, 10);
  checked.value = false;
};
</script>
