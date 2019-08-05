import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _acf3533e = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _098bca35 = () => interopDefault(import('..\\pages\\politicas.vue' /* webpackChunkName: "pages_politicas" */))
const _73b97294 = () => interopDefault(import('..\\pages\\terminos.vue' /* webpackChunkName: "pages_terminos" */))
const _5886fc7b = () => interopDefault(import('..\\pages\\consulta\\dni.vue' /* webpackChunkName: "pages_consulta_dni" */))
const _48bb995c = () => interopDefault(import('..\\pages\\consulta\\ruc.vue' /* webpackChunkName: "pages_consulta_ruc" */))
const _3cdb6f80 = () => interopDefault(import('..\\pages\\blog\\_id\\_article.vue' /* webpackChunkName: "pages_blog__id__article" */))
const _2f9bd183 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/blog",
      component: _acf3533e,
      name: "blog"
    }, {
      path: "/politicas",
      component: _098bca35,
      name: "politicas"
    }, {
      path: "/terminos",
      component: _73b97294,
      name: "terminos"
    }, {
      path: "/consulta/dni",
      component: _5886fc7b,
      name: "consulta-dni"
    }, {
      path: "/consulta/ruc",
      component: _48bb995c,
      name: "consulta-ruc"
    }, {
      path: "/blog/:id/:article?",
      component: _3cdb6f80,
      name: "blog-id-article"
    }, {
      path: "/",
      component: _2f9bd183,
      name: "index"
    }],

    fallback: false
  })
}
