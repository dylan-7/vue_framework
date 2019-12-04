<template>
  <Menu active-name='dashboard' theme='light' width="180px" :open-names='[1]' class="menu">
    <MenuItem name='dashboard'>
      <router-link to='/'>
        <Icon type='md-apps' />
        首页
      </router-link>
    </MenuItem>
    <Submenu name='2'>
      <template slot='title'>
        <Icon type='md-apps' />
        GM管理
      </template>
      <MenuItem name='2-1'>
        <router-link to='/game-info'>
          游戏信息
        </router-link>
      </MenuItem>
      <MenuItem name='2-2'>
        <router-link to='/hundred-adjust'>
          百人调控
        </router-link>
      </MenuItem>
    </Submenu>
  </Menu>
</template>

<style lang='styl' scoped>
.menu {
  height: inherit;
}
</style>

<script lang='ts' src='./AppMenu.ts'></script>
