import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, setIdToken, getIdToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  permissions: [], // 动态路由
  info: {},
  id_token: getIdToken(), //  sso使用
  btnPermissions: {} // 按钮权限
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    console.log(token)
    setToken(token)
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
    // 处理按钮权限
    if (permissions && permissions.length > 0) {
      const btnPermissions = {}
      permissions.forEach(permission => {
        if (permission['type'] == 2 && permission['permisson_name']) {
          // 按钮权限类型
          btnPermissions[permission['permisson_name']] = permission
        }
      })
      state.btnPermissions = btnPermissions
    }
  },
  SET_INFO: (state, info) => {
    state.info = info
  },
  SET_ID_TOKEN: (state, id_token) => {
    state.id_token = id_token
    setIdToken(id_token)
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ login_name: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        // setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('用户数据获取失败，请重新登录.')
          return
        }

        const { roles, name, avatar, introduction, permissions } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('获取用户角色信息失败！')
          return
        }
        commit('SET_PERMISSIONS', permissions)
        commit('SET_INFO', data)
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve) => {
      let _hostUrl = ((window.serverConfig && window.serverConfig.VUE_APP_SSO_URL) ? window.serverConfig.VUE_APP_SSO_URL : process.env.VUE_APP_SSO_URL)
      // 退出
      logout(state.token).then((res) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        // 添加跳转 sso退出
        if (state.id_token) {
          var redirect_uri = window.location.href
          window.location.href =_hostUrl + '/core/connect/endsession?post_logout_redirect_uri=' + redirect_uri + '&id_token_hint=' + state.id_token
        } else {
          router.push(`/login`)
        }
        resolve()
      }).catch((err) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        if (state.id_token) {
          var redirect_uri = window.location.href
          window.location.href = _hostUrl + '/core/connect/endsession?post_logout_redirect_uri=' + redirect_uri + '&id_token_hint=' + state.id_token
        } else{
          router.push(`/login`)
        }
      })
      
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_INFO', '')
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    // setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  },
  //   // 登录
  //   Login({commit}, userInfo) {
  //     return new Promise((resolve, reject) => {
  //         login(userInfo).then(response => {
  //             const result = response.data
  //             Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
  //             commit('SET_TOKEN', result.token)
  //             resolve()
  //         }).catch(error => {
  //             reject(error)
  //         })
  //     })
  // },

  // 获取用户信息
  GetInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const result = response.data
        if (result.roles.length > 0) {
          const roles = result.roles
          const permissions = result.permissions
          /** role.permissions = result.role.permissions
                 role.permissions.map(per => {
      if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
        const action = per.actionEntitySet.map(action => { return action.action })
        per.actionList = action
      }
    })
                 role.permissionList = role.permissions.map(permission => { return permission.permissionId }) */
          commit('SET_ROLES', roles)
          commit('SET_PERMISSIONS', permissions)
          commit('SET_INFO', result)
        } else {
          reject(new Error('getInfo: roles must be a non-null array !'))
        }
        commit('SET_NAME', { name: result.username, welcome: welcome() })
        commit('SET_AVATAR', result.avatar)

        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取首页未读消息
  waitCount({ commit, state }) {
    return new Promise((resolve, reject) => {
      waitCount().then(res => {
        commit('SET_WAIT_COUNTS', res.data || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
