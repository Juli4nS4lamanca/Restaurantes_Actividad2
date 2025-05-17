import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SearchPage from "../views/SearchPage.vue";
import NewRestaurantPage from "../views/NewRestaurantPage.vue"; // ✅ Confirma que este archivo existe en "views/"

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/new", component: NewRestaurantPage }, // 🔥 Aquí definimos la ruta correctamente
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
