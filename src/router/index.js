import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "O клинике",
      component: () => import("@/views/AboutPage.vue"),
    },
    {
      path: "/services",
      name: "Услуги и цены",
      component: () => import("@/views/ServicesPage.vue"),
    },
    {
      path: "/services/:id",
      name: "Услуга",
      component: () => import("@/views/ServicesItemPage.vue"),
    },
    {
      path: "/specialists",
      name: "Специалисты",
      component: () => import("@/views/SpecialistsPage.vue"),
    },
    {
      path: "/specialists/:id",
      name: "Специалист",
      component: () => import("@/views/SpecialistItemPage.vue"),
    },
    {
      path: "/discounts",
      name: "Акции",
      component: () => import("@/views/DiscountPage.vue"),
    },
    {
      path: "/news",
      name: "Новости",
      component: () => import("@/views/NewsPage.vue"),
    },
    {
      path: "/news/:id",
      name: "Статья",
      component: () => import("@/views/ArticlePage.vue"),
    },
    {
      path: "/vacancies",
      name: "Вакансии",
      component: () => import("@/views/VacanciesPage.vue"),
    },
    {
      path: "/contacts",
      name: "Контакты",
      component: () => import("@/views/ContactsPage.vue"),
    },
    {
      path: "/products",
      name: "Продукты",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/products/:id",
      name: "Продукт",
      component: () => import("@/views/Product.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Ошибка",
      component: () => import("@/views/NotFoundPage.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/NotFoundPage.vue"),
    },
    {
      path: "/empty-cart",
      name: "Пустая корзина",
      component: () => import("@/views/EmptyCartPage.vue"),
    },
    {
      path: "/products-cart",
      name: "Корзина с товарами",
      component: () => import("@/views/CartProductsPage.vue"),
    },
    {
      path: "/data-cart",
      name: "Оформление товара",
      component: () => import("@/views/CartDataPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" }; 
    }
  },
});

export default router;
