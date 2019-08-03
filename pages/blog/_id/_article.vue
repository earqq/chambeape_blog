<template lang="pug">
  section.article_container
    header-article-section( v-if="article" :article="article" )
    .body_content
      main( v-if="article.body" v-html="toHtml(article.body)")
      aside.card_register
        .image_wrap
          img( src="@/assets/img/service_image_1.svg" alt="Laptop abierta" )
        .description
          h1 Obtén 1 Mes Gratis de Facturación Electrónica
          p Registrate ahora y podras obtener 1 mes gratis en el sistema de facturacion Easybill
          a( href='https://app.easybill.pe/registro' class="button_login button" ) Comenzar Ahora!
    footer-section
</template>

<script>
import HeaderArticleSection from '@/components/blog/HeaderArticle'
import FooterSection from '@/components/landing/Footer'
import { firestore } from '~/plugins/firebase.js'
import marked from 'marked'

export default {
  components: { HeaderArticleSection, FooterSection },
  data() {
    return {
      article: {}
    }
  },
  head () {
    return {
      title: 'Easybill | Blog | '+this.article.title
    }
  },
  // firestore ()  {
  //   return {
  //     article: firestore.collection('articles').where("_id", "==", this.getId)
  //   }
  // },            
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
  aside.card_register
    height: fit-content
    margin-top: 2rem
    border-radius: 2px
    background-color: $primary_color
    overflow: hidden
    position: sticky
    top: 20px
    .description
      padding: 20px
      box-sizing: border-box
      h1
        font-family: $font_black
        font-weight: normal
        text-align: center
        font-size: 20px
        color: white
        line-height: 1.3
      p
        font-family: $font_regular
        margin-top: 15px
        margin-bottom: 30px
        text-align: center
        color: rgba(white, .7)
        line-height: 1.4
      .button_login
        padding: 12px 20px
        box-sizing: border-box
        color: $primary_color
        border-radius: 2px
        background-color: $accent_color
        border: 1px solid $accent_color
        width: 100%
        display: flex
        text-decoration: none
        justify-content: center
        align-items: center
        font-family: $font_bold
    .image_wrap
      background-color: transparent
      img
        width: 220px
        margin: 0 auto
        display: block
        margin-top: 20px
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
    li
      margin-top: 5px
    a
      color: #171B26
    h1, h2, h3, h4, h5, h6, strong
      font-weight: normal
      font-family: "c-bold", sans-serif
      margin-top: 10px
      margin-bottom: 5px
@media screen and (max-width: 1100px)
  .body_content
    grid-template-columns: 1fr
    width: 800px
    aside.card_register
      margin-top: 0
      display: flex
      margin-bottom: 2rem
      align-items: center
      .image_wrap
        padding: 10px 30px
        img
          margin-top: 0
          width: 200px
      .description
        h1, p
          text-align: left
        p
          margin-bottom: 15px
          margin-top: 10px
        .button_login
          width: 200px
@media screen and (max-width: 850px)
  .body_content
    width: 450px
    aside.card_register
      display: block
      .image_wrap
        padding: 10px 20px
        img
          margin-top: 10px
      .description
        h1, p
          text-align: center
        p
          margin-bottom: 20px
          margin-top: 10px
        .button_login
          width: 100%
@media screen and (max-width: 500px)
  .body_content
    padding: 0 20px
    box-sizing: border-box
    width: 100%
</style>