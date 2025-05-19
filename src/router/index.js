import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NewRestaurantPage from "../views/NewRestaurantPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/new", component: NewRestaurantPage },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
