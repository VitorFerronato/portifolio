import { createRouter, createWebHistory } from "vue-router";

import About from "../views/AboutView.vue";
import Home from "../views/HomeView.vue";

const routes = [
  { path: "/about", component: About },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
