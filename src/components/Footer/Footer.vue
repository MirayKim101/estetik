<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__wrapper-info">
        <div class="footer__wrapper-info-content">
          <router-link to="/" class="footer__wrapper-info-content-logo">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </router-link>

          <div class="footer__wrapper-info-content-address">
            <a
              target="_blank"
              href="https://2gis.ru/kemerovo/firm/704215723349322?m=86.137079%2C55.351773%2F16"
              >г. Кемерово, ул. Терешковой 18</a
            >
            <a href="tel:+79043762512">+7 (904) 376-25-12</a>
            <span>Работаем ежедневно: 9:00-21:00</span>
          </div>
        </div>

        <div class="footer__wrapper-info-btns">
          <div class="footer__wrapper-info-btns-media">
            <a href="#!">
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
            <a href="#!">
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
          </div>

          <button
            @click="VisuallyImpairedMode"
            class="footer__wrapper-info-btns-vision"
          >
            <svg
              width="36"
              height="36"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0.0001285344478674233 3 23.999385833740234 18"
            >
              <g data-name="01 align center">
                <path
                  d="M23.821 11.181C22.943 9.261 19.5 3 12 3S1.057 9.261.179 11.181a1.969 1.969 0 0 0 0 1.64C1.057 14.739 4.5 21 12 21s10.943-6.261 11.821-8.181a1.968 1.968 0 0 0 0-1.638zM12 19c-6.307 0-9.25-5.366-10-6.989C2.75 10.366 5.693 5 12 5c6.292 0 9.236 5.343 10 7-.764 1.657-3.708 7-10 7z"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
            <span>Версия для слабовидящих</span>
          </button>
        </div>
      </div>

      <div class="footer__wrapper-menu">
        <nav class="footer__wrapper-menu-nav">
          <div class="footer__wrapper-menu-nav-inner">
            <h3 class="footer__wrapper-menu-nav-inner-title">меню</h3>

            <ul class="footer__wrapper-menu-nav-inner-list">
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/about"
                >
                  О клинике
                </router-link>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/services"
                >
                  Услуги и цены
                </router-link>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/specialists"
                >
                  Специалисты
                </router-link>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/discounts"
                >
                  Акции
                </router-link>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/news"
                >
                  Новости
                </router-link>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/products"
                >
                  Продукция
                </router-link>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <router-link
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                  to="/contacts"
                >
                  Контакты
                </router-link>
              </li>
            </ul>
          </div>
          <div class="footer__wrapper-menu-nav-inner">
            <h3 class="footer__wrapper-menu-nav-inner-title">
              дополнительная информация
            </h3>

            <ul class="footer__wrapper-menu-nav-inner-list additional">
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <a
                  target="_blank"
                  href="https://disk.yandex.ru/i/PiDc3UXR81kZ-Q"
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                >
                  Политика обработки персональных данных
                </a>
              </li>
              <li class="footer__wrapper-menu-nav-inner-list-item">
                <a
                  target="_blank"
                  href="https://disk.yandex.ru/i/kjdTbY6r3EB7-g"
                  class="footer__wrapper-menu-nav-inner-list-item-link"
                >
                  Полный прайс услуг
                </a>
              </li>

              <li class="footer__wrapper-menu-nav-inner-list-item">
                <a
                  target="_blank"
                  href="https://disk.yandex.ru/d/ELszNsHL_roeag"
                  class="footer__wrapper-menu-nav-inner-list-item-link all"
                >
                  Посмотреть все документы
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="footer__wrapper-menu-btns">
          <a
            target="_blank"
            class="footer__wrapper-menu-btns-price"
            href="https://disk.yandex.ru/i/kjdTbY6r3EB7-g"
          >
            скачать прайс лист
            <img
              src="@/assets/images/icons/price.svg"
              alt="иконка скачать прайс-лист"
            />
          </a>
          <router-link
            class="footer__wrapper-menu-btns-vacancy"
            to="/vacancies"
          >
            Вакансии компании
            <img
              src="@/assets/images/icons/vacancies.svg"
              alt="иконка страницы вакансии"
            />
          </router-link>
        </div>
      </div>

      <a
        target="_blank"
        class="footer__wrapper-mention"
        href="https://t.me/Portfolio_IrodaOmonova"
      >
        2024 designed by <span>dandelion_killer</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const isVisuallyImpairedMode = ref(false);

const VisuallyImpairedMode = () => {
  isVisuallyImpairedMode.value = !isVisuallyImpairedMode.value;
};

watchEffect(() => {
  if (isVisuallyImpairedMode.value) {
    document.body.classList.add("visually-impaired");
  } else {
    document.body.classList.remove("visually-impaired");
  }
});
</script>
