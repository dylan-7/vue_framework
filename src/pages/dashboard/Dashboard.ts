import { Component, Vue } from 'vue-property-decorator';
import { login } from '@/api/user';

/**
 *
 * @file
 * @export
 * @class 首页
 * @extends {Vue}
 */
@Component({
  name: 'Dashboard'
})
export default class Dashboard extends Vue {
  mounted() {
    login({ username: 'lisa', password: '123123123' });
  }
}
