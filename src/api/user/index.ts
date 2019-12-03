import request from '@/utils/request';

// 登录
export const login = (params: object) =>
  request({
    url: '/login',
    method: 'post',
    params
  });

// 登出
export const logout = () =>
  request({
    url: '/logout',
    method: 'post'
  });
