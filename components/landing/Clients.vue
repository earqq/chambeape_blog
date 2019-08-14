<template>
    <div class="clients_section" id="clients">
            <div class="clients_wrapper">
                <div class="title">
                    <h2>Ellos ya confían en nosotros<span>.</span></h2><small>Solo faltas tú, regístrate ahora.</small>
                </div>
                <no-ssr >
                    <section class="clients_content">
                        <transition name="slide-fade-up">
                            <aside v-show="!mobile || (mobile && selectQuote == 1)" class="client_testimonial"><i class="icon icon-quote"></i>
                                <p>Con la plataforma de Easybill le dimos mayor agilidad en el punto de venta eliminando las colas, además mejoramos en nuestra gestión de inventarios evitando así los quiebres de stock y automatizamos al 100% los comprobantes electrónicos. </p>
                                <h3>Franz Westreicher</h3><small>Gerente de Biolett Gourmet</small>
                            </aside>
                        </transition>
                        <transition name="slide-fade-up">
                            <aside v-show="!mobile || (mobile && selectQuote == 2)" class="client_testimonial"><i class="icon icon-quote"></i>
                                <p>Easybill ayuda a mi empresa por que tengo reportes muchos mas exactos y aceleró nuestra forma de emisión, Nos permite llevar una contabilidad de manera sistemática y simplifica la facturación. Dejando atrás los comprobantes físicos.</p>
                                <h3>Catherine Zarate </h3><small>Gerente de Portada del Sol</small>
                            </aside>
                        </transition>
                        <transition name="slide-fade-up">
                            <aside v-show="!mobile || (mobile && selectQuote == 3)" class="client_testimonial"><i class="icon icon-quote"></i>
                                <p> Easybill a ayudado a que los procesos de facturación sean rápidas, su plataforma contiene lo indispensable para un buen control. Lo mejor de todo, es que si existe algún inconveniente dan la solución rápida.</p>
                                <h3>Jorge Peña  </h3><small>Gerente de Leones de Oro</small>
                            </aside>
                        </transition>
                    </section>
                    <div class="tabs" v-if="mobile">
                        <p :class="{active: selectQuote == 1}" @click="selectQuote = 1" ></p>
                        <p :class="{active: selectQuote == 2}" @click="selectQuote = 2"></p>
                        <p :class="{active: selectQuote == 3}" @click="selectQuote = 3"></p>
                    </div>
                </no-ssr >
                <div class="clients"><img src="@/assets/img/clients/client1.svg" alt="portada del sol" /><img src="@/assets/img/clients/client3.svg" alt="urban coffice" /><img src="@/assets/img/clients/client2.svg" alt="seafrost distribuidora" /><img src="@/assets/img/clients/client4.svg"
                        alt="biolet gourmet" /><img src="@/assets/img/clients/client5.svg" alt="panasonic sac " /></div>
            </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selectQuote: 1,
            mobile: false
        }
    },
    created () {
        if (process.client) { // en lado del servidor no existe windown, document, etc
            if (window.innerWidth < 850) this.mobile = true
            else this.mobile = false

            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    if (window.innerWidth < 850) this.mobile = true
                    else this.mobile = false
                })
            })
        }
    },
    
}
</script>

<style lang="sass">
@import './assets/css/main'
@import './assets/css/animations'
.clients_section
    background-color: #f2f4f5
    display: flex
    justify-content: center
    .clients_wrapper
        width: $large
        display: flex
        align-items: center
        padding: 5rem 0
        flex-direction: column
        .title
            display: flex
            flex-direction: column
            h2
                color: $primary_color
                font-family: $font_black
                margin-bottom: 10px
                font-size: 32px
                text-align: center
                span
                    display: inline
                    color: $accent_color
            small
                color: #353D48
                font-family: $font_regular
                font-size: 16px
                text-align: center
        .clients_content
            display: grid
            grid-template-columns: repeat(3, 1fr)
            grid-gap: 20px
            padding: 4rem 0
            aside
                background-color: white
                border-radius: 2px
                padding: 30px
                display: flex
                flex-direction: column
                i
                    display: flex
                    align-items: center
                    justify-content: center
                    width: 50px
                    height: 50px
                    background-color: $accent_color
                    color: $primary_color
                    border-radius: 50%
                    font-size: 23px
                    margin: 0 auto
                    margin-top: -55px
                    margin-bottom: 25px
                p
                    color: #575F66
                    font-size: 16px
                    font-family: $font_regular
                    line-height: 1.7
                    margin-bottom: 15px
                    text-align: left
                    flex: 1
                h3
                    font-family: $font_black
                    font-size: 17px
                    text-align: left
                    margin-top: 20px
                    color: $primary_color
                    font-weight: normal
                small
                    color: #575F66
                    font-family: $font_regular
                    text-align: left
                    font-size: 15px
                    display: block
        .clients
            width: 100%      
            display: grid
            grid-template-columns: repeat( 5, 1fr )
            img
                width: 150px
                margin: 0 auto

@media screen and (max-width: 1100px)
    .clients_section
        .clients_wrapper
            width: $medium
            padding: 3rem 0
            .title
                h2
                    font-size: 27px
                small   
                    font-size: 15px
            .clients_content
                aside
                    padding: 20px
                    p
                        font-size: 15px
                    h3
                        font-size: 16px
                    small
                        font-size: 14px
            .clients
                img
                    width: 130px

@media screen and (max-width: 850px)
    .clients_section
        .clients_wrapper
            width: $small
            .title
                h2
                    font-size: 25px
                small   
                    font-size: 14px
            .clients_content
                grid-template-columns: repeat(1, 1fr)
                padding-bottom: 1rem
                grid-gap: 100px
                height: 320px
                overflow: hidden
                aside
                    padding: 20px
                    p
                        font-size: 15px
                    h3
                        font-size: 16px
                    small
                        font-size: 14px
            .clients
                grid-template-columns: repeat( 3, 1fr )
                grid-gap: 20px
                margin-top: 30px
                img
                    width: 120px
            .tabs        
                display: grid
                grid-template-columns: repeat(3, 1fr)
                grid-gap: 15px
                p
                    display: block
                    width: 14px
                    height: 14px
                    border-radius: 50%
                    background-color: #c1c1c1
                    cursor: pointer
                    &.active
                        background-color: $accent_color  
                        
@media screen and (max-width: 500px)
    .clients_section
        .clients_wrapper
            width: $extra-small
            padding-left: 20px
            padding-right: 20px
            box-sizing: border-box
            .clients_content
                height: 400px
                padding-bottom: 1.5rem
                padding-top: 3.5rem
                aside i
                    margin-top: -50px
            .clients
                grid-template-columns: repeat( 2, 1fr )
            .title
                width: 100%
                h2
                    font-size: 23px
</style>
