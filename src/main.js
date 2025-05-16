import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';

import './assets/main.css'; // Asegúrate de que exista este archivo

createApp(App).use(router).mount('#app');

