<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<style lang='styl'>
#app {
  height: inherit;
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'app'
})
export default class extends Vue {}
</script>
