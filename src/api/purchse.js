import request from '@/utils/request'

export function sendIstartList(data) {
  // 我发起的 - 采购单管理/采购单拟稿
  return request({
    url: '/getSendList',
    method: 'get',
    params: data
  })
}

export function sendPendingList(data) {
  // 我发起的 - 审核中
  return request({
    url: '/sendPending',
    method: 'get',
    params: data
  })
}

export function delelteOrder(data) {
  return request({
    url: '/sendDelete',
    method: 'post',
    data: data
  })
}

export function sendCreate(data) {
  return request({
    url: '/sendCreate',
    method: 'post',
    data
  })
}

export function sendDetail(data) {
  return request({
    url: '/sendDetail',
    method: 'get',
    params: data
  })
}
// 审核接口
export function sendAudit(data){
  return request({
    url: '/sendAudit',
    method: 'post',
    data
  })
}

// 导出年度excel
export function sendExcel(data){
  return request({
    url: '/sendExcel',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}

//导出自己采购单列表
export function sendExcelSelf(data){
  return request({
    url: '/sendExcelAuditSelf',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}

//导出自己审核的列表
export function sendExcelAuditSelf(data){
  return request({
    url: '/sendExcelAuditSelf',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}
