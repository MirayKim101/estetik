<template>
  <div class="reviews__modal" @click.self="closeModalRewiev">
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
    <div class="reviews__modal-wrapper">
      <h3 class="reviews__modal-wrapper-title">
        Поделитесь своей
        <span>историей</span>
      </h3>
      <form @submit.prevent="feedbackPost()" class="reviews__modal-form">
        <div class="reviews__modal-form-inner">
          <Input
            :required="true"
            v-mask="computedMask"
            type="text"
            name="rewiews-phone"
            label="Ваш номер телефона"
            placeholder="Введите ваш номер"
            class="reviews__modal-form-input"
            v-model:value="phone_number"
          />
          <Input
            :required="true"
            type="text"
            name="rewiews-name"
            label="Ваше имя"
            placeholder="Ваше имя"
            class="reviews__modal-form-input"
            v-model:value="v.full_name.$model"
            :error="v.full_name.$errors"
          />
        </div>
        <div class="reviews__modal-form-message">
          <h4 class="reviews__modal-form-message-title">
            Напишите ваше обращение
          </h4>
          <textarea
            v-model="text"
            required
            placeholder="Ваше сообщение"
          ></textarea>
        </div>
        <div class="reviews__modal-form-checkbox">
          <input
            required
            v-model="checked"
            @click="checked = !checked"
            type="checkbox"
          />
          <a>продолжая, вы подтверждаете обработку персональных данных</a>
        </div>
        <button type="submit" class="reviews__modal-form-btn">ОТПРАВИТЬ</button>
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
import { useFeedBack } from "@/store/Feedback";
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

const phone_number = ref("");
const full_name = ref("");
const text = ref("");
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
const apoint = useFeedBack();

const feedbackPost = async (review) => {
  v.value.$touch();

  if (!v.value.$invalid) {
    review = {
      phone_number: phone_number.value,
      full_name: full_name.value,
      text: text.value,
    };
    apoint.postFeedBack(review);
    success.value = true;
    openModal();
  } else {
    success.value = false;
    openModal();
  }
  phone_number.value = "";
  full_name.value = "";
  text.value = "";
  checked.value = false;
};
</script>
