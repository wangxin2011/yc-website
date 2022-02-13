// 机构相关Api
import request from '@/utils/request'

// 创建机构
export function createJigou(data) {
  return request({
    url: '/createJigou',
    method: 'post',
    data
  })
}
// 获取机构列表
export function getJigouList(data) {
  return request({
    url: '/getJigouList',
    method: 'get',
    params: data
  })
}
// 导入机构 excel
export function jigouDaoru(data) {
  return request({
    url: '/jigoudaoru',
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'},
    data
  })
}
// 删除机构信息
export function deleteJigou(data){
  return request({
    url: '/deleteJigou',
    method: 'post',
    data
  })
}
// 创建项目
export function createJigouXiangmu(data) {
  return request({
    url: '/createJigouXiangmu',
    method: 'post',
    data
  })
}
// 获取项目列表
export function getJigouxiangmuList(data) {
  return request({
    url: '/getJigouXiangmuList',
    method: 'get',
    params: data
  })
}
// 删除项目信息
export function deleteXiangmu(data){
  return request({
    url: '/deleteXiangmu',
    method: 'post',
    data
  })
}
// 获取抽取结果
export function extractJigou(data){
  return request({
    url: '/extractJigou',
    method: 'post',
    data
  })
}
// 确认抽取结果
export function extractJigouAscertain(data){
  return request({
    url: '/extractJigouAscertain',
    method: 'post',
    data
  })
}