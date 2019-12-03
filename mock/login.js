/**
 * @file 登录
 * @description 数据述描
 */

const Mock = require('mockjs')
const Random = Mock.Random;

const userMap = (name) => ({
  id: 1,
  roles: 'admin',
  token: 'sfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdf',
  desc: '超级管理员',
  username: name,
  email: Random.email(),
  truename: Random.cname(),
  created: Random.date() + ' ' + Random.time(),
  ip: Random.ip(),
  'sex|1':['男', '女'],
  'balance|1-1000000.1-2': 1
})

module.exports =  {
  login: config => {
    const { username } = config.query
    return userMap(username)
  },
  logout: () => 'success'
}
