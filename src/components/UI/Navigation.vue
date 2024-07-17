<template>
  <nav class="breadcrumb" v-if="breadcrumbs.length > 1">
    <ul class="breadcrumb__list">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb__list-item"
      >
        <router-link
          active-class="active-link"
          class="breadcrumb__list-item-link"
          :to="crumb.path"
          >{{ crumb.name }}</router-link
        >
        <span
          class="breadcrumb__list-item-arrow"
          v-if="index < breadcrumbs.length - 1"
          >›</span
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter((p) => p);
  const crumbs = paths.map((path, index) => {
    const fullPath = "/" + paths.slice(0, index + 1).join("/");

    let matchedRoute = router.getRoutes().find((r) => {
      const regex = new RegExp(`^${r.path.replace(/:\w+/, '[^/]+')}$`);
      return regex.test(fullPath);
    });

    let name = matchedRoute ? matchedRoute.name : path;

    return {
      name,
      path: fullPath,
    };
  });

  return route.path === "/" ? [] : [{ name: "Главная", path: "/" }, ...crumbs];
});
</script>
