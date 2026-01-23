import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
      meta: { title: "Matei Sax | Official Website" },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/AboutPage.vue"),
      meta: { title: "About | Matei Sax" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
      meta: { title: "Page not found | Matei Sax" },
    },
  ],
});

router.afterEach((to) => {
  const title = typeof to.meta?.title === "string" ? to.meta.title : undefined;
  if (title) document.title = title;
});

export default router;
