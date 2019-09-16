<template>
    <div class="try_demo_container">
    <modal-info :openModal="openModal" @closeModal="closeModalCotizar"></modal-info>
        <div class="try_demo_wrapper"><img src="@/assets/img/try_image.svg" alt='Grafico de computadora' />
            <h2>Si siempre haces lo mismo no esperes resultados diferentes.<span></span></h2>
            <p> Si quieres cambiar radicalmente la experiencia de compra de tus clientes.<b> Esto sí es para tí</b>. <br>                
                Le daremos 3 meses gratuitos a los 100 primeros empresarios que quieran empezar a fidelizar a sus clientes. <br>
                ¡No pierdas esta oportunidad!
            </p>   
            <a class="button"
            @click="openModalBrand()" 
            rel="noopener"  > Quiero empezar a fidelizar a mis clientes</a></div>
    </div>
</template>

<script>
import ModalInfo from '@/components/ModalBrand'
export default {
    components: { ModalInfo },
    data(){
        return{
            ga: {},
            fbq: {},
            openModal: false,
        }
    },
    created(){
        if (process.client) {
            this.ga=window.gtag
            this.fbq=window.fbq
        }
    },methods:{
        openModalBrand(){
            this.openModal = true
        },
        closeModalCotizar () {
            this.openModal = false
        }
    }
}
</script>

<style lang="sass">
@import './assets/css/main'
.try_demo_container
    background-color: $primary_color
    display: flex
    justify-content: center
    .try_demo_wrapper
        width: $large
        display: flex
        align-items: center
        padding: 3rem 0
        flex-direction: column
        img
            width: 270px
            margin-bottom: 20px
        h2
            color: white
            font-family: $font_black
            font-size: 32px
            margin-bottom: 10px
            span
                display: inline
                color: $accent_color
        p
            width: 100%
            font-family: $font_regular
            font-size: 18px
            color: #899AAC
            margin-bottom: 20px
            line-height: 1.7
            text-align: center
            strong
              font-family: $font_black
              font-weight: normal
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
            min-width: 200px
            align-self: center
            display: flex
            justify-content: center
            align-items: center
            padding: 23px 20px
            box-sizing: border-box
            border-radius: 2px
            border: 1px solid $accent_color
            i
                font-size: 22px
                margin-left: 20px

@media screen and (max-width: 1100px)
    .try_demo_container
        .try_demo_wrapper
            width: $medium
            h2
                font-size: 27px
                margin-bottom: 15px
            p
                font-size: 16px
            a
                font-size: 14px
                padding: 20px 15px
                min-width: 170px

@media screen and (max-width: 850px)
    .try_demo_container
        .try_demo_wrapper
            width: $small
            img
                width: 250px
            h2
                font-size: 25px
                margin-bottom: 10px
            p
                font-size: 15px
                margin-bottom: 15px
                width: 450px
            a
                font-size: 14px
                padding: 20px 15px
                min-width: 170px                

@media screen and (max-width: 500px)
    .try_demo_container
        .try_demo_wrapper
            width: $extra-small
            padding-left: 20px
            padding-right: 20px
            box-sizing: border-box
            align-items: center
            p
                width: 100%
                text-align: center
                font-size: 15px  
            h2
                text-align: center
                font-size: 23px
            a
                width: 100%
</style>
