<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="main__cart-data">
    <h2 class="main__cart-data-title">оформление заказа</h2>

    <form @submit.prevent="postProduct()" class="main__cart-data-form">
      <div class="main__cart-data-form-wrapper">
        <h3 class="main__cart-data-form-title">Заполните данные</h3>

        <Input
          v-mask="computedMask"
          :required="true"
          label="Ваш номер телефона"
          name="phone"
          placeholder="+998"
          type="text"
          v-model:value="phoneUser"
        />
        <Input
          subtitle="вы можете указать ФИО, того кто будет забирать заказ, но так же вам нужно указать его номер телефона"
          :required="true"
          label="Ваше имя"
          name="name"
          placeholder="Ваше имя"
          type="text"
          v-model:value="v.nameUser.$model"
          :error="v.nameUser.$errors"
        />
        <div class="main__cart-data-form-info">
          <span class="main__cart-data-form-info-subtitle">ВАЖНО! </span>
          <span class="main__cart-data-form-info-desc"
            >На нашем сайте вы можете приобрести товары только на самовызов и
            забрать их в клинике по адресу:</span
          >

          <div class="main__cart-data-form-info-address">
            <a
              target="_blank"
              href="https://2gis.ru/kemerovo/firm/704215723349322?m=86.137079%2C55.351773%2F16"
              >г. Кемерово, ул. Терешковой 18</a
            >
            <a href="tel:+79043762512">+7 (904) 376-25-12</a>
            <span>Работаем ежедневно: 9:00-21:00</span>
          </div>
          <span class="main__cart-data-form-info-tip"
            >На нашем сайте нет доставки, надеемся на ваше понимание
          </span>
        </div>
        <label for="cartDataCheckBox" class="main__cart-data-form-checkbox">
          <input
            required
            name="cartDataCheckBox"
            id="cartDataCheckBox"
            type="checkbox"
            v-model="checked"
          />
          продолжая, вы подтверждаете обработку персональных данных
        </label>

        <button type="submit" class="main__cart-data-form-btn">
          оформить заказ
        </button>
      </div>
    </form>
  </div>

  <OrderModal :isOpen="orderSent" :successRequest="successRequest" />
</template>

<script setup>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";
import { useProduct } from "@/store/Product";
import OrderModal from "@/components/UI/Modals/OrderModal.vue";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const productStore = useProduct();
const phoneUser = ref("");
const nameUser = ref("");
const checked = ref(false);
const orderSent = ref(false);
const successRequest = ref(true);

const lettersOnly = (value) => {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  return /^[^\d!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(value);
};

const rules = {
  nameUser: {
    lettersOnly: helpers.withMessage("Некорректное имя", lettersOnly),
  },
};

const computedMask = computed(() => {
  const phone = phoneUser.value;
  if (phone && (phone.startsWith("+7") || phone.startsWith("7"))) {
    return "+7 (###) ###-##-##";
  } else if (phone && phone.startsWith("8")) {
    return "8 (###) ###-##-##";
  } else {
    return "+7 (###) ###-##-##";
  }
});

const v = useVuelidate(rules, { nameUser });

const setContacts = () => {
  const contacts = productStore.getContactsFromlocal();
  if (contacts) {
    phoneUser.value = contacts.phone;
    nameUser.value = contacts.name;
  }
};
setContacts();

const postProduct = async () => {
  v.value.$touch();
  if (!v.value.$invalid) {
    productStore.postProduct(phoneUser.value, nameUser.value);
    successRequest.value = true;
  } else {
    successRequest.value = false;
  }
  orderSent.value = true;
  phoneUser.value = "";
  nameUser.value = "";
  checked.value = false;
};
</script>
