import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onlineUser: []
  },
  mutations: {
    SOCKET_NEW_USER(state, payload) {
      console.log(payload, '<<<< ini data payload');
      state.onlineUser = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
