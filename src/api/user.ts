// src/api/user.ts
import request from '@/utils/request'

// 检测手机号是否被注册过
export function doCheckPhone(params: { tel: string }) {
  return request.post('/user/docheckphone', params)
}

// 发送短信验证码
export function doSendMsgCode(params: { tel: string }) {
  return request.post('/user/dosendmsgcode', params)
}

// 验证验证码
export function doCheckCode(params: { tel: string, telcode: string }) {
  return request.post('/user/docheckcode', params)
}

// 设置密码完成注册
export function doFinishRegister(params: { tel: string, password: string }) {
  return request.post('/user/dofinishregister', params)
}

// 登录
export function doLogin(params: { loginname: string, password: string }) {
  return request.post('/user/login', params)
}

// 获取用户信息
export function getUserInfo(params: { userid: string }) {
  return request.get('/user/info', { params })
}

// 更新用户名
export function updateUsername(params: { userid: string, username: string }) {
  return request.get('/user/bindusername', { params })
}

// 更新密码
export function updatePassword(params: { userid: string, oldpassword: string, newpassword: string }) {
  return request.get('/user/updatePassword', { params })
}

// 获取订单
export function getAllOrderData(params: { userid: string }) {
  return request.get('/user/orderlist', { params })
}