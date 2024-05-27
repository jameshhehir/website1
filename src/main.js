import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css'; // Import Tailwind CSS
import './assets/main.css'; // Import main.css

createApp(App).use(router).mount('#app');
