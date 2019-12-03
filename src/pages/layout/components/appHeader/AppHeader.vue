<template>
  <Header>
    <Row class='header-menu'>
      <i-Col class='logo'>
        <a href='/'>后台管理</a>
      </i-Col>
      <Col class='header-right' />
      <Menu mode='horizontal' theme='dark' class='header-menu'>
        <MenuItem name='1'>
          <a class='setting' @click='onClickSetting'>
            <Icon type='ios-settings-outline' size='22' />设置
          </a>
        </MenuItem>
        <MenuItem name='2'>
          <Icon type='ios-expand' title='全屏' size='22' />
          <!-- <Icon type="ios-contract" title="退出全屏" size="24" /> -->
        </MenuItem>
      </Menu>
      </Col>
    </Row>
  </Header>
</template>

<style lang='scss' scoped>
.ivu-layout-header {
  padding: 0 20px;
}

.header-menu {
  display: flex;
}

.logo {
  flex: 1;
}

.header-right {
  align-items: center;
  text-align: right;
}

.header-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo a {
  color: white;
  font-size: 22px;
  text-decoration: none;
}

.setting {
  color: white;
}
</style>

<script lang='ts' src='./AppHeader.ts'></script>
