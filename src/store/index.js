import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onlineUser: [],
    rooms: [],
    activeRoom: ''
  },
  mutations: {
    SOCKET_NEW_USER(state, payload) {
      console.log(payload, '<<<< ini data payload');
      state.onlineUser = payload
    },
    SOCKET_updateRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_allRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_roomDetail (state, payload) {
      state.activeRoom = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
