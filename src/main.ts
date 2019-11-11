import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';
import router from './pages/routes/router';
import store from '../store/store';
// import i18n from '@/i18n';

Vue.use(
  ElementUI
  // { i18n: (key: string, values?: any[]) => i18n.t(key, values) }
);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
