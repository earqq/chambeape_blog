<template lang="pug">
  section.main_blog
    header-section( :last_article="last_article" )
    list-articles-section( :articles="articles" )
    aside.card_register
      .image_wrap
        img( src="@/assets/img/service_image_1.svg" alt="Laptop abierta" )
      .description
        h3 Obtén 1 Mes Gratis de Facturación Electrónica
        p Registrate ahora y podras obtener 1 mes gratis en el sistema de facturacion Easybill
        a( href='https://app.easybill.pe/registro' class="button_login button" ) Comenzar Ahora!
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
    return {
      articles: [],
      last_article: {}
    }
  },
  head () {
    return {
      title: 'Easybill | Blog',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content:'Descubre nuestra innovadora solución a facturación electrónica. Ventas rápidas, reportes kardex, facturas, boletas, guías de remisión y mucho más. ' },
        { property: 'og:title', content: 'Facturación Electrónica y ventas rápidas en Perú - SUNAT | Easybill' },
        { property: 'og:description', content: 'Descubre nuestra innovadora solución a facturación electrónica. Ventas rápidas, reportes kardex, facturas, boletas, guías de remisión y mucho más. ' },
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
