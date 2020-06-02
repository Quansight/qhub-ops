import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _552586e0 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _5be8cc25 = () => interopDefault(import('../pages/deploy.vue' /* webpackChunkName: "pages/deploy" */))
const _a06cf60e = () => interopDefault(import('../pages/docs.vue' /* webpackChunkName: "pages/docs" */))
const _48908a64 = () => interopDefault(import('../pages/navbar.vue' /* webpackChunkName: "pages/navbar" */))
const _fc48ccfa = () => interopDefault(import('../pages/stepper.vue' /* webpackChunkName: "pages/stepper" */))
const _305edcf8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _552586e0,
    name: "blog"
  }, {
    path: "/deploy",
    component: _5be8cc25,
    name: "deploy"
  }, {
    path: "/docs",
    component: _a06cf60e,
    name: "docs"
  }, {
    path: "/navbar",
    component: _48908a64,
    name: "navbar"
  }, {
    path: "/stepper",
    component: _fc48ccfa,
    name: "stepper"
  }, {
    path: "/",
    component: _305edcf8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
