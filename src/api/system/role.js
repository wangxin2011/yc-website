/**
 * 角色管理模块
 *
 */

import request from '@/utils/request'

export function list(parameter) {
  return request({
    url: '/role',
    method: 'get',
    params: parameter
  })
}

export function store(parameter) {
  return request({
    url: '/role',
    method: 'post',
    data: parameter
  })
}

export function read(id) {
  return request({
    url: '/role/' + id,
    method: 'get'
  })
}

export function update(id, parameter) {
  return request({
    url: '/role/' + id,
    method: 'put',
    data: parameter
  })
}

export function del(id) {
  return request({
    url: '/role/' + id,
    method: 'delete'
  })
}

export function get_all_menu_data() {
  return request({
    url: '/getAllMenuData',
    method: 'get'
  })
}

export function get_assigned_menu_data(id) {
  return request({
    url: '/role/getAssignedMenuData/'+id,
    method: 'get'
  })
}

export function save_assign_menu(id, parameter) {
  return request({
    url: '/role/saveAssignMenu?id=' + id,
    method: 'post',
    data: parameter
  })
}

export function getRolesByUserId() {
  return request({
    url: '/user/getRolesByUserId',
    method: 'get'
  })
}

export function swtichStatus(id) {
  return request({
    url: '/role/swtichStatus/' + id,
    method: 'post'
  })
}
export function RoleList() {
  return request({
    url: 'RoleList',
    method: 'get'
  })
}
export function getUserRole(parameter) {
  return request({
    url: 'getUserRole',
    method: 'post',
    data: parameter
  })
}
