import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import '@/plugins/firebase';
import '@/assets/main.css';

createApp(App).use(router).mount('#app')
