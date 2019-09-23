<template  lang="pug">
  section.article_container
    header-article-section( v-if="article" :article="article" )
    .body_content
      main( v-if="article.body" v-html="toHtml(article.body)")
      info
    footer-section
    script(type='application/ld+json').
      {'@context':'https://schema.org',"@type":"Organization","name":"Easybill","legalName":"MAKEASY S.R.L.",
      "url":"https://www.easybill.pe","logo":"https://easybill.pe/_nuxt/img/9ed2535.svg",
      "foundingDate":"2017","founders":
      [{"@type":"Person","name":"Elef Abner Rosales Quispe"}],
      "address":{"@type":"PostalAddress","streetAddress":"Jiron Tarapaca 160","addressLocality":"Huanuco","addressRegion":"HUANUCO","postalCode":"10010",
      "addressCountry":"PERU"},"contactPoint":{"@type":"ContactPoint","contactType":"customer service","telephone":"[+51999017080","email":"teamakeasy@gmail.com"},
      "sameAs":["https://www.facebook.com/Easybill.pe/","https://www.youtube.com/channel/UCvz8-GgLr0z3Ty2cWffH_9w","https://www.instagram.com/easybill.pe/?hl=es-la"]}
    script(type='application/ld+json').
      {'@context':'https://schema.org',"@graph":[
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Pecios","url":"https://easybill.pe/?section=1"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Clientes","url":"https://easybill.pe/?section=2"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Blog","url":"https://easybill.pe/blog"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Ingresar","url":"https://app.easybill.pe"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Registrarte","url":"https://app.easybill.pe/registro"}]}

</template>

<script>
import HeaderArticleSection from '@/components/blog/HeaderArticle'
import FooterSection from '@/components/landing/Footer'
import Info from '@/components/Info'
import { firestore } from '~/plugins/firebase.js'
import marked from 'marked'

export default {
  components: { HeaderArticleSection, FooterSection, Info },
  data() {
    return {
      article: {}
    }
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      itemscope:'',
      itemtype:'http://schema.org/WebPage'
      },
      title: this.article.title + ' | Easybill',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content: this.article.description_google },
        { property: 'og:title', content: this.article.title + ' | Easybill' },
        { property: 'og:description', content: this.article.description_google },
        { property: 'og:image', content: this.article.cover },
        { property: 'og:url', content: `https://easybill.pe/blog/${this.article._id}/${this.article.slug}` },
        { property: 'og:type', content: 'product' },
        { property: 'fb:app_id', content: '1994748484137426' }
      ]
    }
  },
  async asyncData ({ params }) {
    const ref = firestore.collection('articles').where("_id", "==", parseInt(params.id))
    let snap
    try {
      snap = await ref.get()
    }
    catch(e) {console.error(e)}
    return {article: snap.docs[0].data()}
  },          
  methods: { 
    toHtml (body) {
      return marked(body)
    }
  }
}
</script>

<style lang="sass">
@import './assets/css/main'

.body_content
  display: grid
  grid-template-columns: 1fr 300px
  grid-gap: 20px
  justify-content: center
  width: 1065px
  margin: 0 auto
  main
    font-family: "c-book", sans-serif
    padding: 2rem 0
    color: #171B26
    line-height: 1.8
    font-size: 17px
    img
      width: 100%
      margin-bottom: 5px
    p, li
      line-height: 1.8
      font-size: 17px
    a
      color: #171B26
    h2, h3, h4, h5, h6, strong
      font-weight: normal
      font-family: "c-bold", sans-serif
      margin-top: 10px
      margin-bottom: 10px
      line-height: 1.2
      letter-spacing: -0.02rem
    strong
      display: block
    blockquote
      border-left: 2px solid $accent_color
      padding: 5px
      padding-left: 20px
      background-color: #F2F4F5
@media screen and (max-width: 1100px)
  .body_content
    grid-template-columns: 1fr
    width: 800px
@media screen and (max-width: 850px)
  .body_content
    width: 450px
    main
      padding: 1rem 0
@media screen and (max-width: 500px)
  .body_content
    padding: 0 20px
    box-sizing: border-box
    width: 100%
    main
      line-height: 1.7
      font-size: 15px
      p, li
        line-height: 1.7
        font-size: 15px
      h1 
        font-size: 22px
      h2
        font-size: 20px
      h3
        font-size: 18px
</style>