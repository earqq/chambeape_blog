<template>
  <div class="about_section">
    <div class="about_wrapper">
        <img  src="@/assets/img/fidelizar.png"  alt="Persona con familia">
        <div class="about_description">
            <br>
        <h2>
            Sistema de venta 2.0 <span></span>
        </h2>
        <p>
          Por eso estamos desarrollando un nuevo concepto de sistema de venta(2.0) en el que tu cliente es la prioridad.<br>
          Un sistema que te brindará las herramientas necesarias para poder fidelizar  a tu cliente.<br>
          - Ofertas personalizadas.<br>
          - Seguimiento de compras y ventas.<br>
          - Reportes personalizados por cliente.<br>
          - Recordatorios de fechas especiales.<br>
          - Envio de ofertas masivas.<br>
          - Diseñar tu comprobante con los valores de tu empresa.<br>
          - Aplicativo especial para tu cliente y mucho más. <br>        <br>  
          Un sistema que te ayudará a mejorar la experiencia de compra de las personas en tu local.<br><br>
          En conclusión un sistema de venta para que engrias a tu cliente y se enamore de tu marca. <br>


        </p>
        <p>PD: Si tú solamente quieres cumplir con la obligación de SUNAT para emitir comprobantes electrónicos <b>esto NO es para tí</b>.</p>
        </div>
    </div>   
  </div>
</template>

<script>
export default {
    data () {
        return {
            docs: 0,
            items: 0,
            tenants: 0,
            ga: {},
        }
    },
    created() {
        if (process.client) {
          this.ga=window.gtag
          window.gtag('event', 'Vista', {'event_category': 'Landing page', 'event_label': 'Llegada a easybill', 'value': 1})   
        }
        this.getData();
    },
    methods: {
        getData() {
            this.$axios.get("https://app.easybill.pe/api/invoices/number")
            .then(res => {
            this.docs = res.data.data.number;
            })
            .catch(err => { 
            console.log(err)
            });
        
           this.$axios.get("https://app.easybill.pe/api/items/number")
            .then(res => {
            this.items = res.data.data.number;
            })
            .catch(err => { 
            console.log(err)
            });
           this.$axios.get("https://app.easybill.pe/api/tenants/number")
            .then(res => {
            this.tenants = res.data.data.number;
            })
            .catch(err => { 
            console.log(err)
            });
        },
    }
}
</script>

<style lang="sass">
@import './assets/css/main'
.about_section
  display: flex
  align-items: center
  flex-direction: column
  .about_wrapper
    width: $large
    display: flex
    justify-content: space-between
    align-items: center
    .about_description
      text-align: left
      width: 500px
      b
        color: $accent_color
        font-size: 16px
        margin-bottom: 5px
        margin-top: 4rem
        font-family: $font_bold
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
        margin-bottom: 15px                
    img
      width: 500px
  .about_numbers
    width: $large
    display: grid
    grid-template-columns: repeat(4, 1fr)
    padding: 4rem 0
    .number
        text-align: left
        b
            font-family: $font_bold
            color: $accent_color
            font-size: 32px
        p 
            font-family: $font_regular
            font-size: 17px
            color: $primary_color
            margin-top: 3px

@media screen and (max-width: 1100px)
  .about_section
    .about_wrapper
      width: $medium
      .about_description
        width: 400px
        b
          font-size: 14px
          margin-bottom: 5px
          margin-top: 4rem
        h2
          font-size: 27px
          margin-bottom: 15px
        p
          font-size: 16px
      img
        width: 350px  
    .about_numbers
      width: $medium
      .number
        b
          font-size: 27px
        p
          font-size: 15px

@media screen and (max-width: 850px)
  .about_section
    .about_wrapper
      width: $small
      flex-direction: column-reverse
      .about_description
        text-align: center
        width: 450px
        b
          font-size: 14px
          margin-top: 2rem
        h2
          font-size: 25px
        p
          font-size: 15px
          margin-bottom: 0
      img
        width: 250px  
    .about_numbers
      width: $small
      padding: 1.5rem 0
      grid-template-columns: repeat(2, 1fr)
      grid-gap: 15px
      .number
        text-align: center
        border-radius: 2px
        box-sizing: border-box
        b
          font-size: 25px
        p
          font-size: 13px

@media screen and (max-width: 500px)
  .about_section
    .about_wrapper
      width: $extra-small
      padding: 0 20px
      box-sizing: border-box
      .about_description
        width: $extra-small
        text-align: center
        b
          font-size: 13px
          margin-top: 20px
          display: block
        h2
          font-size: 20px
        p
          font-size: 15px
          text-align: left
    .about_numbers
      width: $extra-small
      padding-left: 20px
      padding-right: 20px
      box-sizing: border-box
      .number
        text-align: left
        b
          font-size: 22px
        p
          font-size: 13px
          line-height: 1.4

</style>
