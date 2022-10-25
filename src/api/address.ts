import request from '@/utils/request'
export interface IAddress {
  userid: string
  name: string
  tel: string
  province: string
  city: string
  county: string
  addressDetail: string
  isDefault: boolean
}
export function addAddRessData(params: IAddress) {
  return request.post('/address/add', params)
}
export function getAddressList(params: { userid: string }) {
  return request.get('/address/list', { params })
}