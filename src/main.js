import { createApp } from "vue";
import { createPinia } from "pinia";
import "@assets/scss/main.scss";
import App from "./App.vue";
import router from "./router";
import Heading from "./components/UI/Heading.vue";
import Input from "./components/UI/Field/Input.vue";
import StatusModal from "./components/UI/Modals/StatusModal.vue";
import Preloader from "./components/UI/Preloader.vue";
import Navigation from "./components/UI/Navigation.vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import TheMask from "vue-the-mask";
import Vue3Lazyload from "vue3-lazyload";
import AOS from "aos";
import "aos/dist/aos.css";
import loadingImage from "@/assets/images/lazy-load-img.png";
import errorImage from "@/assets/images/lazy-load-img.png";

const app = createApp(App);
app.component("Heading", Heading);
app.component("Input", Input);
app.component("StatusModal", StatusModal);
app.component("Preloader", Preloader);
app.component("Navigation", Navigation);
app.use(router);
app.use(createPinia());
app.use(VueAwesomePaginate);
app.use(TheMask);
app.use(Vue3Lazyload, {
  loading: loadingImage,
  error: errorImage,
  observer: true,
  observerOptions: {
    rootMargin: "100px",
    threshold: 0.1,
  },
});
app.mount("#app");
AOS.init({
  duration: 1000,
  easing: "ease-out",
});
