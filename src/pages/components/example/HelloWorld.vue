<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>computed name: {{ computedName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String }) msg!: string;

  // 初始化数据
  name: number[] = [1, 2, 2, 2];

  // 声明周期钩子
  mounted() {
    this.greet();
  }

  // 计算属性
  get computedName() {
    return 'computed ' + this.name;
  }

  // 方法
  greet() {
    // console.info(`🌳: `, 'hello: ', this.name);
  }
}
</script>
