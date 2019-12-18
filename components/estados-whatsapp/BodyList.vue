<template lang="pug">
  div
    div(class='text_image')
        h2 Frases para estados de amor para whatsapp
        p El amor ascendía entre nosotros como la luna entre las dos palmeras que nunca se abrazaron. El íntimo rumor de los dos cuerpos hacia el arrullo un oleaje trajo, pero la ronca voz fue atenazada, fueron pétreos los labios. El ansia de ceñir movió la carne, esclareció los huesos inflamados, pero los brazos al querer tenderse murieron en los brazos. Pasó el amor, la luna, entre nosotros y devoró los cuerpos solitarios. Y somos dos fantasmas que se buscan y se encuentran lejanos.
        li Si supieras lo enamorado que estoy, De ti, y dirigido a tu corazon voy. Con palabras llenas de sentimiento.  A la persona que me roba el aliento.
        li Tu que me besas intensamente. Hasta ponerme demente. Tu que me seduces con tu caminar. Yo nunca te llegaré a cambiar.
        li Tu largo cabello, y pequeña estatura Eres una mujer llena de hermosura. Con tu boca que roba mi atención. A tus ojos hago alusión. Que son tan hermosos. [Escritor: ldAguiarg]
    div(class="articles_section" )
      div(class="articles_wrapper")
          section(class="articles_content")
            aside( class="client_testimonial" )
              small Tú eres mi cielo ☺️☺️
              img( src='@/assets/img/imagenes-de-amor/cielos.jpg' alt='Tu eres mi cielo' height=300 width=350  )
            aside( class="client_testimonial" )
              small Me encantas 😍😍
              img( src='@/assets/img/imagenes-de-amor/encata_tenerte.jpg' alt='Tu eres mi cielo' height=300 width=350  ) 
            aside( class="client_testimonial" )
              small Tu imborrable sonrisa 🥺🥺
              img( src='@/assets/img/imagenes-de-amor/me_gusta_sonrisa.jpg' alt='Tu sonrisa' height=300 width=350  ) 
            aside( class="client_testimonial" )
              small Siempre con tigo 😻😻
              img( src='@/assets/img/imagenes-de-amor/otros_365_tigo.jpg' alt='Siempre con tigo' height=300 width=350  ) 
            aside( class="client_testimonial" )
              small Somos la mejor combinación 🥰🥰
              img( src='@/assets/img/imagenes-de-amor/panquesito.jpg' alt='Quequito' height=300 width=350  ) 
            aside( class="client_testimonial" )
              small Me terminaste gustando 🥺🥺
              img( src='@/assets/img/imagenes-de-amor/terminaste_gustando.jpg' alt='Terminaste gustando' height=300 width=350  ) 
            
</template>

<script>
import SocialSharing from '~/plugins/vue-social-sharing'
export default {
  components: { SocialSharing },
  props: ['posts'],
  methods:{   
    addLike(){
        if (process.client) {
          this.ga=window.gtag
          window.gtag('event', 'Click', {'event_category': 'Post', 'event_label': 'Compartir imagen', 'value': 1})   
        }
    },
  }
  // firestore ()  {
  //   return {
  //     posts: firestore.collection('posts').orderBy("created_at", "desc")
  //   }
  // }

}
</script>

<style lang="sass">
@import './assets/css/main'
.text_image
  align-items: center
  justify-content: center
  h2  
    font-family: Barlow
    text-align: center
    font-size: 20px
    padding: 3px
    margin-bottom: 10px    
    margin-top: 10px    
  p
    font-family: Barlow
    text-align: center
    margin-left: 150px
    line-height: 25px
    margin-right: 150px
    margin-bottom: 25px
    font-size: 15px    
  li 
    margin-top: 20px
    font-family: Barlow
    text-align: center
    font-size: 15px
.articles_section
  background-color: #f2f4f5
  display: flex
  justify-content: center
  .articles_wrapper
      width: $large
      display: flex
      align-items: center
      padding: 3rem 0
      flex-direction: column
      .articles_content
          display: grid
          grid-template-columns: repeat(3, 1fr)
          grid-gap: 20px
          aside
            background-color: white
            border-radius: 2px
            padding: 30px
            display: flex
            flex-direction: column           
            small
                color: #575F66
                font-family: $font_regular
                text-align: left
                font-size: 14px
                display: block
                margin-bottom: 5px
            img
              margin-bottom: 18px
            a
              color: $accent_color
              font-family: $font_bold
              text-align: left
              font-size: 15px
              display: block
              margin-top: 10px
              display: flex
              align-items: center
              text-decoration: none
              &:hover
                span
                  text-decoration: underline
              i
                margin-left: 10px
                margin-top: -3px
                font-size: 20px

@media screen and (max-width: 1100px)
  .articles_section
    .articles_wrapper
        width: $medium
        .articles_content
          grid-template-columns: repeat(2, 1fr)
          aside
            img
                margin-bottom: 18px
                height: 275px
                width: 325px
          

@media screen and (max-width: 850px)
  .articles_section
    .articles_wrapper
        width: $small
        padding: 2rem 0
        .articles_content
          grid-template-columns: 1fr
          aside
            img
              margin-bottom: 18px
              height: 275px
              width: 325px

@media screen and (max-width: 500px)
  .articles_section
    .articles_wrapper
        padding: 0px
        box-sizing: border-box
        width: $extra-small
        .articles_content
          grid-gap: 0
          aside
            border-bottom: 1px solid rgba($primary_color, .2)
            border-radius: 0
            img
              margin-bottom: 18px
              height: 275px
              width: 325px
</style>
