import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onlineUser: []
  },
  mutations: {
    SOCKET_newUser (state, payload) {
      state.onlineUser = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
