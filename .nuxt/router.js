import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _69bc6d2a = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _d017b068 = () => interopDefault(import('../pages/estados-para-whatsapp/index.vue' /* webpackChunkName: "pages/estados-para-whatsapp/index" */))
const _1aa4e983 = () => interopDefault(import('../pages/frases-de-amor/index.vue' /* webpackChunkName: "pages/frases-de-amor/index" */))
const _aee95410 = () => interopDefault(import('../pages/imagenes-de-amor/index.vue' /* webpackChunkName: "pages/imagenes-de-amor/index" */))
const _40d59cae = () => interopDefault(import('../pages/politicas.vue' /* webpackChunkName: "pages/politicas" */))
const _2dc2260a = () => interopDefault(import('../pages/terminos.vue' /* webpackChunkName: "pages/terminos" */))
const _468cb281 = () => interopDefault(import('../pages/amp/estados-para-whatsapp/index.vue' /* webpackChunkName: "pages/amp/estados-para-whatsapp/index" */))
const _7f6e3b53 = () => interopDefault(import('../pages/blog/_slug/_article.vue' /* webpackChunkName: "pages/blog/_slug/_article" */))
const _261bc87c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _69bc6d2a,
      name: "blog"
    }, {
      path: "/estados-para-whatsapp",
      component: _d017b068,
      name: "estados-para-whatsapp"
    }, {
      path: "/frases-de-amor",
      component: _1aa4e983,
      name: "frases-de-amor"
    }, {
      path: "/imagenes-de-amor",
      component: _aee95410,
      name: "imagenes-de-amor"
    }, {
      path: "/politicas",
      component: _40d59cae,
      name: "politicas"
    }, {
      path: "/terminos",
      component: _2dc2260a,
      name: "terminos"
    }, {
      path: "/amp/estados-para-whatsapp",
      component: _468cb281,
      name: "amp-estados-para-whatsapp"
    }, {
      path: "/blog/:slug/:article?",
      component: _7f6e3b53,
      name: "blog-slug-article"
    }, {
      path: "/",
      component: _261bc87c,
      name: "index"
    }],

    fallback: false
  })
}
