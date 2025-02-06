import { createRouter, createWebHistory } from "vue-router";

import About from "../views/AboutView.vue";

const routes = [{ path: "/about", component: About }];

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
