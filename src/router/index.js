import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Room from '../components/Room'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import('../views/Lobby.vue'),
    children: [
      {
        path: '/cek',
        component: Room
      },
    ]
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: () => import('../views/Game.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
