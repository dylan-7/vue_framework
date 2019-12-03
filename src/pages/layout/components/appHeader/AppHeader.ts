import { Vue, Component } from 'vue-property-decorator';

/**
 *
 * @file 头部
 * @export
 * @class AppHeader
 * @extends {Vue}
 */
@Component
export default class AppHeader extends Vue {
  private visible: boolean = false;

  // 设置
  onClickSetting() {
    this.visible = !this.visible;
  }
}
