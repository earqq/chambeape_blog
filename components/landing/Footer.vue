<template>
    <footer itemscope="itemscope" itemtype="http://schema.org/WPFooter" class="footer_section">
        <div class="footer_wrapper">
            
            <nuxt-link to="/"  class="logo">
                <div class="logo_wrapper"><img src="@/assets/img/logo_easybill.svg" alt="Logo easybill" /></div>
            </nuxt-link>

            <div class="footer_col"><span>+51 980 687 918</span><a class="link" href="mailto:contactos@easybill.pe">contactos@easybill.pe</a>
                <div class="social"><a href="https://www.facebook.com/Easybill.pe/" rel="noopener" target="_blank"><i class="icon icon-social-facebook"></i></a><a href="https://www.youtube.com/channel/UCvz8-GgLr0z3Ty2cWffH_9w" rel="noopener" target="_blank"><i class="icon icon-youtube"></i></a><a href="https://www.facebook.com/Easybill.pe/"
                   rel="noopener"     target="_blank"><i class="icon icon-twitter"></i></a><a href="https://www.instagram.com/easybill.pe/" rel="noopener" target="_blank"><i class="icon icon-instagram"></i></a></div>
            </div>
            <div class="footer_col">
                <nuxt-link class="link"  to="/politicas"   >
                    Políticas de privacidad
                </nuxt-link>
                 <nuxt-link class="link"  to="/terminos"   >
                    Términos y condiciones
                </nuxt-link>
                <p>© 2019 easybill.pe, Todos los derechos reservados. </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import './assets/css/main'
.footer_section
    background-color: $primary_color
    display: flex
    justify-content: center
    .footer_wrapper
        width: $large
        display: flex
        align-items: flex-start
        padding: 3rem 0
        .logo
            width: 300px
            display: flex
            align-items: flex-start
            img
                width: 130px
        .footer_col
            flex: 1
            flex-basis: 0
        .footer_col
            display: flex
            flex-direction: column
            align-items: flex-start
            span, a, .social, p
                color: white
                font-family: $font_regular
                font-size: 16px
                margin-bottom: 20px
                text-decoration: none
            .social
                display: flex
                align-items: center
                margin-bottom: 0
                a
                    color: $accent_color
                    text-decoration: none
                    margin-bottom: 0
                    i
                        margin-right: 10px
                        font-size: 18px
                    &:first-child i
                        font-size: 21px
                        margin-top: -2px
                    &:hover
                        color: #125d3f
                        transition: all ease-in-out .2s     
            a.link
                &:hover
                    color: #899AAC
                    transition: all ease-in-out .2s     
            p
                color: #899AAC
                margin-bottom: 0

@media screen and (max-width: 1100px)
    .footer_section
        .footer_wrapper
            width: $medium
            .logo
                width: 200px
            .footer_col
                flex: auto
                span, a, .social, p
                    font-size: 15px

@media screen and (max-width: 850px)
    .footer_section
        .footer_wrapper
            width: $small
            flex-direction: column
            padding: 2rem 0
            .logo
                width: auto
                margin-bottom: 30px
            .footer_col
                flex: auto
                margin-bottom: 20px
                margin-left: 5px
                &:last-child
                    margin-bottom: 0
                span, a, .social, p
                    font-size: 15px
                    margin-bottom: 10px
                p
                    margin-top: 20px

@media screen and (max-width: 500px)
    .footer_section
        .footer_wrapper
            width: $extra-small
            padding-left: 20px
            padding-right: 20px 
            box-sizing: border-box
            .footer_col
                span, a, p
                    text-align: left
                    
                .social 
                    display: none
</style>
