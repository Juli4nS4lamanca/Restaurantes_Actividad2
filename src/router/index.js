import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-browser.js';
import HomePage from '@/views/HomePage.vue';
import SearchPage from '@/views/SearchPage.vue';
import NewRestaurantPage from '@/views/NewRestaurantPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage },
  { path: '/new', component: NewRestaurantPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
