<template lang="pug">
  section.article_container
    header-article-section( v-if="article" :article="article" )
    .body_content
      main( v-if="article.body" v-html="toHtml(article.body)")
      aside.card_register
        .image_wrap
          img( src="@/assets/img/about_image.svg" alt="Laptop abierta" )
        .description
          h3 Asesoramiento gratuito sobre Facturación Electrónica.
          .card_form
            .input_wrapper( :class="{ require : !validateName && trigger }" )
              .validate_msg Nombre muy corto
              input(type='text' class='form_control' v-model='userName' placeholder='Nombre'  )
            .input_wrapper( :class="{ require : !validateEmail && trigger }"  )
              .validate_msg Email no es válido
              input(type='text' class='form_control' v-model='userEmail' placeholder='Email'  )
            .input_wrapper(  :class="{ require : !validatePhone && trigger }" )
              .validate_msg Celular no es válido
              input(type='tel' class='form_control' v-model='userPhone' placeholder='Celular')
          a( @click='sendCall()' class="button_login button" ) Solicitar Asesoramiento
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
      article: {},
      userName:'',
      userEmail:'',
      userPhone:'',
      trigger: false
    }
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      },
      title: this.article.title+' | Easybill',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { hid : 'description', name:'description', content:this.article.description_google },
      ]
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
    sendCall () {
      this.trigger = true
      if (this.validateName && this.validateEmail && this.validatePhone) this.call()
    },
    toHtml (body) {
      return marked(body)
    },
    call(){
      this.$axios.post('/api/sendEmail/'+this.userName+'/'+this.userEmail+'/'+this.userPhone,{
      }).then(function(res){
        alert("Información enviada con exito nuestro asesor se comunicara contigo muy pronto :)")
      })
      this.showInputs=false
      this.userName=''
      this.userEmail=''
      this.userPhone=''
    }
  },
  computed: {
    validateName () {
      return this.userName.length > 2
    },
    validateEmail () {
      return this.userEmail.length > 5
    },
    validatePhone () {
      return this.userPhone.length > 5
    }
  }
}
</script>

<style lang="sass">
@import './assets/css/main'
$line_button_color: rgba(42, 48, 56, 0.25)
$border_radius_button: 0.1rem

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
    border: 1px solid rgba($primary_color, .1)
    overflow: hidden
    position: sticky
    top: 20px
    margin-bottom: 20px
    .description
      padding: 20px
      box-sizing: border-box
      .card_form
        margin-top: 10px
        .input_wrapper
          position: relative
          margin-bottom: 15px
          &.require 
            input
              border: 1px solid #ff3f41
              border-radius: .1rem
            .validate_msg
              display: block
          input
            width: 100%
            height: 40px
            padding: 0 10px
            font-family: $font_regular
            color: $primary_color
            border-radius: $border_radius_button
            border: 1px solid $line_button_color
            &:focus, &:active
              outline: none
          .validate_msg
            position: absolute
            right: 0px
            top: -14px
            background-color: #ff3f41
            color: white
            font-family: 'c-book', sans-serif
            font-size: 10px
            padding: 1px 5px
            border-radius: .1rem .1rem 0 0
            display: none	
      h3
        font-family: $font_black
        font-weight: normal
        text-align: center
        font-size: 20px
        color: $primary_color
        line-height: 1.3
      p
        font-family: $font_regular
        margin-top: 15px
        margin-bottom: 30px
        text-align: center
        color: rgba($primary_color, .7)
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
        width: 170px
        margin: 0 auto
        display: block
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
    blockquote
      border-left: 2px solid $accent_color
      padding: 5px
      padding-left: 20px
      background-color: #F2F4F5
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
        h3, p
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
        h3, p
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