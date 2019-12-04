import { RouteConfig } from 'vue-router';
import AppLayout from '@/pages/layout/AppLayout.vue';

const route: RouteConfig = {
  path: '/gmManagement',
  component: AppLayout,
  meta: {
    title: 'gmManagement',
    icon: 'md-apps'
  },
  children: [
    {
      path: '/game-info',
      component: () => import('@/pages/gmManagement/gameInfo/GameInfo.vue'),
      meta: {
        title: '游戏信息',
        cache: false
      }
    },
    {
      path: '/hundred-adjust',
      component: () =>
        import('@/pages/gmManagement/hundredAdjust/HundredAdjust.vue'),
      meta: {
        title: '百人调控',
        cache: false
      }
    }
  ]
};

export default route;
