import { Component, Vue } from 'vue-property-decorator';
import { AppFooter, AppMain, AppMenu, AppHeader } from './components/index';

/**
 *
 * @file
 * @export
 * @class AppLayout
 * @extends {Vue}
 */
@Component({
  name: 'AppLayout',
  components: {
    AppFooter,
    AppMain,
    AppMenu,
    AppHeader
  }
})
export default class AppLayout extends Vue {}
