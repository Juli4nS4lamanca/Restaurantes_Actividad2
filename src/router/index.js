import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import SearchPage from '@/components/SearchPage.vue'
import NewRestaurantPage from '@/components/NewRestaurantePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage },
  { path: '/new', component: NewRestaurantPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
