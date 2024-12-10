import { createApp } from 'vue';
import router from './router/router';
import App from './App.vue'
// import AcceuilPage from './views/AcceuilPage.vue';


createApp(App).use(router).mount('#app');