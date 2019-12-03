import { Route } from 'vue-router';
import router from '@/routes';
import { UserModule } from '@/store/modules/user';
import { PermissionModule } from '@/store/modules/permission';

router.beforeEach(async (to: Route, from: Route, next: any) => {
  if (UserModule.token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      PermissionModule.GenerateRoutes();
      router.addRoutes(PermissionModule.dynamicRoutes);
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

router.afterEach((to: Route) => {
  if (window.document.title !== to.meta.title) {
    window.document.title = to.meta.title;
  }
});
