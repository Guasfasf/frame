import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {token}
  })
}

export function getRoleList (params) {
  return request({
    url: '/auth/roleList',
    method: 'post',
    data: params
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function authInfo () {
  return request({
    url: '/auth/authInfo',
    method: 'post'
  })
}

// 角色权限 /modules/registe/roleList
export function roleList (params) {
  return request({
    url: '/registe/roleList',
    method: 'post',
    data: params
  })
}

export function roleDetail (params) {
  return request({
    url: '/registe/roleDetail',
    method: 'post',
    data: params
  })
}

export function roleUpdate (params) {
  return request({
    url: '/registe/roleUpdate',
    method: 'post',
    data: params
  })
}

export function roleDelete (params) {
  return request({
    url: '/registe/roleDelete',
    method: 'post',
    data: params
  })
}

export function roleSet (params) {
  return request({
    url: '/registe/roleSet',
    method: 'post',
    data: params
  })
}

export function roleAdd (params) {
  return request({
    url: '/registe/roleAdd',
    method: 'post',
    data: params
  })
}

// 短信验证码
export function getVerificationCode (params) {
  return request({
    url: '/auth/getVerificationCode',
    method: 'post',
    data: params
  })
}

// 修改密码 /modules/password/accountFindPassword
export function accountFindPassword (params) {
  return request({
    url: '/password/accountFindPassword',
    method: 'post',
    data: params
  })
}

// 获取图片验证码  /modules/password/getVerification
export function getVerification (params) {
  return request({
    url: '/password/getVerification',
    method: 'post',
    data: params
  })
}

// 验证图片验证码是否正确 /modules/password/accountVerify
export function accountVerify (params) {
  return request({
    url: '/password/accountVerify',
    method: 'post',
    data: params
  })
}

// 手机号登录
export function loginByMboile (params) {
  return request({
    url: '/auth/loginByMboile',
    method: 'post',
    data: params
  })
}

export function queryAuthList (params) {
  return request({
    url: '/registe/authlListByRoleId',
    method: 'post',
    data: params
  })
}
