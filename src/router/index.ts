import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
    meta: {
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/myCash',
        name: 'MyCash',
        component: () => import('../views/MyCash.vue'),
        meta: {
          keepAlive: false
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
