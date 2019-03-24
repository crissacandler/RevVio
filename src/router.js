

import Login from './components/Login'
import Citizen from './components/Citizen'
import Landing from './components/Landing'
import Status from './components/Status'
import Queue from './components/Queue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      { path: '/', name:'landing',component: Landing },
      { path: '/login', name:'login', component: Login },   
      { path: '/status', name:'status', component: Status },
      { path: '/citizen', name:'citizen', component: Citizen},
      { path: '/queue', name:'queue', component: Queue}
    ]
  })