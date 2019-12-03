import Cookies from 'js-cookie';

const cookieExpires: number = 1; // 过期时间（天）

const TOKEN_KEY: string = 'token';

const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires });
};

const getToken = () => {
  return Cookies.get(TOKEN_KEY) || '';
};

const removeToken = () => {
  return Cookies.remove(TOKEN_KEY);
};

/**
 * @description token
 */
export { TOKEN_KEY, setToken, getToken, removeToken };

const LANGUAGE_KEY: string = 'language';

const setLanguage = (lang: string) => {
  setLocalStorage(LANGUAGE_KEY, lang);
};

const getLanguage = () => {
  getLocalStorage(LANGUAGE_KEY);
};

const removeLanguage = () => {
  removeLocalStorage(LANGUAGE_KEY);
};

const USERINFO_KEY: string = 'userInfo';

const setUserInfo = (data: object) => {
  setLocalStorage(USERINFO_KEY, JSON.stringify(data));
};

const removeUserInfo = () => {
  removeLocalStorage(USERINFO_KEY);
};

/**
 * @description userInfo
 */
export { setUserInfo, removeUserInfo };

/**
 *
 * @description language
 */
export { setLanguage, getLanguage, removeLanguage };

const setLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key) || '';
};

const removeLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key);
};

const setSessionStorage = (key: string, value: string) => {
  window.sessionStorage.setItem(key, value);
};

const getSesstionStorage = (key: string) => {
  return window.sessionStorage.getItem(key) || '';
};

const removeSesstionStorage = (key: string) => {
  return window.sessionStorage.removeItem(key);
};

/**
 * @description localStorage
 */
export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setSessionStorage,
  getSesstionStorage,
  removeSesstionStorage
};
