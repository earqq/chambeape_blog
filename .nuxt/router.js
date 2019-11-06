import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _c293dc34 = () => interopDefault(import('../pages/errores-factura-electronica/index.vue' /* webpackChunkName: "pages/errores-factura-electronica/index" */))
const _40d59cae = () => interopDefault(import('../pages/politicas.vue' /* webpackChunkName: "pages/politicas" */))
const _2dc2260a = () => interopDefault(import('../pages/terminos.vue' /* webpackChunkName: "pages/terminos" */))
const _0d6679a1 = () => interopDefault(import('../pages/validez-factura-electronica/index.vue' /* webpackChunkName: "pages/validez-factura-electronica/index" */))
const _be9f9d86 = () => interopDefault(import('../pages/calculadora/detracciones/index.vue' /* webpackChunkName: "pages/calculadora/detracciones/index" */))
const _1238d7e5 = () => interopDefault(import('../pages/calculadora/igv/index.vue' /* webpackChunkName: "pages/calculadora/igv/index" */))
const _0761686a = () => interopDefault(import('../pages/consulta/dni.vue' /* webpackChunkName: "pages/consulta/dni" */))
const _26f82ea8 = () => interopDefault(import('../pages/consulta/ruc.vue' /* webpackChunkName: "pages/consulta/ruc" */))
const _261bc87c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _65b8c13c = () => interopDefault(import('../pages/_slug/_article.vue' /* webpackChunkName: "pages/_slug/_article" */))
const _64d3c387 = () => interopDefault(import('../pages/_slug/_slug/_article.vue' /* webpackChunkName: "pages/_slug/_slug/_article" */))

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
      path: "/errores-factura-electronica",
      component: _c293dc34,
      name: "errores-factura-electronica"
    }, {
      path: "/politicas",
      component: _40d59cae,
      name: "politicas"
    }, {
      path: "/terminos",
      component: _2dc2260a,
      name: "terminos"
    }, {
      path: "/validez-factura-electronica",
      component: _0d6679a1,
      name: "validez-factura-electronica"
    }, {
      path: "/calculadora/detracciones",
      component: _be9f9d86,
      name: "calculadora-detracciones"
    }, {
      path: "/calculadora/igv",
      component: _1238d7e5,
      name: "calculadora-igv"
    }, {
      path: "/consulta/dni",
      component: _0761686a,
      name: "consulta-dni"
    }, {
      path: "/consulta/ruc",
      component: _26f82ea8,
      name: "consulta-ruc"
    }, {
      path: "/",
      component: _261bc87c,
      name: "index"
    }, {
      path: "/:slug/:article?",
      component: _65b8c13c,
      name: "slug-article"
    }, {
      path: "/:slug/:slug?/:article?",
      component: _64d3c387,
      name: "slug-slug-article"
    }],

    fallback: false
  })
}
