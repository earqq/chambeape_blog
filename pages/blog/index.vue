<template lang="pug">
  section.main_blog
    header-section
    list-articles-section
    aside.card_register
      .image_wrap
        img( src="@/assets/img/service_image_1.svg" alt="Laptop abierta" )
      .description
        h3 Obtén 1 Mes Gratis de Facturación Electrónica
        p Registrate ahora y podras obtener 1 mes gratis en el sistema de facturacion Easybill
        a( href='https://app.easybill.pe/registro' class="button_login button" ) Comenzar Ahora!
    footer-section
</template>

<script>
import HeaderSection from '@/components/blog/Header'
import ListArticlesSection from '@/components/blog/ListArticles'
import FooterSection from '@/components/landing/Footer'
export default {
  components: {
    HeaderSection,
    ListArticlesSection,
    FooterSection
  },
  head () {
    return {
      title: 'Easybill | Blog'
    }
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
