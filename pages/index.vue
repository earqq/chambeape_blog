<template lang="pug">
  section.main_blog
    header-section( :last_article="last_article" )
    list-articles-section( :articles="articles" )
    footer-section
    script(v-html='jsonld' type='application/ld+json')
</template>

<script>
import HeaderSection from '@/components/blog/Header'
import ListArticlesSection from '@/components/blog/ListArticles'
import FooterSection from '@/components/landing/Footer'
import { firestore } from '~/plugins/firebase.js'

export default {
  components: {
    HeaderSection,
    ListArticlesSection,
    FooterSection
  },
  data() {
    const jsonld={       
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"WebSite",
            "@id":"https://easyjobs.site/#website",
            "url":"https://easyjobs.site/",
            "name":"Easyjobs",
            "potentialAction":{
              "@type":"SearchAction",
              "target":"https://easyjobs.site/?s={search_term_string}",
              "query-input":"required name=search_term_string"
            }
          },
          {
            "@type":"WebPage",
            "@id":"https://easyjobs.site/blog/#webpage",
            "url":"https://easyjobs.site/blog",
            "inLanguage":"es-PE",
            "name":"Blog de Easyjobs | Temas relacionados a herramientas para whatsapp, instagram y facebook",
            "isPartOf":{
              "@id":"https://easyjobs.site/#website"
            },
            "datePublished":"2019-01-01T20:12:54+00:00",
            "dateModified":"2019-09-23T09:00:09+00:00",
            "description":"Un blog muy didactico y de facil lectura, tratamos temas relacionados a herramientas para whatsapp, instagram y facebook."
          }
        ]
    }
    return {
      jsonld,
      articles: [],
      last_article: {}
    }
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      },
      link:[
        {
          rel:'canonical',href:'https://easyjobs.site', 
        }
      ],
      title: 'Blog de Easyjobs',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content:'Blog de herramientas de whatsapp, facebook e instagram | Easyjobs' },
        { property: 'og:title', content: 'Blog de easyjobs para herramientas de whatsapp facebook e instagram.' },
        { property: 'og:description', content: 'Descubre nuestra innovadora solución a facturación electrónica. Ventas rápidas, reportes kardex, facturas, boletas, guías de remisión y mucho más. ' },        
        { property: 'og:url', content: 'https://easyjobs.site' },
        { property: 'og:type', content: 'product' },
        { property: 'fb:app_id', content: '1994748484137426' }
      ]
    }
  },
  async asyncData ({ params }) {
    const ref = firestore.collection('articles').orderBy("created_at", "desc")
    let snap
    try {
      snap = await ref.get()
    }
    catch(e) {console.error(e)}
    let result = []
    snap.docs.map(s => result.push(s.data()))
    return {articles: result, last_article: snap.docs[0].data()}
  }
}
</script>

<style lang="sass" scoped>
@import './assets/css/main'
section.main_blog
  background-color: #f2f4f5
aside.card_register
  height: fit-content
  border-radius: 2px
  background-color: $primary_color
  overflow: hidden
  width: 1065px
  margin: 0 auto
  display: flex
  align-items: center
  margin-bottom: 2rem
  .description
    padding: 20px
    box-sizing: border-box
    h3
      font-family: $font_black
      font-weight: normal
      text-align: left
      font-size: 20px
      color: white
      line-height: 1.3
    p
      font-family: $font_regular
      margin-top: 10px
      margin-bottom: 15px
      text-align: left
      color: rgba(white, .7)
      line-height: 1.4
    .button_login
      padding: 12px 20px
      box-sizing: border-box
      color: $primary_color
      border-radius: 2px
      background-color: $accent_color
      border: 1px solid $accent_color
      width: 200px
      display: flex
      text-decoration: none
      justify-content: center
      align-items: center
      font-family: $font_bold
      font-size: 15px
  .image_wrap
    background-color: transparent
    padding: 10px 30px
    img
      width: 220px
      margin: 0 auto
      display: block

@media screen and (max-width: 1100px)
  aside.card_register
    width: 800px
    .image_wrap
      img
        width: 200px

@media screen and (max-width: 850px)
  aside.card_register
    width: 450px
    display: block
    .image_wrap
      padding: 10px 20px
      img
        margin-top: 10px
    .description
      h3, p
        text-align: center
      p
        margin-bottom: 20px
        margin-top: 10px
      .button_login
        width: 100%

@media screen and (max-width: 550px)
  aside.card_register
    width: calc(100% - 40px)
    margin: 20px
    margin-bottom: 2rem
</style>
