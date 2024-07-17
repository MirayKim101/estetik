<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="serviceItem__visit">
    <h3 class="serviceItem__visit-title">запишитесь на прием онлайн</h3>

    <div class="serviceItem__visit-wrapper">
      <form
        @submit.prevent="apoitPost()"
        class="serviceItem__visit-wrapper-form"
      >
        <Input
          v-mask="computedMask"
          :required="true"
          class="serviceItem__visit-wrapper-form-input"
          type="text"
          name="phone"
          label="Ваш номер телефона"
          placeholder="Введите ваш номер"
          v-model:value="phone_number"
        />

        <Input
          :required="true"
          class="serviceItem__visit-wrapper-form-input"
          type="text"
          name="name"
          label="Ваше имя"
          placeholder="Ваше имя"
          v-model:value="v.full_name.$model"
          :error="v.full_name.$errors"
        />
        <Input
          :required="true"
          class="serviceItem__visit-wrapper-form-input"
          type="date"
          name="date"
          label="выберите желаемую дату"
          v-model="book_date"
        />

        <div class="serviceItem__visit-wrapper-form-checkbox">
          <input
            name="serviceItemVisitCheckbox"
            :required="true"
            type="checkbox"
            v-model="checked"
            @click="checked = !checked"
          />
          <a>продолжая, вы подтверждаете обработку персональных данных</a>
        </div>
        <button class="serviceItem__visit-wrapper-form-btn" type="submit">
          отправить
        </button>
      </form>

      <div class="serviceItem__visit-wrapper-img">
        <img src="@/assets/images/forms/serviceItem-img.png" alt="фотография" />
      </div>
    </div>
  </div>
  <StatusModal :success="success" :onClose="closeModal" :isOpen="isModalOpen" />
</template>

<script setup>
import { useOnlineApoint } from "@/store/OnlineApoint";
import { ref, computed } from "vue";
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
