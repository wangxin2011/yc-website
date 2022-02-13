import request from '@/utils/request'
export function getOrganizeList(param) {
  return request({
    url: '/organize/getList',
    method: 'get',
    params: param
  })
}
export function syncDepart(param) {
  return request({
    url: '/organize/syncDepartment',
    method: 'post',
    data: param
  })
}
export function syncUser(param) {
  return request({
    url: '/organize/syncUser',
    method: 'post',
    data: param
  })
}

export function departList(param) {
  return request({
    url: '/organize/getDepart',
    method: 'get',
    params: param
  })
}

export function getDepart(param) {
  return request({
    url: '/organize/getAllDepartment',
    method: 'get',
    params: param
  })
}

export function userList(param) {
  return request({
    url: '/organize/getUser',
    method: 'get',
    params: param
  })
}
