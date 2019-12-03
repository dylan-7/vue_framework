import axios from 'axios';
import { Message } from 'view-design';
import { UserModule } from '@/store/modules/user';

const service = axios.create({
  baseURL: process.env.SERVICE_URL,
  timeout: 5000
});

// request interceptors
service.interceptors.request.use(
  config => {
    if (UserModule.token) {
      config.headers.Authorization = `Bearer ${UserModule.token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response: { status: number; data: any }) => {
    let isError: boolean = false;
    const errorMessage = (content: string) => {
      (Message as any).warning({ background: true, content: content });
      isError = true;
    };

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 400) {
      errorMessage('请求参数错误');
    } else if (response.status === 401 || response.status === 403) {
      errorMessage('您的权限已失效，请重新登录');
      UserModule.LogOut();
      location.reload();
    } else if (response.status === 404) {
      errorMessage('请求接口不存在');
    } else if (response.status === 408) {
      errorMessage('请求服务器超时');
    } else if (response.status === 500) {
      errorMessage('服务器发生错误');
    } else if (response.status === 504) {
      errorMessage('网关超时');
    } else {
      errorMessage('服务器繁忙，请稍后重试！');
    }

    if (isError) {
      return Promise.reject(new Error(response.data.message || 'Error'));
    }
  },
  error => {
    (Message as any).warning('服务器异常');
    return Promise.reject(error);
  }
);

export default service;
