<template>
    <div class="pricing_section" >
        <div class="pricing_wrapper">
            <div class="title">
                <h2>Elije el plan apropiado para ti<span>.</span></h2>
                <small>Puedes cancelar tu plan en cualquier momento.</small>
                <div class="switch_plan" >
                    <h4  @click="monthly = true" :class="{mensual: !monthly}">MENSUAL</h4>
                    <div class="switch"  @click="monthly = !monthly" :class="{mensual: !monthly}">
                    </div>
                    <h4  @click="monthly = false" :class="{mensual: monthly}">SEMESTRAL</h4>
                </div>
            </div>
            <div class="tabs" v-if="mobile">
                <p :class="{active: selectPlan == 1}" @click="selectPlan = 1" >Básico</p>
                <p :class="{active: selectPlan == 2}" @click="selectPlan = 2">Estandar</p>
                <p :class="{active: selectPlan == 3}" @click="selectPlan = 3">Premium</p>
            </div>
            <section class="pricing_content">
                <transition name="fade">
                    <aside v-if="!mobile || (mobile && selectPlan == 1)">
                        <img src="@/assets/img/basico_icon.svg" alt="Easybill plan basico">
                        <h3>BÁSICO</h3>
                        <div class="price">
                            <small>S/.</small>
                            <h2>
                                <animated-number 
                                    :value="basic" 
                                    :formatValue="formatToPrice" 
                                    :duration="450"/>
                            </h2>
                            <small>{{monthly ? '/mes' : '/6 meses'}}</small>
                        </div>
                        <ul class="pricing_items">                         
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Facturas y boletas</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Notas de crédito y débito</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Control de stock e inventario</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Cuentas por cobrar y por pagar</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Envíos a whatsapp o correo de cliente</p>
                            </li>                                                   
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Envíos automáticos a SUNAT</p>
                            </li>                          
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Reportes en excel y kardex</p>
                            </li>

                            <li>
                                <i class="icon icon-check"></i>
                                <p>1 Usuario y Tienda</p>
                            </li>
                        </ul>
                        <a class="button2" 
                        @click=" gtag('event', 'Click Boton', {'event_category': 'Landing Page', 'event_label': 'Plan basico', 'value': 1});
                        fbq('track', 'AddToCart');" 
                        href="https://app.easybill.pe/registro"> Empieza tu mes gratis </a>
                    </aside>
                </transition>         
                <transition name="fade">
                    <aside :class="{recomended: !mobile}" v-if="!mobile || (mobile && selectPlan == 2)">
                        <img src="@/assets/img/estandar_icon.svg" alt="Easybill plan estandar">
                        <h3>ESTANDAR</h3>
                        <div class="price">
                            <small>S/.</small>
                            <h2>
                                <animated-number 
                                    :value="standar" 
                                    :formatValue="formatToPrice" 
                                    :duration="450"/>
                            </h2>
                            <small>{{monthly ? '/mes' : '/6 meses'}}</small>
                        </div>
                        <ul class="pricing_items">
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Facturas y boletas</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Notas y guias de remisión</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Control de stock e inventario</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Cuentas por cobrar y por pagar</p>
                            </li>  
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Envíos a whatsapp o correo de cliente</p>
                            </li>                                                   
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Envíos automáticos a SUNAT</p>
                            </li>                          
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Reportes en excel y kardex</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Ventas rápidas</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>1 Usuario y Tienda</p>
                            </li>
                        </ul>
                    <a class="button" 
                        @click=" gtag('event', 'Click Boton', {'event_category': 'Landing Page', 'event_label': 'Plan estandar', 'value': 1})" 
                        :class="{button2 : mobile }" href="https://app.easybill.pe/registro"> Empieza tu mes gratis </a>
                    </aside>
                </transition>
                <transition name="fade" >
                    <aside v-if="!mobile || (mobile && selectPlan == 3)">
                        <img src="@/assets/img/premium_icon.svg" alt="Easybill plan estandar">
                        <h3>PREMIUM</h3>
                        <div class="price">
                            <small>S/.</small>
                            <h2>
                                <animated-number 
                                    :value="premium" 
                                    :formatValue="formatToPrice" 
                                    :duration="450"/>
                            </h2>
                            <small>{{monthly ? '/mes' : '/6 meses'}}</small>
                        </div>
                        <ul class="pricing_items">
                           <li>
                                <i class="icon icon-check"></i>
                                <p>Facturas y boletas</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Notas y guias de remisión</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Control de stock e inventario</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Cuentas por cobrar y por pagar</p>
                            </li>  
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Envíos a whatsapp o correo de cliente</p>
                            </li>                                                   
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Envíos automáticos a SUNAT</p>
                            </li>                          
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Reportes en excel y kardex</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Ventas rápidas</p>
                            </li>
                            <li>
                                <i class="icon icon-check"></i>
                                <p>Usuarios y tiendas ilimitados</p>
                            </li>
                        </ul>
                        <a class="button2"  
                        @click=" gtag('event', 'Click Boton', {'event_category': 'Landing Page', 'event_label': 'Plan premium', 'value': 1})" 
                        href="https://app.easybill.pe/registro"> Empieza tu mes gratis </a>
                    </aside>
                </transition>
            </section>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue"
export default {
    components: {
        AnimatedNumber
    },
    data () {
        return {
            monthly: true,
            basic: 39,
            standar: 69,
            premium: 99,
            selectPlan: 2,
            mobile: false,
            // gtag: gtag,
            // fbq: fbq
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
    methods: {
        formatToPrice(value) {
            return `${Number(value).toFixed(0)}`
        },
    },
    watch: {
        monthly () {
            if (!this.monthly) {
                this.basic = (this.basic * 6) - ((this.basic * 6) * 5 / 100) 
                this.standar = (this.standar * 6) - ((this.standar * 6) * 5 / 100) 
                this.premium = (this.premium * 6) - ((this.premium * 6) * 5 / 100) 
            }else{
                this.basic = 39
                this.standar = 69
                this.premium = 99
            }
        }
    },
}
</script>

<style lang="sass">
@import './assets/css/main'
.pricing_section
    background-color: #f2f4f5
    display: flex
    justify-content: center
    .pricing_wrapper
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
                span
                    display: inline
                    color: $accent_color
            small
                color: #353D48
                font-family: $font_regular
                font-size: 16px
            .switch_plan
                display: flex
                align-items: center
                justify-content: center
                margin-top: 20px
                cursor: pointer
                h4
                    font-family: $font_regular
                    font-size: 14px
                    color: $primary_color
                    transition: all ease-in-out .2s
                    &.mensual
                        color: #b5b8bf
                .switch
                    display: block
                    width: 50px
                    height: 18px
                    background-color: #dcdcdc
                    border-radius: 20px
                    position: relative
                    margin: 0 10px
                    cursor: pointer
                    &.mensual
                        &:after
                            left: 27px
                    &:after
                        position: absolute
                        content: ''
                        display: block
                        left: -4px
                        top: -4px
                        width: 25px
                        height: 25px
                        border-radius: 50%
                        background-color: $accent_color
                        transition: all ease-in-out .2s
        .pricing_content
            display: grid
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
            grid-gap: 20px
            width: 100%
            padding: 4rem 0
            padding-bottom: 0
            aside
                background-color: white
                border-radius: 2px
                height: 520px
                min-height: 500px
                padding: 60px 30px
                padding-bottom: 30px
                display: flex
                flex-direction: column
                &.recomended
                    background-color: $primary_color
                    h3
                        color: white
                    .price
                        color: white
                    .pricing_items
                        li
                            color: white
                    a
                        background-color: $accent_color
                        color: $primary_color
                img
                    width: 55px
                    margin: 0 auto
                    margin-bottom: 20px
                h3    
                    font-family: $font_bold
                    color: $primary_color
                    font-size: 15px
                .price
                    display: flex
                    align-items: flex-start
                    justify-content: center
                    color: $primary_color
                    margin-top: 10px
                    small
                        font-size: 16px
                        font-family: $font_regular
                        display: block
                        margin-top: 8px
                    h2
                        font-size: 40px
                        font-family: $font_regular
                        margin: 0 5px
                .pricing_items
                    margin: 0
                    padding: 0
                    margin-top: 17px
                    flex: 1 
                    li
                        list-style: none
                        color: $primary_color
                        display: flex
                        align-items: center
                        margin-bottom: 15px
                        font-family: $font_regular
                        i
                            font-size: 18px
                            font-weight: bold
                            margin-right: 7px
                        p
                            font-size: 15px
                            text-align: left
                a
                    background-color: $primary_color
                    height: 35px
                    font-size: 20px
                    font-weight: 500
                    color: white
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
                    width: 100%         
                    
@media screen and (max-width: 1100px)
    .pricing_section
        .pricing_wrapper
            width: $medium
            padding: 3rem 0
            .title
                h2
                    font-size: 27px
                small
                    font-size: 14px
                .switch_plan
                    h4
                        font-family: $font_regular
                        font-size: 12px
                        color: $primary_color
                        transition: all ease-in-out .2s
                    .switch
                        height: 12px
                        width: 40px
                        &.mensual
                            &:after
                                left: 22px
                        &:after
                            width: 20px
                            height: 20px
            .pricing_content
                padding: 3rem 0
                padding-bottom: 0
                aside
                    padding: 20px 20px
                    padding-top: 40px
                    height: 450px
                    .pricing_items
                        li
                            margin-bottom: 12px
                            p
                                font-size: 13px
                    a
                        padding: 20px 15px
                        font-size: 14px
                                                        
@media screen and (max-width: 850px)
    .pricing_section
        .pricing_wrapper
            width: $small
            .title
                h2
                    font-size: 25px
                small
                    font-size: 13px
            .tabs
                font-family: $font_bold
                display: grid
                grid-template-columns: 1fr 1fr 1fr
                grid-gap: 20px
                width: 370px
                padding-top: 1.5rem
                p
                    font-size: 15px
                    cursor: pointer
                    padding: 10px
                    &.active
                        background-color: #17de8b
                        border-radius: 2px 2px 0 0
                        color: #171b26
            .pricing_content
                padding-top: 0
                grid-template-columns: 1fr
                width: 370px
                aside
                    padding: 30px 50px
                    .pricing_items
                        margin-top: 20px
                        flex: 1
                        margin-bottom: 20px
                        li
                            margin-bottom: 12px
                            p
                                font-size: 14px

@media screen and (max-width: 500px)
    .pricing_section
        .pricing_wrapper
            width: $extra-small
            .title
                width: 100%
                padding: 0 20px
                box-sizing: border-box
                h2
                    font-size: 23px
                small
                    font-size: 13px
            .pricing_content
                width: 100%
                padding: 0 20px
                box-sizing: border-box
                aside
                    padding: 30px
            .tabs
                width: 100%
                padding: 0 20px
                box-sizing: border-box
                margin-top: 30px
</style>
