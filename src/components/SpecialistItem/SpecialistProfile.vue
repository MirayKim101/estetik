<template>
  <div
    :data-aos="!isMobile ? 'fade-down' : ''"
    v-if="profile"
    class="main__specitem-profile"
  >
    <div class="main__specitem-profile-inner">
      <div class="main__specitem-profile-content">
        <h3 class="main__specitem-profile-content-title">
          {{ profile.full_name }}
        </h3>
        <span class="main__specitem-profile-content-position">
          {{ profile.position }}
        </span>

        <div
          class="main__specitem-profile-content-certificate"
          v-html="profile.about"
        ></div>
        <button @click="openModal" class="main__specitem-profile-content-btn">
          записаться к врачу
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              d="M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"
            />
          </svg>
        </button>
      </div>

      <div class="main__specitem-profile-wrapper">
        <div class="main__specitem-profile-wrapper-img">
          <div
            v-if="isMobileSpec"
            class="main__specitem-profile-wrapper-img-mobile"
          >
            <img v-lazy="profile.photo" alt="фото врача" />
          </div>
          <svg
            v-else
            viewBox="0 0 496 628"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip0_1575_6295">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M185 0H40C17.9086 0 0 17.9086 0 40V428C0 450.091 17.9086 468 40 468H145C167.091 468 185 485.909 185 508V588C185 610.091 202.909 628 225 628H456C478.091 628 496 610.091 496 588V468V40C496 17.9086 478.091 0 456 0H185Z"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#clip0_1575_6295)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M185 0H40C17.9086 0 0 17.9086 0 40V428C0 450.091 17.9086 468 40 468H145C167.091 468 185 485.909 185 508V588C185 610.091 202.909 628 225 628H456C478.091 628 496 610.091 496 588V468V40C496 17.9086 478.091 0 456 0H185Z"
                fill="#A3C8F2"
                fill-opacity="0.2"
              />

              <image
                :href="profile.photo"
                x="0"
                y="0"
                width="100%"
                height="105%"
                preserveAspectRatio="xMaxYMax slice"
              />
            </g>
          </svg>
        </div>

        <div class="main__specitem-profile-wrapper-inner">
          <div class="main__specitem-profile-wrapper-inner-box">
            <div class="main__specitem-profile-wrapper-inner-box-content">
              <h4
                class="main__specitem-profile-wrapper-inner-box-content-title"
              >
                {{ profile.experience_in_company }}+
              </h4>
              <span
                class="main__specitem-profile-wrapper-inner-box-content-caption"
              >
                Стаж работы в клинике Эстетик
              </span>
            </div>
          </div>
          <div class="main__specitem-profile-wrapper-inner-box">
            <div class="main__specitem-profile-wrapper-inner-box-content">
              <h4
                class="main__specitem-profile-wrapper-inner-box-content-title"
              >
                {{ profile.experience_in_field }}+
              </h4>
              <span
                class="main__specitem-profile-wrapper-inner-box-content-caption"
              >
                Стаж в косметологии
              </span>
            </div>
          </div>
          <div class="main__specitem-profile-wrapper-inner-box">
            <div class="main__specitem-profile-wrapper-inner-box-content">
              <h4
                class="main__specitem-profile-wrapper-inner-box-content-title"
              >
                {{ profile.experience_in_years }}+
              </h4>
              <span
                class="main__specitem-profile-wrapper-inner-box-content-caption"
              >
                Опыт работы
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BookingModal @closeModalRewiev="closeModalRewiev" v-if="isModalOpen" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useIsMobile } from "@/useIsMobile.js";
import BookingModal from "../UI/Modals/BookingModal.vue";
const { isMobile } = useIsMobile();

const props = defineProps({
  profile: {
    type: Object,
  },
});
const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add("no-scroll");
};
const closeModalRewiev = () => {
  isModalOpen.value = false;
  document.body.classList.remove("no-scroll");
};
const isMobileSpec = ref(false);
const mediaQuery = window.matchMedia("(max-width: 480px)");
function handleMediaQueryChange(e) {
  isMobileSpec.value = e.matches;
}
onMounted(() => {
  isMobileSpec.value = mediaQuery.matches;
  mediaQuery.addEventListener("change", handleMediaQueryChange);
});
onUnmounted(() => {
  mediaQuery.removeEventListener("change", handleMediaQueryChange);
});
</script>
