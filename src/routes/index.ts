import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import AppLayout from '@/pages/layout/AppLayout.vue';

/**
 * @description: 业务模块
 */
import gmManagement from './modules/gmManagement';

Vue.use(Router);

export const constantRoutes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/Login.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard/Dashboard.vue'),
        meta: {
          title: '首页',
          icon: 'ios-home'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/pages/errorPage/404.vue'),
    meta: {
      title: '页面未找到',
      show: true
    }
  },
  {
    path: '/401',
    component: () => import('@/pages/errorPage/401.vue'),
    meta: {
      title: '无权限',
      show: true
    }
  }
];

export const asyncRoutes: RouteConfig[] = [
  {
    path: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/Dashboard.vue'),
        meta: {
          title: '首页',
          icon: 'ios-home'
        }
      }
    ]
  },
  gmManagement,
  {
    path: '*',
    redirect: '/404',
    meta: {
      show: false
    }
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: '/',
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher;
}

export default router;
