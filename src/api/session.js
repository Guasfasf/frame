import {get, post} from './index'
// 注册
export function reg (user) {
  return post('/api/reg', user)
}

// 登录
export function login (user) {
  return post('/api/login', user)
}

// 退出
export function logout () {
  return get('/api/logout')
}

// 检测用户
export function validate () {
  return get('/api/validate')
}

// 轮播图
export function getSliders () {
  return get('/api/sliders')
}
