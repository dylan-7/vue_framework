import Vue from 'vue';
import ViewUI from 'view-design';
import 'normalize.css';
import 'view-design/dist/styles/iview.css';
import '@/assets/styles/app.css';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import App from './app.vue';
import store from './store/modules/store';
import router from '@/routes';
import i18n from '@/lang';
import '@/permission';

Vue.use(ViewUI, VueAxios, Axios, {
  i18n: (key: string, value: string) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
