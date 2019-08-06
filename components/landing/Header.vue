<template>
    <header class="header_content">
        <div class="header_wrapper">
            <div class="header_body">
                <nav>
                    <nuxt-link to="/"  class="logo">
                      <div class="logo_wrapper"><img src="@/assets/img/logo_easybill.svg" alt="Logo easybill" /></div>
                    </nuxt-link>

                    <div class="menu_right_top">
                        <div class="menu_mobile"  @click="showMenu=true"><i class="icon icon-menu"></i></div>
                        <transition name="fade" mode="in-out" >
                            <ul v-if="!mobile || (mobile && showMenu)">
                                <div class="close_menu" @click="showMenu=false">
                                    <i class="icon icon-close"></i>
                                </div>
                                <li> <a @click="
                                    ga('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Precios header', 'value': 1})
                                    showMenu=false"  
                                    href="/#plans_section">Precios</a></li>
                                <li> <a @click="
                                    ga('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Clientes header', 'value': 1})
                                    showMenu=false"  
                                    href="/#clients">Clientes</a></li>
  															<li> <nuxt-link to="/blog">Blog</nuxt-link></li>
                                <li> <a 
                                    @click="
                                    ga('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Guia header', 'value': 1})"                                    
                                    href="http://guia.easybill.pe" rel="noopener" target="_blank">Guia  </a></li>
                                <li>
                                    <a
                                    @click="
                                    ga('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Ingresar header', 'value': 1})"                                     
                                    class="button_login inline button_fill" href="https://app.easybill.pe">Ingresar</a>
                                    <a 
                                    @click="
                                    ga('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Registrate header', 'value': 1});
                                    "                                     
                                    href='https://app.easybill.pe/registro'
                                    class="button_login button"  >Regístrate</a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                </nav>
                
                <div class="header_main_content">
                    <div class="header_main_text">
                        <h1>Facturación Electrónica para Pequeñas Empresas en Perú<span>.</span></h1>
                        <p>Cientos de Empresas Minoristas en todo el Perú ya emiten electrónicamente con nosotros. Prueba nuestra módulo de ventas rápidas debajo.</p>
                        <span>

                            <a  
                                @click="ga('event', 'Click Boton', {'event_category': 'Landing Page', 'event_label': 'Demostración ventas rápidas', 'value': 1});
                                fbq('track', 'StartTrial');
                                " 
                                href='http://demo.easybill.pe/pos'
                                target="_blank"
                                rel="noopener"
                                class="button" > 
                                    Probar Demo
                                <i class="icon icon-log-in"> </i>
                            </a>
                            <a 
                            @click="ga('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Consulta comprobantes', 'value': 1})" 
                            class="button_fill" href="http://app.easybill.pe/consulta-cpe-sunat">Consulta Comprobantes</a>
                        </span>
                    </div>
                    <div
                        class="header_3d">
                        <div class="header_3d_wrapper"><img src="@/assets/img/header_image.svg" alt='Persona usando laptop' /></div>
                </div>
            </div>
        </div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            showMenu: false,
            mobile: false,
            ga:{},
            fbq:{}
        }
    },
    created () {
      if (process.client) { // en lado del servidor no existe window, document, etc
        if (window.innerWidth < 850) this.mobile = true
        else this.mobile = false

        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                if (window.innerWidth < 850) this.mobile = true
                else this.mobile = false
            })
        })
        this.ga=window.ga
        this.fbq=window.fbq
      } 
    },
}
</script>
<style lang="sass">
@import './assets/css/main'
header.header_content
  width: 100%
  display: flex
  position: relative
  background-color: $primary_color
  height: 600px
  .header_wrapper
    width: 100%
    z-index: 2
    nav
      display: flex
      justify-content: space-between
      align-items: center
      width: $large
      box-sizing: border-box
      height: 50px
      z-index: 5
      position: relative
      margin: 0 auto
      margin-top: 40px
      z-index: 11
      .menu_right_top
        .menu_mobile
          display: none
        ul
          display: flex
          align-items: center
          width: 550px
          justify-content: space-between
          .close_menu
            display: none
          li
            list-style: none
            a
              font-size: 15px
              color: white
              text-decoration: none
              font-family: $font_bold
              font-weight: normal
              &.button_login
                padding: 12px 20px
                box-sizing: border-box
                color: $primary_color
                border-radius: 2px
                background-color: $accent_color
                border: 1px solid $accent_color
                margin-left: 12px
                &.inline
                  background-color: transparent
                  color: $accent_color
                  white-space: nowrap
                  margin-left: 0
      .logo
        display: flex
        align-items: center
        .logo_wrapper
          width: 130px
          height: 55px
          margin-left: -5px
          path, circle
            fill: $accent_color

    .header_body
      background-size: cover
      text-align: left
      display: flex
      flex-direction: column
      align-items: center
      justify-content: flex-start
      position: relative
      .header_main_content
        box-sizing: border-box
        width: $large
        display: flex
        align-items: center
        justify-content: flex-start
        margin-top: 70px
        z-index: 5
        .header_3d
          .header_3d_wrapper
            width: 450px
        .header_main_text
          color: black
          text-align: left
          width: $large
          h1
            margin: 0
            font-size: 32px
            font-family: $font_black
            color: white
            width: 500px
            margin-bottom: 20px
            span
                display: inline
                color: $accent_color
          p
            width: 500px
            font-family: $font_regular
            font-size: 18px
            color: #899AAC
            margin-bottom: 20px
            line-height: 1.7
            strong
              font-family: $font_black
              font-weight: normal
          span
            width: 450px
            display: grid
            grid-gap: 15px
            grid-template-columns: 1fr 1fr
            a
              background-color: $accent_color
              height: 35px
              font-size: 20px
              font-weight: 500
              color: $primary_color
              font-family: $font_bold
              font-size: 15px
              border: 0
              text-decoration: none
              min-width: 130px
              align-self: center
              display: flex
              justify-content: center
              align-items: center
              padding: 23px 20px
              margin-top: 10px
              box-sizing: border-box
              border-radius: 2px
              border: 1px solid $accent_color
              i
                  font-size: 22px
                  margin-left: 20px
              &:last-child
                background-color: transparent
                color: $accent_color

@media screen and (max-width: 1100px)
  header.header_content
    height: 500px
    .header_wrapper
      nav
        width: $medium
        .menu_right_top
          ul li a
            font-size: 14px
            &.button_login
              padding: 10px 15px
      .header_body
        .header_main_content
          width: $medium
          .header_3d
            .header_3d_wrapper
              width: 350px
          .header_main_text
            width: $medium
            h1
              font-size: 27px
              width: 400px
              margin-bottom: 15px
            p
              font-size: 16px
              width: 400px
              margin-bottom: 15px
            span
              width: 400px
              a
                font-size: 14px
                padding: 20px 15px

@media screen and (max-width: 850px)
  header.header_content
    height: auto
    .header_wrapper
      nav
        width: $small
        .logo
          .logo_wrapper
            width: 120px
        .menu_right_top
          .menu_mobile
            display: block
            color: $accent_color
            font-size: 22px
          ul
            position: fixed
            left: 0
            top: 0
            width: 100%
            height: 100vh
            background-color: $primary_color
            z-index: 10
            flex-direction: column
            justify-content: center
            padding: 30px
            box-sizing: border-box
            .close_menu
              font-size: 25px
              color:  $accent_color
              margin-bottom: 30px
              display: block
            li
              margin-bottom: 40px
              a
                font-size: 16px
                &:hover
                  color: #899AAC
              &:last-child
                display: flex
                flex-direction: column
                a
                  width: 150px
                  text-align: center
                  margin-bottom: 30px
                  &.button
                    margin-left: 0
                    &:hover
                      color: $primary_color
      .header_body
        .header_main_content
          width: $small
          flex-direction: column-reverse
          margin-top: 30px
          margin-bottom: 50px
          .header_3d
            .header_3d_wrapper
              width: 250px
          .header_main_text
            width: $small
            display: flex
            flex-direction: column
            align-items: center
            text-align: center
            h1
              font-size: 25px
              margin-top: 10px
            p
              font-size: 15px
              width: 450px
            span
              width: 370px
              a
                font-size: 13px
                padding: 20px 15px
                i
                  font-size: 20px
                  margin-left: 17px

@media screen and (max-width: 500px)
  header.header_content
    .header_wrapper
      nav
        width: $extra-small
        padding: 0 20px
        box-sizing: border-box
        margin-top: 20px
      .header_body
        .header_main_content
          width: $extra-small
          padding: 0 20px
          box-sizing: border-box
          .header_main_text
            width: $extra-small
            h1
              width: 100%
              text-align: center
              font-size: 23px
            span
              width: $extra-small
              grid-gap: 15px
              grid-template-columns: 1fr
              a
                margin-top: 0
            p
              width: 100%
              text-align: center
              font-size: 14px
</style>
