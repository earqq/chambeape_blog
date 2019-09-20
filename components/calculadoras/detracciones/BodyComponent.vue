<template>
    <div class="clients_section" id="clients">
            <div class="clients_wrapper">
                <div class="title calc">
                    <h2>Calculadora de detracciones </h2>
                    <br>
                    <table>
                        <tbody>
                            <tr>
                                <td><span>Importe de factura</span></td>
                                <td> <input type='number' @keyup="getDetraction();"  v-model='base' class='field_form'></td>
                            </tr>
                            <tr>
                                <td><span>Porcentaje</span></td>
                                <td>  
                                    <select v-model='percent' @change='getDetraction();'>
                                        <option value='4'>4%</option>
                                        <option value='9'>9%</option>
                                        <option value='10'>10%</option>
                                        <option value='12'>12%</option>
                                        <option value='15'>15%</option>
                                    </select>
                                </td>
                            </tr>                            
                            <tr>
                                <td><span>Detracción</span></td>
                                <td>   <input type='number' @keyup="getDetraction2()" v-model='total' class='field_form'></td>
                            </tr>
                        </tbody>
                    </table>                  
                </div>               
            </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selectQuote: 1,
            mobile: false,
            base:0,
            percent:4,
            total:0,

        }
    },
    methods:{
        getDetraction(){
            let base=parseFloat(this.base)
            let percent=this.percent
            this.total=(base*percent/100).toFixed(2)
        },
        getDetraction2(){
            let total=parseFloat(this.total)
            let percent=this.percent
            this.base=(total/percent*100).toFixed(2)
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
        .calc
            padding: 20px
            border-radius: 10px            
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
            table
                tr td
                    padding: 10px        
                    span
                        font-weight: bold
                    input
                        padding: 5px
                        border-radius:  10px
                        font-size: 14px
                    select 
                        padding: 5px
                        border-radius:  10px
                        font-size: 14px
                        option
                            padding: 5px
                            border-radius:  10px
                            font-size: 14px
            background: #899AAC

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
                    font-size: 20px
</style>
