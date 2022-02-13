import Cookies from 'js-cookie'

const TokenKey = 'Admins-Token'
const IdTokenKey = 'Admins-IdToken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getIdToken() {
  return Cookies.get(IdTokenKey)
}
export function setIdToken(idtoken) {
  return Cookies.set(IdTokenKey, idtoken)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
