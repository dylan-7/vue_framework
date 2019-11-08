<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <hello-world msg="this is vue.js!!!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/pages/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})

export default class Home extends Vue {}
</script>
