/**
 * design
 *
 * @author Zhong Weiwei
 * @date 2020/9/24
 */

'use strict';


import request from '@/utils/request'

/**
 * 保存流程
 * @param parameter
 * @returns {requestPromise}
 */
export function save (parameter) {
  return request({
    url: parameter.procedure_id ? '/procedure/update' : '/procedure/create',
    method: 'post',
    data: parameter
  })
}

/**
 *  加载流程列表
 * @param parameter
 * @returns {requestPromise}
 */
export function list (parameter) {
  return request({
    url: '/procedure/list',
    method: 'get',
    params: parameter
  })
}

/**
 *修改/新增分组
 * @param parameter
 * @returns {requestPromise}
 */
export function saveCategory (id,parameter) {
  return request({
    url: id ? 'procedure/updateCategory' : 'procedure/saveCategory',
    method: 'post',
    params: {id:id},
    data: parameter,
  })
}

/**
 *  删除分组
 * @param parameter
 * @returns {requestPromise}
 */
export function del (parameter) {
  return request({
    url: '/procedure/delCategory',
    method: 'get',
    params: parameter
  })
}

/**
 *  删除
 * @param parameter
 * @returns {requestPromise}
 */
export function moveData (parameter) {
  return request({
    url: 'procedure/move',
    method: 'post',
    data: parameter,
  })
}

/**
 *  切换状态
 * @param parameter
 * @returns {requestPromise}
 */
export function changeSwitch (parameter) {
  return request({
    url: 'procedure/changeSwitch',
    method: 'post',
    data: parameter,
  })
}

/**
 * 获取详情
 * @param parameter
 * @returns {requestPromise}
 */
export function getInfo (parameter) {
  return request({
    url: '/procedure/get',
    method: 'get',
    params: parameter
  })
}

/**
 *  排序
 * @param parameter
 * @returns {requestPromise}
 */
export function sort (parameter) {
    return request({
        url: '/procedure/sort',
        method: 'post',
        data: parameter
    })
}

/**
 * 分组排序
 * @param parameter
 * @returns {requestPromise}
 */
export function groupSort (parameter) {
    return request({
        url: '/design/sort',
        method: 'post',
        data: parameter
    })
}

/**
 *  获取使用范围
 * @param parameter
 * @returns {requestPromise}
 */
export function getUserIndepart (parameter) {
    return request({
        url: '/getUserIndepart',
        method: 'get',
        params: parameter
    })
}

/**
 *  保存流程设计
 * @param parameter
 * @returns {requestPromise}
 */
export function saveProcess (parameter) {
    return request({
        url: '/procedure/saveProcess',
        method: 'post',
        data: parameter
    })
}

