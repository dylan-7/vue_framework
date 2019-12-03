import Vue from 'vue';
import Vuex from 'vuex';
import { UserState } from './modules/user';
import { PermissionState } from './modules/permission';

Vue.use(Vuex);

export default new Vuex.Store<State>({});

export interface State {
  user: UserState;
  permission: PermissionState;
}
