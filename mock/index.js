const express = require('express')
const Mock = require('mockjs')
const bodyParser = require('body-parser')


const loginAPI = require('./login')

const app = express()
// set port
const port = '3333'

process.env.mock_port = port

app.use(bodyParser.json())

// cors
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  // request header config
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type")
  next()
})

// no cache
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Pragma', 'no-cache')
  res.header('Expires', '-1')
  next()
})

// 登入
app.post('/fuc/login/step1', function (req, res) {
  res.json(Mock.mock(loginAPI.login(req)))
})

// 登出
app.post('/login/logout', function (req, res) {
  res.json(Mock.mock(loginAPI.logout(req)))
})

app.listen(port, () => {
  console.log('Mock server started: ' + port)
})
