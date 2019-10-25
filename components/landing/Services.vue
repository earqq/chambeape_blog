<template>
    <section class="service_section">
        <div class="service_wrapper">
            <div class="service_images">
                <transition name="slide-fade-r" mode="out-in">
                    <img v-if="currentService === 1" src="@/assets/img/service_image_1.svg" alt="Laptop abierta" />
                    <img v-if="currentService === 2" src="@/assets/img/service_image_2.svg"  alt="Laptop abierta con graficos" />
                    <img v-if="currentService === 3" src="@/assets/img/service_image_1.svg"  alt="Laptop abierta con graficos" />
                    <img v-if="currentService === 4" src="@/assets/img/service_image_1.svg"  alt="Laptop abierta con datos" />
                </transition>
            </div>
            <div class="service_info">
                <transition name="slide-fade" mode="out-in">
                    <div class="service" v-if="currentService === 1">
                        <b>01</b>
                        <h2>¿Qué es Easybill?<span>.</span></h2>
                        <p>Easybill es un sistema de ventas online que integra un módulo de ventas rápidas y un sistema de gestión administrativa, diseñado especialmente para impulsar el crecimiento de negocios minoristas como: Bodegas, Ferreterias, Minimarkets, Librerias, etc.</p>
                    </div>
                    <div class="service" v-if="currentService === 2">
                        <b>02</b>
                        <h2>Ventas rápidas<span>.</span></h2>
                        <p>Genera tus facturas y boletas electrónicas de una manera más rápida con tan solo 3 pasos en nuestro módulo de ventas rápidas. 
                            Envia el comprobante por email o whatsapp de forma segura.
                        </p>
                    </div>
                    <!-- <div class="service" v-if="currentService === 3">
                        <b>03</b>
                        <h2>Enamora a tus clientes<span>.</span></h2>
                        <p>Te brindamos las herramientas para que puedas fidelizar a tus clientes. Ofertas y descuentos personalizados, recordatorios de fechas importantes, personalización de tu comprobante y envío de ofertas masivas.</p>
                    </div> -->
                    <div class="service" v-if="currentService === 3">
                        <b>03</b>
                        <h2>Gestión administrativa<span>.</span></h2>
                        <p>Tienes información en tiempo real de las ventas,compras de tu negocio, genera reportes a medida y gestiona tus oficinas y usuarios, todo esto desde nuestra plataforma alojada en la nube para que puedas acceder desde cualquier lugar o cualquier dispositivo. </p>
                    </div>
                    
                </transition>
                <div class="controls"><span class="prev" @click="prevService"><i class="icon icon-keyboard_arrow_left"></i></span><span class="next" @click="nextService"><i class="icon icon-keyboard_arrow_right"></i></span></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

    data () {
        return {
            currentService: 1,  
        }
    },
    mounted () {
        setInterval(() => {
            this.nextService()
        }, 50000);
    },
    methods: {
        prevService() {
            let step = this.currentService
            this.currentService = 0
            setTimeout(() => {
                if (step > 1) this.currentService = step - 1
                else this.currentService = 3
            }, 100);
        },
        nextService() {
            let step = this.currentService
            this.currentService = 0
            setTimeout(() => {
                if (step < 3) this.currentService = step + 1
                else this.currentService = 1 
            }, 100);
        }
    }
}
</script>

<style lang="sass">
@import './assets/css/main'
@import './assets/css/animations'
.service_section
    display: flex
    justify-content: center
    overflow: hidden
    min-height: 500px
    .service_wrapper
        width: $large
        display: flex
        justify-content: space-between
        align-items: center
        padding: 5rem 0
        .service_images
          img
            width: 450px
            margin-top: -15px
        .service_info
            text-align: left
            width: 500px
            b
                color: $accent_color
                font-size: 35px
                position: relative
                font-family: $font_black
                padding-left: 30px
                &:after
                    content: ''
                    display: block
                    position: absolute
                    left: 0
                    top: 18px
                    width: 25px
                    height: 4px
                    background-color: $accent_color
            h2
                color: $primary_color
                font-size: 32px
                font-family: $font_black
                margin-bottom: 15px
                span
                    display: inline
                    color: $accent_color
            p
                color: #575F66
                font-size: 17px
                font-family: $font_regular
                line-height: 1.7
            .controls
                display: flex
                margin-top: 20px
                span
                    border-radius: 50%
                    display: flex
                    width: 40px
                    height: 40px
                    justify-content: center
                    align-items: center
                    border: 2px solid #CFD7DE
                    margin-right: 10px
                    cursor: pointer
                    i
                        font-size: 25px
                        color: $accent_color
                    
                    
@media screen and (max-width: 1100px)
    .service_section
        .service_wrapper
            width: $medium
            padding: 4rem 0
            .service_images
                img
                    width: 300px
            .service_info
                width: 450px
                b
                    font-size: 30px
                    &:after
                        top: 15px
                        width: 20px
                h2
                    font-size: 27px
                p
                    font-size: 16px
                .controls
                    margin-top: 15px                         
                    span
                        width: 35px
                        height: 35px

@media screen and (max-width: 850px)
    .service_section
        .service_wrapper
            width: $small
            flex-direction: column
            .service_images
                img
                    width: 250px
            .service_info
                display: flex
                flex-direction: column
                align-items: center
                text-align: center
                h2
                    font-size: 25px
                    margin-bottom: 10px
                b
                    margin: 0 auto
                    padding-left: 0
                    display: none
                p
                    font-size: 15px


@media screen and (max-width: 500px)
    .service_section
        .service_wrapper
            width: $extra-small
            padding: 3rem 20px
            box-sizing: border-box
            align-items: center
            justify-content: center
            .service_images
                img
                    width: 250px
            .service_info
                width: 100%
                align-items: center
                text-align: left
                p
                    text-align: left
                    font-size: 15px
                h2
                    font-size: 20px
                    text-align: center
</style>
