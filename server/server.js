let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')
let app = express()
app.use(session({
  resave: true,
  secret: 'gu',
  saveUninitialized: true
}))
let users = []
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080') // 跨域设置, 只允许8080访问
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')// 服务允许客户端发的方法
  res.header('Access-Control-Allow-Headers', 'Content-Type,  Accept')// 服务器允许的请求头
  res.header('Access-Control-Allow-Credentials', 'true')// 允许客户端把cookie发过来
  if (req.method === 'OPTIONS') { // 请求方法是options，那么意味着客户端只要响应头，直接结束响应即可
    res.end()
  } else {
    next()
  }
})

let sliders = require('./mock/sliders')
app.get('/api/sliders', function (req, res) {
  res.json(sliders)
})

app.post('/api/reg', function (req, res) {
  let user = req.body
  let oldUser = users.find(item => item.username === user.username)
  if (oldUser) {
    // 两种异常  1.服务器异常   2. 业务异常
    res.json({code: 1, error: '用户名重复'})
  } else {
    users.push(user)
    res.json({code: 0, success: '注册成功'})
  }
})
app.post('/api/login', function (req, res) {
  let user = req.body
  console.log(user)
  let oldUser = users.find(item => item.username === user.username && item.password === user.password)
  console.log(oldUser)
  if (oldUser) {
    req.session.user = oldUser
    res.json({code: 0, success: '登陆成功', user})
  } else {
    res.json({code: 1, error: '用户名或密码错误'})
  }
})
app.get('/api/logout', function (req, res) {
  req.session.user = null
  res.json({code: 0, success: '退出成功'})
})
app.get('/api/validate', function (req, res) { // 验证用户是否登录
  if (req.session.user) {
    res.json({code: 0, user: req.session.user})
  } else {
    res.json({code: 1, error: '未登录'})
  }
})
app.listen(3000)
