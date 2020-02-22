import Vue from 'vue'
import Router from 'vue-router'

import Admin from './pages/admin/admin'
import Coach from './pages/admin/coach'
import Login from './pages/login'
import Register from './pages/register'
import User from './pages/user'
import Users from './pages/admin/users'
import Home from './pages/index'
import Price from './pages/price'
import CreateUser from './pages/admin/createUser'
import CreateCoach from './pages/admin/createCoach'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'createCoach',
        path: '/admin/createCoach',
        component: CreateCoach
      },
      {
        name: 'createUser',
        path: '/admin/createUser',
        component: CreateUser
      },
      {
        name: 'admin',
        path: '/admin',
        component: Admin
      },
      {
        name: 'price',
        path: '/price',
        component: Price
      },
      {
        name: 'coach',
        path: '/admin/coach',
        component: Coach
      },
      {
        name: 'login',
        path: '/login',
        component: Login
      },
      {
        name: 'register',
        path: '/register',
        component: Register
      },
      {
        name: 'user',
        path: '/user/',
        component: User
      },
      {
        name: 'users',
        path: '/admin/users',
        component: Users
      },
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  })
}

