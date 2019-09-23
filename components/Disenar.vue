<template lang="pug">
    aside.card_register( :class="{modal: modal}" itemscope="itemscope" itemtype="http://schema.org/WPSideBar" )
        transition( name="fade" mode="in-out" )
          .success_message( v-if="sent" )
            i.icon.icon-check
            h3 Solicitud Enviada
            p Te enviaremos el acceso al editor de comprobantes cuando finalicemos su desarrollo.
        .image_wrap
          img( src="@/assets/img/header_image.svg" alt="Laptop abierta" )
        .description
          p Estamos trabajando arduamente para traerte esta herramienta gratuita.<br> Para tener la versión gratuita por favor dejame tu email y te la enviare una vez finalizada .
          .card_form
            .input_wrapper( :class="{ require : !validateEmail && trigger }"  )
              .validate_msg Email no es válido
              input(type='text' class='form_control' v-model='userEmail' placeholder='Email'  )
          a( @click='sendCall()' class="button_login button2" ) Quiero recibir la herramienta
</template>
<script>
export default {
    props: ['modal'],
    data() {
        return {
            userName:'',
            userEmail:'',
            userPhone:'',
            trigger: false,
            sent: false,
            ga:{},
            fbq:{}
        }
    },
    created(){
      	if (process.client) {
          this.ga=window.gtag
          this.fbq=window.fbq
        }
    },
    methods: {
        sendCall () {
            this.trigger = true
            if (this.validateEmail ) this.call()
        },
        call(){
            this.ga('event', 'conversion', {'send_to': 'AW-792324811/SwvnCIPi6qcBEMvV5_kC'});
            this.fbq('track','Contact')
            const self=this
            this.$axios.post('/api/sendEmailDisenar/'+this.userEmail,{
            }).then(function(res){
                self.sent = true
                self.$emit("showButton")
                self.userEmail=''
                self.trigger = false
                setTimeout(() => {
                self.sent = false
                }, 8000);
            })
        }
    },
    computed: {
        validateName () {
        return this.userName.length > 2
        },
        validateEmail () {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.userEmail).toLowerCase());
        },
    }
}
</script>
<style lang="sass" scoped>
@import './assets/css/main'
$line_button_color: rgba(42, 48, 56, 0.25)
$border_radius_button: 0.1rem

aside.card_register
    height: fit-content
    margin-top: 2rem
    border-radius: 2px
    border: 1px solid rgba($primary_color, .1)
    overflow: hidden
    position: sticky
    top: 20px
    margin-bottom: 20px
    &.modal
        display: flex
        align-items: center
        position: relative
        top: 0
        border: none
        margin: 0
        padding: 40px 30px
        box-sizing: border-box
        .description
            padding: 0
            padding-left: 30px
            p
                margin-bottom: 20px
                font-size: 17px
        .image_wrap
            display: flex
            justify-content: center
            align-items: center
            padding: 0
            height: 100%
            margin: 0
            img
                margin-bottom: 0px
                padding-bottom: 0px
                width: 300px
    .success_message
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background-color: white
      z-index: 2
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      text-align: center
      padding: 20px
      box-sizing: border-box
      font-family: $font_regular
      i
        color: $accent_color
        width: 40px
        height: 40px
        border: 2px solid $accent_color
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
        margin-bottom: 10px
      h3
        font-family: $font_black
        font-weight: normal
      p
        font-size: 14px
        margin-top: 5px
    .description
      padding: 20px
      padding-top: 10px
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
        font-size: 18px
        line-height: 1.3
        margin-bottom: 5px
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
        color: white
        border-radius: 2px
        background-color: $primary_color
        width: 100%
        display: flex
        text-decoration: none
        justify-content: center
        align-items: center
        font-family: $font_bold
        cursor: pointer
        font-size: 15px
    .image_wrap
        margin-top: 20px
        img
            width: 200px
            margin: 0 auto
            display: block

@media screen and (max-width: 1100px)
    aside.card_register
      margin-top: 0
      display: flex
      margin-bottom: 2rem
      align-items: center
      padding: 20px
      box-sizing: border-box
      .image_wrap
        padding: 0px 30px
        img
          margin-top: 0
          width: 270px
          margin-bottom: 15px
      .description
        h3, p
          text-align: left
        p
          margin-bottom: 15px
          margin-top: 10px
        .button_login
          width: 100%

@media screen and (max-width: 850px)
    aside.card_register
      display: block
      padding: 0
      .image_wrap
        padding: 0px 20px
        img
          width: 200px
          margin-bottom: 0px
      .description
        h3, p
          text-align: center
        p
          margin-bottom: 20px
          margin-top: 10px
        .button_login
          width: 100%     

@media screen and (max-width: 750px)
    aside.card_register
        &.modal
            padding: 20px
            padding-top: 40px
            .description
                padding: 0
                h3
                    font-size: 18px
            .image_wrap
                display: none
</style>