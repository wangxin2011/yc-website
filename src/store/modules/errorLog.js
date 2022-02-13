import storage from '@/utils/localstorage'
const _key = "err-message"
const state = {
  logs: [],
  message: storage.read(_key) // 错误消息
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0)
  },
  SET_MESSAGE:(state, message) => {
    state.message = message
    storage.write(_key, message)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
