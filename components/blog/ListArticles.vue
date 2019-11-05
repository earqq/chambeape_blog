<template lang="pug">
  div(class="articles_section" )
    div(class="articles_wrapper")
        section(class="articles_content")
          aside(v-for="a in articles" class="client_testimonial" )
            small {{a.created_at | moment("DD [de] MMMM [de] YYYY") }}
            h2 {{a.title}}
            p {{a.body_preview}}
            nuxt-link( :to="{name: 'blog-slug-article', params: { slug: a.slug}}" )
              span Leer Articulo
              i.icon.icon-keyboard_arrow_right
</template>

<script>
import { firestore } from '~/plugins/firebase.js'
export default {
  props: ['articles']
  // firestore ()  {
  //   return {
  //     articles: firestore.collection('articles').orderBy("created_at", "desc")
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
            p
                color: #575F66
                font-size: 15px
                font-family: $font_regular
                line-height: 1.7
                margin-bottom: 15px
                text-align: left
                flex: 1
            h2
                font-family: $font_black
                font-size: 17px
                text-align: left
                margin-bottom: 10px
                color: $primary_color
                font-weight: normal
            small
                color: #575F66
                font-family: $font_regular
                text-align: left
                font-size: 14px
                display: block
                margin-bottom: 5px
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
