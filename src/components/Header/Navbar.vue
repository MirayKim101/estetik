<template>
  <header class="header">
    <div class="header__nav">
      <router-link to="/" class="header__nav-logo">
        <img src="@assets/images/logo.svg" alt="logo" />
      </router-link>
      <ul class="header__nav-list">
        <li class="header__nav-list_item">
          <router-link to="/about" class="header__nav-list_item-link">
            О клинике
          </router-link>
        </li>
        <li class="header__nav-list_item">
          <router-link to="/services" class="header__nav-list_item-link">
            Услуги и цены
          </router-link>
        </li>
        <li class="header__nav-list_item">
          <router-link to="/specialists" class="header__nav-list_item-link">
            Специалисты
          </router-link>
        </li>
        <li class="header__nav-list_item">
          <router-link to="/discounts" class="header__nav-list_item-link">
            Акции
          </router-link>
        </li>
        <li class="header__nav-list_item">
          <router-link to="/news" class="header__nav-list_item-link">
            Новости
          </router-link>
        </li>
        <li class="header__nav-list_item">
          <router-link to="/products" class="header__nav-list_item-link">
            Продукция
          </router-link>
        </li>
        <li class="header__nav-list_item">
          <router-link to="/contacts" class="header__nav-list_item-link">
            Контакты
          </router-link>
        </li>
      </ul>
      <div class="header__nav-shop">
        <button class="header__nav-burger" @click="open">
          <img src="@assets/images/icons/burger.svg" alt="бургер меню" />
        </button>
        <div class="header__nav-shop-btn" @click="navigateToCart()">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5335 8.79961V5.29961C16.5335 2.98001 14.6531 1.09961 12.3335 1.09961C10.0139 1.09961 8.13354 2.98001 8.13354 5.29961V8.79961M3.8487 24.8996H20.8184C22.3179 24.8996 23.5335 23.7066 23.5335 22.2349L21.7942 8.09957C21.7942 6.62791 20.5785 5.43489 19.079 5.43489H5.2487C3.74916 5.43489 2.53354 6.62791 2.53354 8.09957L1.13354 22.2349C1.13354 23.7066 2.34916 24.8996 3.8487 24.8996Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="header__nav-shop-btn_count" v-if="cart">{{ cart }}</span>
        </div>
        <a href="tel:+79043762512" class="header__nav-shop-tel"
          >+7 904 376‑25‑12</a
        >
      </div>
    </div>

    <div class="header__mob" @click="close()">
      <div class="header__mob-backdrop" v-if="menuBurger"></div>
      <transition name="mobShow">
        <div class="header__mob-right" v-if="menuBurger">
          <div class="header__mob-right-top">
            <router-link to="/" class="header__mob-right-top-logo">
              <img src="@assets/images/logo.svg" alt="logo" />
            </router-link>
            <button class="header__mob-right-top_close" @click="close()">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L1 15M15 15L1 1"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div class="header__mob-right-shop">
            <p class="header__mob-right-shop-desc">Корзина</p>
            <button class="header__nav-shop-btn" @click="navigateToCart()">
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5335 8.79961V5.29961C16.5335 2.98001 14.6531 1.09961 12.3335 1.09961C10.0139 1.09961 8.13354 2.98001 8.13354 5.29961V8.79961M3.8487 24.8996H20.8184C22.3179 24.8996 23.5335 23.7066 23.5335 22.2349L21.7942 8.09957C21.7942 6.62791 20.5785 5.43489 19.079 5.43489H5.2487C3.74916 5.43489 2.53354 6.62791 2.53354 8.09957L1.13354 22.2349C1.13354 23.7066 2.34916 24.8996 3.8487 24.8996Z"
                  stroke="#586BFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="header__nav-shop-btn_count" v-if="cart">{{
                cart
              }}</span>
            </button>
          </div>
          <ul class="header__mob-right-list">
            <li class="header__mob-right-list_item">
              <router-link to="/about" class="header__mob-right-list_item-link">
                О клинике
              </router-link>
            </li>
            <li class="header__mob-right-right-list_item">
              <router-link
                to="/services"
                class="header__mob-right-list_item-link"
              >
                Услуги и цены
              </router-link>
            </li>
            <li class="header__mob-right-list_item">
              <router-link
                to="/specialists"
                class="header__mob-right-list_item-link"
              >
                Специалисты
              </router-link>
            </li>
            <li class="header__mob-right-list_item">
              <router-link
                to="/discounts"
                class="header__mob-right-list_item-link"
              >
                Акции
              </router-link>
            </li>

            <li class="header__mob-right-list_item">
              <router-link to="/news" class="header__mob-right-list_item-link">
                Новости
              </router-link>
            </li>
            <li class="header__mob-right-list_item">
              <router-link
                to="/products?page=1"
                class="header__mob-right-list_item-link"
              >
                Продукция
              </router-link>
            </li>

            <li class="header__mob-right-list_item">
              <router-link
                to="/contacts"
                class="header__mob-right-list_item-link"
              >
                Контакты
              </router-link>
            </li>
          </ul>
          <ul class="header__mob-right-socials">
            <li class="header__mob-right-socials-item">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.6673 17.9993H22.0007L23.334 12.666H18.6673V9.99935C18.6673 8.62602 18.6673 7.33268 21.334 7.33268H23.334V2.85268C22.8993 2.79535 21.258 2.66602 19.5247 2.66602C15.9047 2.66602 13.334 4.87535 13.334 8.93268V12.666H9.33398V17.9993H13.334V29.3327H18.6673V17.9993Z"
                  />
                </svg>
              </a>
            </li>
            <li class="header__mob-right-socials-item">
              <a target="_blank" href="https://t.me/estetic_42">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g clip-path="url(#clip0_3177_4069)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.3702 5.90662C26.6997 5.76794 27.0603 5.72011 27.4146 5.76811C27.7688 5.81611 28.1037 5.95818 28.3844 6.17953C28.6651 6.40089 28.8814 6.69344 29.0107 7.02673C29.1399 7.36002 29.1775 7.72187 29.1195 8.07462L26.0955 26.4173C25.8022 28.1866 23.8608 29.2013 22.2382 28.32C20.8808 27.5826 18.8648 26.4466 17.0515 25.2613C16.1448 24.668 13.3675 22.768 13.7088 21.416C14.0022 20.26 18.6688 15.916 21.3355 13.3333C22.3822 12.3186 21.9048 11.7333 20.6688 12.6666C17.5982 14.984 12.6715 18.508 11.0422 19.5C9.60484 20.3746 8.85551 20.524 7.95951 20.3746C6.32484 20.1026 4.80884 19.6813 3.57151 19.168C1.89951 18.4746 1.98084 16.176 3.57017 15.5066L26.3702 5.90662Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3177_4069">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li class="header__mob-right-socials-item">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3177_4073)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.2667 7.93002C31.488 7.20202 31.2667 6.66602 30.2067 6.66602H26.7067C25.816 6.66602 25.4053 7.12868 25.1827 7.63935C25.1827 7.63935 23.4027 11.9007 20.8813 14.6687C20.0653 15.4713 19.6947 15.726 19.2493 15.726C19.0267 15.726 18.692 15.4713 18.692 14.742V7.93002C18.692 7.05535 18.4467 6.66602 17.7053 6.66602H12.2013C11.6453 6.66602 11.3107 7.07135 11.3107 7.45668C11.3107 8.28468 12.572 8.47668 12.7013 10.8073V15.8713C12.7013 16.982 12.4973 17.1833 12.052 17.1833C10.8653 17.1833 7.97867 12.902 6.26533 8.00335C5.93333 7.05002 5.59733 6.66602 4.70267 6.66602H1.2C0.2 6.66602 0 7.12868 0 7.63935C0 8.54868 1.18667 13.066 5.52667 19.0407C8.42 23.1207 12.4933 25.3327 16.204 25.3327C18.4293 25.3327 18.704 24.842 18.704 23.9953V20.9113C18.704 19.9287 18.9147 19.7327 19.62 19.7327C20.14 19.7327 21.0293 19.9887 23.1067 21.9553C25.48 24.2873 25.8707 25.3327 27.2067 25.3327H30.7067C31.7067 25.3327 32.208 24.842 31.92 23.8713C31.6027 22.906 30.4693 21.5047 28.9667 19.842C28.1507 18.8953 26.9267 17.8753 26.5547 17.3647C26.036 16.71 26.184 16.418 26.5547 15.8353C26.5547 15.8353 30.8213 9.93402 31.2653 7.93002"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3177_4073">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
          <a href="tel:+79043762512" class="header__nav-shop-tel"
            >+7 904 376‑25‑12</a
          >
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProduct } from "@/store/Product.js";
import { useRouter } from "vue-router";
const productStore = useProduct();
const cart = computed(() => productStore?.cart?.products?.length);
const menuBurger = ref(false);
const router = useRouter();

const open = () => {
  menuBurger.value = true;
  document.body.classList.add("no-scroll");
};
const close = () => {
  menuBurger.value = false;
  document.body.style.overflow = "auto";
};

const navigateToCart = () => {
  if (cart.value == 0 || cart.value === undefined || cart.value === null) {
    router.push("/empty-cart");
  } else {
    router.push("/products-cart");
  }
};
</script>
