<template>
  <Layout class="layout">
    <app-header />
    <Layout>
      <Sider :hide-trigger="true" class="sider">
        <app-menu />
      </Sider>
      <Layout>
        <Content>
          <app-main />
        </Content>
        <app-footer />
      </Layout>
    </Layout>
  </Layout>
</template>

<style lang='styl' scoped>
.layout {
  height: inherit;

  .sider {
    width: 180px !important;
    min-width: 180px !important;
    max-width: 180px !important;
    flex: 0 0 180px !important;
    height: inherit;
    background: #fff;
  }
}
</style>

<script lang='ts' src='./AppLayout.ts'></script>
