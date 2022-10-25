// src/api/home.ts
// 首页相关数据请求的接口的封装
import request from '@/utils/request' // request其实就可以看作式自定义之后的axois

interface IPageParams {
  limitNum?: number
  count?: number
}

export function getBannerListData() {
  return request.get('/banner/list')
}

export function getSeckillListData() {
  return request.get('/pro/seckilllist')
}

export function getProListData(params?: IPageParams) {
  return request.get('/pro/list', { params })
}