<template lang="pug">
  section.main_blog
    header-section( :last_post="last_post" )
    body-list( :posts="posts" )
    footer-section
    script(v-html='jsonld' type='application/ld+json')
</template>


<script>
import HeaderSection from '@/components/estados-whatsapp/Header'
import BodyList from '@/components/estados-whatsapp/BodyList'
import FooterSection from '@/components/landing/Footer'
import { firestore } from '~/plugins/firebase.js'

export default {
  components: {
    HeaderSection,
    BodyList,
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
            "@id":"https://easyjobs.site/estados-para-whatsapp/#webpage",
            "url":"https://easyjobs.site/estados-para-whatsapp",
            "inLanguage":"es-PE",
            "name":"Herramienta gratuita para compartir estados a whatsapp",
            "isPartOf":{
              "@id":"https://easyjobs.site/#website"
            },
            "datePublished":"2019-12-16T20:12:54+00:00",
            "dateModified":"2019-12-16T09:00:09+00:00",
            "description":"Herramienta gratuita para compartir estados que estan en tendencia, los más compartidos, con más me gusta y lo que esta en las noticias, memes actualizados."
          }
        ]
    }
    return {
      jsonld,
      posts: [],
      last_post: {}
    }
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      },
      link:[
        {
          rel:'canonical',href:'https://easyjobs.site/estados-para-whatsapp', 
        }
      ],
      title: '≫Los estados para whatsapp más populares.',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content:'Herramienta gratuita para compartir estados que estan en tendencia, los más compartidos, con más me gusta y lo que esta en las noticias, memes actualizados y frase motivadoras .' },
        { property: 'og:title', content: 'Herramienta gratuita para compartir estados a whatsapp.' },
        { property: 'og:description', content: 'Herramienta gratuita para compartir estados que estan en tendencia, los más compartidos, con más me gusta y lo que esta en las noticias, memes actualizados.' },        
        { property: 'og:url', content: 'https://easyjobs.site/estados-para-whatsapp' },
        { property: 'og:type', content: 'product' },
        { property: 'fb:app_id', content: '1994748484137426' }
      ]
    }
  },
  async asyncData ({ params }) {
    const ref = firestore.collection('posts').orderBy("created_at", "desc")
    let snap
    try {
      snap = await ref.get()
    }
    catch(e) {console.error(e)}
    let result = []
    snap.docs.map(s => result.push(s.data()))    
    return {posts: result, last_post: snap.docs[0].data()}
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
