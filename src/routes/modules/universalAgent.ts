import { RouteConfig } from 'vue-router';
import AppLayout from '@/pages/layout/AppLayout.vue';

const route: RouteConfig = {
  path: '/universalAgent',
  component: AppLayout,
  meta: {
    title: 'universalAgent',
    icon: 'md-apps'
  },
  children: [
    {
      path: '/lower-info',
      component: () => import('@/pages/universalAgent/lowerInfo/LowerInfo.vue'),
      meta: {
        title: '下级信息查询',
        cache: false
      },
    }
  ],
};

export default route;
