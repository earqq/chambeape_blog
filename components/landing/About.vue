<template>
  <div class="about_section">
    <div class="about_wrapper">
      <div class="about_description">
        <br>
        <h2>
            ¿Cómo emitir factura electrónica? <span>.</span>
        </h2>
        <p>
          Para emitir facturas electrónicas tienes que seguir 3 simples pasos:
        </p>
        <li>Regístrarte en nuestro sistema de venta Easybill.</li>
        <li>Crear un usuario secundario en SUNAT</li>
        <li>Adquirir un certificado digital para firmar tus comprobantes.</li>
        <br>
        <p>Te lo hacemos más facil, solo contáctanos al 980 687 918 y hacemos todo el proceso por tí.</p>
      </div>
      <img src="@/assets/img/about_image.svg" alt="Persona usando computadora">
    </div>
    <div class="about_numbers">
      <div class="number">
          <b> {{docs}} </b>
          <p>Comprobantes Emitidos</p>
      </div>
      <div class="number">
          <b> +40000 </b>
          <p>Papeles Ahorrados</p>
      </div>
      <div class="number">
          <b> {{800+tenants}} </b>
          <p>Usuarios</p>
      </div>
      <div class="number">
          <b> {{items}} </b>
          <p>Productos y Servicios</p>
      </div>
    </div>
    <script v-html='jsonld' type='application/ld+json'></script>
  </div>
</template>

<script>
export default {
    data () {
      const jsonld={       
          "@context": "http://schema.org",
          "@type": "Question",
          "name": "¿Cómo emitir factura electrónica?",
          "upvoteCount": "190",
          "text": "¿Cómo puedo empezar a emitir comprobantes electrónicos hacia la SUNAT?",
          "dateCreated": "2019-11-04T20:07Z",
          "author": {
              "@type": "Person",
              "name": "EASYBILL"
          },
          "answerCount": "4",
          "acceptedAnswer": {
              "@type": "Answer",
              "upvoteCount": "1300",
              "text": "Para emitir facturas electrónicas tienes que  registrarte en un Sistema de venta como Easybill, crear un usuario secundario en SUNAT y adquirir un certificado digital para firmar tus comprobantes electrónicos.",
              "dateCreated": "2019-11-01T22:01Z",
              "author": {
                  "@type": "Person",
                  "name": "Easybill"
              }
          },
          "suggestedAnswer": {
              "@type": "Answer",
              "upvoteCount": "39",
              "text": "Para emitir facturas electrónicas tienes que darte de alta como emisor electrónico en SUNAT con tu usuario secundario y registrarte en un sistema de venta.",
              "dateCreated": "2019-11-06T21:11Z",
              "author": {
                  "@type": "Person",
                  "name": "Easybill1"
              }
          }
      }
      return {
            docs: 0,
            items: 0,
            tenants: 0,
            ga: {},
            jsonld
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
      li
        color: #575F66
        font-size: 17px
        font-family: $font_regular
        line-height: 1.7
        margin-bottom: 15px             
    img
      width: 400px
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
        li
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
        li
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
        li
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
