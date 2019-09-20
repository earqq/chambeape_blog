import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _71fef336 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _b751d88a = () => interopDefault(import('../pages/errores-factura-electronica/index.vue' /* webpackChunkName: "pages/errores-factura-electronica/index" */))
const _af9c9e68 = () => interopDefault(import('../pages/fidelizar/index.vue' /* webpackChunkName: "pages/fidelizar/index" */))
const _7bd2e4fa = () => interopDefault(import('../pages/politicas.vue' /* webpackChunkName: "pages/politicas" */))
const _677be4f4 = () => interopDefault(import('../pages/terminos.vue' /* webpackChunkName: "pages/terminos" */))
const _833e7d74 = () => interopDefault(import('../pages/tipo-cambio-sunat/index.vue' /* webpackChunkName: "pages/tipo-cambio-sunat/index" */))
const _60892ed6 = () => interopDefault(import('../pages/consulta/dni.vue' /* webpackChunkName: "pages/consulta/dni" */))
const _50bdcbb7 = () => interopDefault(import('../pages/consulta/ruc.vue' /* webpackChunkName: "pages/consulta/ruc" */))
const _110542b8 = () => interopDefault(import('../pages/blog/_id/_article.vue' /* webpackChunkName: "pages/blog/_id/_article" */))
const _508f285e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _71fef336,
      name: "blog"
    }, {
      path: "/errores-factura-electronica",
      component: _b751d88a,
      name: "errores-factura-electronica"
    }, {
      path: "/fidelizar",
      component: _af9c9e68,
      name: "fidelizar"
    }, {
      path: "/politicas",
      component: _7bd2e4fa,
      name: "politicas"
    }, {
      path: "/terminos",
      component: _677be4f4,
      name: "terminos"
    }, {
      path: "/tipo-cambio-sunat",
      component: _833e7d74,
      name: "tipo-cambio-sunat"
    }, {
      path: "/consulta/dni",
      component: _60892ed6,
      name: "consulta-dni"
    }, {
      path: "/consulta/ruc",
      component: _50bdcbb7,
      name: "consulta-ruc"
    }, {
      path: "/blog/:id/:article?",
      component: _110542b8,
      name: "blog-id-article"
    }, {
      path: "/",
      component: _508f285e,
      name: "index"
    }],

    fallback: false
  })
}
