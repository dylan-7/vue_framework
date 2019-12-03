import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout } from '@/api/user';
import { getToken, setToken, removeToken, setUserInfo, removeUserInfo } from '@/utils/storage';
import { resetRouter } from '@/routes'
import store from '@/store'

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
  public token: string = getToken() || ''
  public userInfo: LoginResult['data']['user'] = {
    name: '',
    username: ''
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_USERINFO(info: LoginResult['data']['user']) {
    this.userInfo = info
  }

  @Action
  public async Login(params: { username: string, password: string}) {
    const { username, password } = params
    const result: LoginResult = await login({ username, password })
    setToken(result.data.access_token)
    this.SET_TOKEN(result.data.access_token)
    setUserInfo(result.data.user)
    this.SET_USERINFO(result.data.user)
  }

  @Action
  public async LogOut() {
    await logout()
    removeToken()
    resetRouter()
    removeUserInfo()
    this.SET_TOKEN('')
    // this.SET_USERINFO()
  }
}

export const UserModule = getModule(User)

export interface UserState {
  token: string,
  userInfo: LoginResult['data']['user'],
}

// 登录返回数据
export interface LoginResult {
  data: {
    access_token: string, // token
    user: {
      name: string; // 用户姓名
      username: string; // 用户名称
    }
  },
  errcode: number, // 状态码
  msg: string, // 提示信息
}
