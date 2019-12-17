<template lang="pug">
  div(class="articles_section" )
    div(class="articles_wrapper")
        section(class="articles_content")
          aside(v-for="a in posts" class="client_testimonial" )
            small {{a.created_at | moment("DD [de] MMMM [de] YYYY") }}
            img( :id='a._id' :src='a.url' :alt='a.alt' height=275 @click='addLike()' )   
            a( @click='shareImg(a)')    
              i.icon.icon-whatsapp  Click para compartir 
            br
            a(target='_blank' :href='a.url')  Click para Descargar
            
</template>

<script>
import SocialSharing from '~/plugins/vue-social-sharing'
import { firestore } from '~/plugins/firebase.js'
export default {
  components: { SocialSharing },
  props: ['posts'],
  methods:{
    shareImg(post){
      var filesArray = new Array();
      filesArray[0] = new Image();
      filesArray[0].src = post.url;
      filesArray[0].height=250
      filesArray[0].height=250
      console.log(filesArray)  
      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator.share({
          files: filesArray,
          title: 'Vacation Pictures',
          text: 'Photos from September 27 to October 14.',
        })
        .then(() => alert("compartido"))
        .catch((error) => alert(error));
      } else {
        alert("no soporta");
      }
    },
    addLike(){
        if (process.client) {
          this.ga=window.gtag
          window.gtag('event', 'Click', {'event_category': 'Post', 'event_label': 'Agregar like', 'value': 1})   
        }
    },
    open(){
        if (process.client) {
          this.ga=window.gtag
          window.gtag('event', 'Click', {'event_category': 'Post', 'event_label': 'Compartir post', 'value': 1})   
        }
    }
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

@media screen and (max-width: 850px)
  .articles_section
    .articles_wrapper
        width: $small
        padding: 2rem 0
        .articles_content
            grid-template-columns: 1fr

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
</style>
