<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>computed name: {{ computedName }}</p>
    <el-button>click</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String }) msg!: string;

  // 初始化数据
  name: number[] = [1, 2];
  abc =
  '112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242112341242';
  // 声明周期钩子
  mounted() {
    console.info(`🐞: `, this.name.fill(3, 2));
    this.greet();
  }

  // 计算属性
  get computedName() {
    return 'computed ' + this.name;
  }

  // 方法
  greet() {
    console.info(`🌳: `, 'hello: ', this.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  display: flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
