import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';
import i18n from './traduction/i18n'
createApp(App)
  .use(router)
  .use(i18n)
  .use(store)
  .mount('#app');
