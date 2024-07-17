<template>
  <div :data-aos="!isMobile ? 'fade-down' : ''" class="main__cart-info">
    <div class="main__cart-info-top">
      <div class="main__cart-info-top-text">
        <span>Итого:</span>
        <span>
          {{
            `${info.productCount} ${
              info.productCount == 1 ? "товар" : "товаров"
            }`
          }}
        </span>
      </div>

      <div class="main__cart-info-top-price">
        <span
          v-if="info.totalDiscount > 100"
          class="main__cart-info-top-price-sale"
          >{{ info.totalDiscount }} Р</span
        >
        <span class="main__cart-info-top-price-cost"
          >{{ info.totalPrice.toLocaleString() }} Р</span
        >
      </div>
    </div>

    <div class="main__cart-info-bottom">
      <div class="main__cart-info-bottom-content">
        <div class="main__cart-info-bottom-content-warning">
          <h5>ВАЖНО!</h5>
          <p>
            На нашем сайте вы можете приобрести товары только на самовызов и
            забрать их в клинике по адресу:
          </p>
        </div>

        <div class="main__cart-info-bottom-content-address">
          <a
            target="_blank"
            href="https://2gis.ru/kemerovo/firm/704215723349322?m=86.137079%2C55.351773%2F16"
            >г. Кемерово, ул. Терешковой 18</a
          >
          <a href="tel:+7 (904) 376-25-12">+7 (904) 376-25-12</a>
          <p>Работаем ежедневно: 9:00-21:00</p>
        </div>

        <span class="main__cart-info-bottom-content-notification">
          На нашем сайте нет доставки, надеемся на ваше понимание
        </span>
      </div>
    </div>
    <router-link to="data-cart">
      <button class="main__cart-info-btn">оформить заказ</button>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useProduct } from "@/store/Product";
import { useIsMobile } from "@/useIsMobile.js";
const { isMobile } = useIsMobile();

const productStore = useProduct();

const emit = defineEmits(["infoUpdated"]);
const props = defineProps(["cart", "infoChanging"]);

const info = ref({
  productCount: 0,
  totalPrice: 0,
  totalDiscount: 0,
});

const getInfo = () => {
  const cart = productStore.getCartFromLocal()?.products;

  let newInfo = {
    productCount: 0,
    totalPrice: 0,
    totalDiscount: 0,
  };

  for (let i = 0; i < cart?.length; i++) {
    const element = cart[i];
    newInfo.productCount += element.quantity;
    newInfo.totalDiscount += element.discount * element.quantity;
    newInfo.totalPrice += element.price * element.quantity;
  }

  info.value = { ...newInfo };
};

onMounted(() => {
  getInfo();
});

watch(
  () => props.infoChanging,
  (newValue) => {
    if (newValue == true) {
      getInfo();
    }
    emit("infoUpdated");
  }
);
</script>
