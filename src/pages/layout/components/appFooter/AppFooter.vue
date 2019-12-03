<template>
  <Footer class="footer">
    <Row>
      <i-Col>@2019版权所有</i-Col>
    </Row>
  </Footer>
</template>

<style lang='scss' scoped>
.footer {
  text-align: center;
  padding: 10px 50px;
}
</style>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

/**
 *
 * @file 底部
 * @export
 * @class AppFooter
 * @extends {Vue}
 */
@Component({
  name: 'AppFooter'
})
export default class AppFooter extends Vue {}
</script>
