import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { constantRoutes, asyncRoutes } from '@/routes';
import store from '@/store'

const routeFillter = (route: RouteConfig[]) => {
  return route;
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements PermissionState {
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.dynamicRoutes = constantRoutes.concat(routes)
  }

  @Action
  public GenerateRoutes() {
    const accessedRoutes = routeFillter(asyncRoutes);
    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission);

export interface PermissionState {
  dynamicRoutes: RouteConfig[];
}
