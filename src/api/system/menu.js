/**
 * 菜单列表
 *
 */

import request from '@/utils/request'

export function getPermissionList(parameter) {
  return request({
    url: '/menu',
    method: 'get',
    params: parameter
  })
}

export function store(parameter) {
  return request({
    url: '/menu',
    method: 'post',
    data: parameter
  })
}

export function read(id) {
  return request({
    url: '/menu/' + id,
    method: 'get'
  })
}

export function update(id, parameter) {
  return request({
    url: '/menu/' + id,
    method: 'put',
    data: parameter
  })
}

export function del(id) {
  return request({
    url: '/menu/' + id,
    method: 'delete'
  })
}
// 排序上下
export function sortUpdate(parameter) {
  return request({
    url: '/menu/sort',
    method: 'post',
    data: parameter
  })
}
// 操作列表
export function getFunctionList(parameter) {
  console.log(parameter)
  return request({
    url: '/menu/function/',
    method: 'get',
    params: parameter
  })
}
// 添加操作
export function functionAdd(parameter) {
  return request({
    url: '/menu/functionAdd',
    method: 'post',
    data: parameter
  })
}
// 更新操作
export function functionUpdate(id, parameter) {
  return request({
    url: '/menu/functionUpdate/' + id,
    method: 'post',
    data: parameter
  })
}
// 删除操作
export function functionDel(id) {
  return request({
    url: '/menu/functionDel',
    method: 'post',
    data: {id: id}
  })
}
export function actionGetRoleList() {
  return request({
    url: '/menu/actionGetRoleList',
    method: 'post'
  })
}

export function sortExchange(parameter) {
  return request({
    url: '/menu/sortExchange',
    method: 'post',
    data: parameter
  })
}
export function switchFunction(id) {
  return request({
    url: '/menu/switch/' + id,
    method: 'put'
  })
}
