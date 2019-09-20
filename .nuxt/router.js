import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _9244b8c0 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _30978c11 = () => interopDefault(import('../pages/errores-factura-electronica/index.vue' /* webpackChunkName: "pages/errores-factura-electronica/index" */))
const _703a9abc = () => interopDefault(import('../pages/fidelizar/index.vue' /* webpackChunkName: "pages/fidelizar/index" */))
const _9869b04e = () => interopDefault(import('../pages/politicas.vue' /* webpackChunkName: "pages/politicas" */))
const _99f45f20 = () => interopDefault(import('../pages/terminos.vue' /* webpackChunkName: "pages/terminos" */))
const _5a94e5c8 = () => interopDefault(import('../pages/tipo-cambio-sunat/index.vue' /* webpackChunkName: "pages/tipo-cambio-sunat/index" */))
const _3da5def2 = () => interopDefault(import('../pages/calculadora/detracciones/index.vue' /* webpackChunkName: "pages/calculadora/detracciones/index" */))
const _1b900ae0 = () => interopDefault(import('../pages/calculadora/igv/index.vue' /* webpackChunkName: "pages/calculadora/igv/index" */))
const _2f052680 = () => interopDefault(import('../pages/consulta/dni.vue' /* webpackChunkName: "pages/consulta/dni" */))
const _4e9becbe = () => interopDefault(import('../pages/consulta/ruc.vue' /* webpackChunkName: "pages/consulta/ruc" */))
const _087d270e = () => interopDefault(import('../pages/blog/_id/_article.vue' /* webpackChunkName: "pages/blog/_id/_article" */))
const _1f53a127 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _9244b8c0,
      name: "blog"
    }, {
      path: "/errores-factura-electronica",
      component: _30978c11,
      name: "errores-factura-electronica"
    }, {
      path: "/fidelizar",
      component: _703a9abc,
      name: "fidelizar"
    }, {
      path: "/politicas",
      component: _9869b04e,
      name: "politicas"
    }, {
      path: "/terminos",
      component: _99f45f20,
      name: "terminos"
    }, {
      path: "/tipo-cambio-sunat",
      component: _5a94e5c8,
      name: "tipo-cambio-sunat"
    }, {
      path: "/calculadora/detracciones",
      component: _3da5def2,
      name: "calculadora-detracciones"
    }, {
      path: "/calculadora/igv",
      component: _1b900ae0,
      name: "calculadora-igv"
    }, {
      path: "/consulta/dni",
      component: _2f052680,
      name: "consulta-dni"
    }, {
      path: "/consulta/ruc",
      component: _4e9becbe,
      name: "consulta-ruc"
    }, {
      path: "/blog/:id/:article?",
      component: _087d270e,
      name: "blog-id-article"
    }, {
      path: "/",
      component: _1f53a127,
      name: "index"
    }],

    fallback: false
  })
}
