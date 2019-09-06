<template>
    <div class="benefits_container">
        <h5>Beneficios para tu negocio</h5>
        <div class="benefits_box_container">
            <article>
                <img src="@/static/icons/home.png" alt="Sistema de venta">
                <p>Gestión automática </p>
            </article>
            <article>
                <img src="@/static/icons/strategy.png" alt="Trabajadores">
                <p>Control de personal</p>
            </article>
            <article>
                <img src="@/static/icons/quiz.png" alt="Comprobante editable">
                <p>Comprobante personalizable</p>
            </article>
            <article>
                <img src="@/static/icons/cash.png" alt="Herramientas">
                <p>Control de cobros y pagos</p>
            </article>
            <article>
                <img src="@/static/icons/innovation.png" alt="Sistema moderno">
                <p>Sistema intuitivo</p>
            </article>
            <article>
                <img src="@/static/icons/refresh.png" alt="Actualizacion">
                <p>Actualizaciones gratuitas</p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ga: {},
            fbq: {}
        }
    },
    created(){
        if (process.client) {
            this.ga=window.gtag
            this.fbq=window.fbq
        }
    }
}
</script>

<style lang="sass">
@import './assets/css/main'
.benefits_container
    padding: 5rem 20px
    box-sizing: border-box
    background-color: $primary_color
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    h5
        color: white
        font-family: $font_black
        font-size: 32px
        margin-bottom: 40px
        span
            display: inline
            color: $accent_color            
    .benefits_box_container
        display: grid
        width: $large
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr))
        grid-gap: 20px        
        article
            display: flex
            flex-direction: column
            align-items: center
            border-radius: 2px
            padding: 20px
            background-color: white
            p   
                font-family: $font_black     
                font-size: 20px           
                text-align: center
            img
                width: 100px
                margin-bottom: 15px
@media screen and (max-width: 1100px)
    .benefits_container          
        .benefits_box_container        
            width: $medium  
@media screen and (max-width: 850px)
    .benefits_container          
        .benefits_box_container        
            width: $small  
@media screen and (max-width: 500px)
    .benefits_container          
        .benefits_box_container   
            grid-template-columns: 1fr     
            width: $extra-small   
</style>
