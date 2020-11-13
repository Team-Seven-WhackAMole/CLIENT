import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    onlineUser: [],
    rooms: [],
    activeRoom: '',
    winner: ''
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
    },
    SOCKET_gameEnd (state, payload) {
      state.winner = payload
      router.push({ path: '/result' })
    }
  },
  actions: {
  },
  modules: {
  }
})
