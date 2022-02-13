/**
 * 用户管理模块
 *
 */

import request from '@/utils/request'

export function getUserList(parameter) {
  return request({
    url: '/user',
    method: 'get',
    params: parameter
  })
}

export function store(parameter) {
  return request({
    url: '/user',
    method: 'post',
    data: parameter
  })
}

export function read(id) {
  return request({
    url: '/user/' + id,
    method: 'get'
  })
}

export function update(id, parameter) {
  return request({
    url: '/user/' + id,
    method: 'put',
    data: parameter
  })
}

export function del(id) {
  return request({
    url: '/user/' + id,
    method: 'delete'
  })
}

export function swtichStatus(id) {
  return request({
    url: '/user/switch/status/' + id,
    method: 'put'
  })
}

export function updatePass(id, parameter) {
  return request({
    url: '/user/updatePassword/' + id,
    method: 'post',
    data: parameter
  })
}

export function modifyPassword(parameter) {
  return request({
    url: '/basic/modifyPassword',
    method: 'post',
    data: parameter
  })
}

// 个人中心修改
export function updateProfile(parameter) {
  return request({
    url: '/basic/updateProfile',
    method: 'post',
    data: parameter
  })
}

// 获取个人中心数据
export function getProfile(parameter) {
  return request({
    url: '/basic/getProfile',
    method: 'get',
    data: parameter
  })
}
// 获取成员信息关联角色列表
export function getUserRoleList(parameter) {
  return request({
    url: '/UserRoleList',
    method: 'get',
    params: parameter
  })
}
// 移除人员角色关联
export function remove(parameter) {
  return request({
    url: '/removeRole',
    method: 'get',
    params: parameter
  })
}
// 添加人员角色关联
export function addUserRole(parameter) {
  return request({
    url: '/addUserRole',
    method: 'post',
    params: parameter
  })
}
// 更新人员角色关联
export function updateUserRole(parameter) {
  return request({
    url: '/updateUserRole',
    method: 'post',
    params: parameter
  })
}

