<template lang="pug">
  section.main_blog
    header-section( :last_article="last_article" )
    validate
    aside.card_register
      .image_wrap
        img( src="@/assets/img/service_image_1.svg" alt="Laptop abierta" )
      .description
        h3 Obtén 1 Mes Gratis de Facturación Electrónica
        p Registrate ahora y podras obtener 1 mes gratis en el sistema de facturacion Easybill
        a( href='https://app.easybill.pe/registro' class="button_login button" ) Comenzar Ahora!
    footer-section
    script(v-html='jsonld' type='application/ld+json')
</template>

<script>
import HeaderSection from '@/components/validez-factura-electronica/Header'
import Validate from '@/components/validez-factura-electronica/Validate'
import FooterSection from '@/components/landing/Footer'
import { firestore } from '~/plugins/firebase.js'

export default {
  components: {
    HeaderSection,
    Validate,
    FooterSection
  },
  data() {
    const jsonld={       
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"WebSite",
            "@id":"https://easybill.pe/#website",
            "url":"https://easybill.pe/",
            "name":"Easybill",
            "potentialAction":{
              "@type":"SearchAction",
              "target":"https://easybill.pe/?s={search_term_string}",
              "query-input":"required name=search_term_string"
            }
          },
          {
            "@type":"WebPage",
            "@id":"https://easybill.pe/sistema-venta-2.0/#webpage",
            "url":"https://easybill.pe/sistema-venta-2.0",
            "inLanguage":"es-PE",
            "name":"Sistema de venta 2.0 ",
            "isPartOf":{
              "@id":"https://easybill.pe/#website"
            },
            "datePublished":"2019-01-01T20:12:54+00:00",
            "dateModified":"2019-09-23T09:00:09+00:00",
            "description":"Sistema de venta 2.0 un nuevo concepto para gestionar tu negocio con un sistema enfocado a fidelizar a tus clientes."
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
      title: 'Validez de tu factura electrónica en SUNAT | Easybill',
      link:[
        {
          rel:'canonical',href:'https://easybill.pe/validez-factura-electronica', 
        }
      ],
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content:'¿Estás seguro que la factura electrónica que te entregaron es válida ante SUNAT? Entra y averigualo rápidamente, consulta de facturas electrónicas emitidas a SUNAT' },
        { property: 'og:title', content: 'Consulta la validez de tu factura electrónica en SUNAT | Easybill' },
        { property: 'og:description', content: '¿Estás seguro que la factura electrónica que te entregaron es válida ante SUNAT? Entra y averigualo rápidamente' },
        { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/easybill-b9a91.appspot.com/o/landing%2Ffacebook-preview.png?alt=media&token=16577e76-02d9-4351-99f1-8663bbb90b92' },
        { property: 'og:url', content: 'https://easybill.pe' },
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
