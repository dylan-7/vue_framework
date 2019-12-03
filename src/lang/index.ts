import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getLocalStorage } from '@/utils/storage';
import zh from 'view-design/dist/locale/zh-CN';
import en from 'view-design/dist/locale/en-US';
import zhCNCustom from './zh-CN';
import zhHKCustom from './zh-HK';

Vue.use(VueI18n);
/* desabled-next-line */
(Vue as any).locale = () => {};

const LANG_KEY: string = 'locale';
// 根据浏览器设置语言
const navLang = window.navigator.language;
const localLang = navLang === 'zh-CN' || navLang === 'en-US' ? navLang : false;
const lang = localLang || getLocalStorage(LANG_KEY) || 'zh-CN';

const messages = {
  'zh-CN': Object.assign(zh, zhCNCustom),
  'zh-HK': Object.assign(en, zhHKCustom)
};

const i18n = new VueI18n({
  locale: lang,
  messages
});

export default i18n;
