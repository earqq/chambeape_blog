
// const { firestore } = require('./plugins/firebase.js')
const ampify = require('./plugins/ampify.js')
module.exports = {
  server: {
    port: 3002, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  mode: "universal",
  generate: {
    html: {
      minify: {
        collapseWhitespace: false
      }
    }
  },
  hooks: {
    // This hook is called before saving the html to flat file
    'generate:page': (page) => {
      if (/^\/amp\//gi.test(page.route)) {
        page.html = ampify(page.html)
      }
    },
    // This hook is called before serving the html to the browser
    'render:route': (url, page, { req, res }) => {
      if (/^\/amp\//gi.test(url)) {
        page.html = ampify(page.html)
      }
    }
  },
  serverMiddleware: ['~/api/index.js'],
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "/font.css"
      },
      {
        rel: "stylesheet",
        href: "/fonts.css"
      }
    ],
    script: [
      { src: "https://chimpstatic.com/mcjs-connected/js/users/1b0b360fc9f0201e5378fadef/9919899c57d8e2198d239afbd.js" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: " #17de8b" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  {src:"~/plugins/firebase.js",ssr:false},
    {src:"~/plugins/vuefire.js",ssr:false},
    {src:"~/plugins/vue-moment.js",ssr:false},
    {src: "~/plugins/vue-social-sharing.js",ssr:false},
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/hotjar.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-123783343-3'
    // }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    '@nuxtjs/proxy'
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-123783343-3'
    // }]

  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy:true
  },
  
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      });
    },
    vendor: ['vue-social-sharing'],
  },
};
