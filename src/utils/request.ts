// src/utils/request.ts
// 1.引入axios
import axios from 'axios'

// 2.项目环境
// 生产环境 process.env.NODE_ENV === 'production'  cnpm run build
// 测试环境 ？
// 开发环境 process.env.NODE_ENV === 'devlopment   cnpm run start
const isDev = process.env.NODE_ENV === 'development'

// 3.给axios添加默认选项
// 设置跨域是否需要携带凭证
axios.defaults.withCredentials = false
// axios.defaults.timeout = 6000 // 6秒超时时间
// axios.defaults.baseURL = isDev ? 'http://121.89.205.189:3001/api' : 'http://121.89.205.189:3001/api'

// 4.自定义axios
const ins = axios.create({
  baseURL: isDev ? 'http://121.89.205.189:3001/api' : 'http://121.89.205.189:3001/api',
  timeout: 6000
})


// 5.设置拦截器
// 请求的拦截器 所有的请求在开始之前先执行请求拦截器，再执行自己的请求
ins.interceptors.request.use((config) => {
  // 设置请求的loading显示 --- 使用组件不必要  ----  js模块显示
  // 设置token，一般token传递给后端通过 请求头传递 config.headers.token = ''
  // console.log(config.url);

  if (config.url === '/pro/details') {
    alert(1)
  }

  return config
}, (err) => {

  return Promise.reject(err)
})

// 响应拦截器 所有的接口返回值先执行响应拦截器，再返回自己的响应的数据
ins.interceptors.response.use((response) => {
  // 关闭loading动画  --- 使用组件不必要 ----  js模块隐藏
  // 验证token，如果验证通过，返回数，如果验证不通过，直接跳转到登录页面
  return response
}, (err) => {
  Promise.reject(err)
  window.location = '/NotFind' as unknown as Location;
})

// 6.暴露自定义axios
export default ins