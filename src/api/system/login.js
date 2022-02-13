
import request from '@/utils/request'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return request({
    url: '/login',
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha (parameter) {
  return request({
    url: '/account/sms',
    method: 'post',
    data: parameter
  })
}
export function getInfo () {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

export function getCurrentUserNav (token) {
  return request({
    url: '/user/nav',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: '/common/logout',
    method: 'post'
  })
}

export function beforeLogin() {
    return request({
        url: '/before-login',
        method: 'get'
    })
}
export function accessLogin(parameter) {
    return request({
        url: '/accessLogin',
        method: 'post',
        data: parameter
    })
}

