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
    SOCKET_login (state, payload) {
      state.rooms = payload
    },
    SOCKET_updateRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_allRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_roomDetail (state, payload) {
      state.activeRoom = payload
    },
    SOCKET_startGame (state) {
      state.activeRoom.status = true
    }
  },
  actions: {
  },
  modules: {
  }
})
