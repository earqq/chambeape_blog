<template lang="pug">
  section.main_blog
    header-section( :last_post="last_post" )
    body-list( :posts="posts" )
    footer-section
    script(v-html='jsonld' type='application/ld+json')
</template>


<script>
import HeaderSection from '@/components/frases-de-amor/Header'
import BodyList from '@/components/frases-de-amor/BodyList'
import FooterSection from '@/components/landing/Footer'
import { firestore } from '~/plugins/firebase.js'

export default {
  components: {
    HeaderSection,
    BodyList,
    FooterSection
  },
  data() {
    const jsonld={       
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"WebSite",
            "@id":"https://easyjobs.site/#website",
            "url":"https://easyjobs.site/",
            "name":"Easyjobs",
            "potentialAction":{
              "@type":"SearchAction",
              "target":"https://easyjobs.site/?s={search_term_string}",
              "query-input":"required name=search_term_string"
            }
          },
          {
            "@type":"WebPage",
            "@id":"https://easyjobs.site/frases-de-amor/#webpage",
            "url":"https://easyjobs.site/frases-de-amor",
            "inLanguage":"es-PE",
            "name":"Imagenes de amor para compartir a whatsapp",
            "isPartOf":{
              "@id":"https://easyjobs.site/#website"
            },
            "datePublished":"2019-12-16T20:12:54+00:00",
            "dateModified":"2019-12-16T09:00:09+00:00",
            "description":"Galería de frases de amor para compartir rapidamente por whatsapp. Para demostrar tus sentimientos con una imagen."
          },
          {
            "@type": "CreativeWorkSeries",
            "name": "Frases de amor para mi novio",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "bestRating": "5",
                "ratingCount": "115"
            }
          },
          {
            "@type": "BlogPosting",
            "headline": "Frases de amor para mi novio",
            "description": "Galería de frases de amor para compartir rapidamente por whatsapp. Para demostrar tus sentimientos con una imagen.",
            "datePublished": "2019-12-17",
            "dateModified": "2019-12-17",
            "author": {
                "@type": "Person",
                "@id": "#makeasy",
                "name": "MAKEASY"
            },
            "image": {
                "@type": "ImageObject",
                "url": "https://firebasestorage.googleapis.com/v0/b/easyjobs-7eb74.appspot.com/o/articles%2F1574462371464-91c679c1f56d070532d57804028b373e.jpg?alt=media&token=9241fd91-cca7-4516-a4f5-049617cb7a7e",
                "width": 600,
                "height": 600
            },
            "interactionStatistic": [
                {
                    "@type": "InteractionCounter",
                    "interactionType": "http:/schema.org/CommentAction",
                    "userInteractionCount": "8"
                }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "MAKEASY",
              "url": "https://makeasy.io",
              "logo" :{
                "@type": "ImageObject",
                "url": "https://makeasy.io/public/img/easyjobs.jpg"
              }
            },
            "mainEntityOfPage": "https://easyjobs.site/frases-de-amor"

          },
          {
            "@context": "http://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
            "@type": "ListItem",
            "position": 1,
            "item":
              {
                "name": "Ando tan textual que podria comerte a versos..",
                "url":"https://easyjobs.site/frases-de-amor"
              }
            },
            {
            "@type": "ListItem",
            "position": 2,
            "item":
              {
                "name": "La mejor paradoja del amor es que, sin dejar de ser uno mismo, de repente te conviertes en dos.",
                "url":"https://easyjobs.site/frases-de-amor#paradoja"
              }
            },
            {
            "@type": "ListItem",
            "position": 3,
            "item":
              {
                "name": "Me di cuenta de que estaba enamorado de ti cuando, de repente, no quería irme a dormir: la vida real superaba a mis sueños.",
                "url":"https://easyjobs.site/frases-de-amor#enamorado"
              }
            },
            {
            "@type": "ListItem",
            "position": 4,
            "item":
              {
                "name": "Qué cortas se quedan las palabras para expresar lo que siento por ti. Si las letras de verdad pudieran decirte cuánto te quiero… Eres mi vida entera.",
                "url":"https://easyjobs.site/frases-de-amor#palabras"
              }
            },
            {
            "@type": "ListItem",
            "position": 5,
            "item":
              {
                "name": "No me importa tener que atravesar el más oscuro sendero, si es que al finalizar el camino tu luz me estará esperando.",
                "url":"https://easyjobs.site/frases-de-amor#sendero"
              }
            }            
            ],
            "itemListOrder": "http://schema.org/ItemListOrderDescending",
            "name": "Frases de amor para mi novio"
          }
        ]
    }
    return {
      jsonld,
      posts: [],
      last_post: {}
    }
  },
  head () {
    return {
      htmlAttrs: {
      itemtype:'http://schema.org/WebPage'
      },
      link:[
        {
          rel:'canonical',href:'https://easyjobs.site/frases-de-amor', 
          
        }
      ],
      title: '24 Frases de amor de Romeo para su novia Julieta',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content:'Las mejores frases de amor basados en el gran amor que tuvo Romeo por Julieta. Demuestra tus sentimientos una frase de amor. Envialo por whatsapp en 3 segundos |  Reconquistar tu novio con imagenes de amor' },
        { property: 'og:title', content: '24 Frases de amor para que tu novio no te deje. 【◁】' },
        { property: 'og:description', content: 'Las mejores frases de amor basados en el gran amor que tuvo Romeo por Julieta. Demuestra tus sentimientos una frase de amor. Envialo por whatsapp en 3 segundos | Reconquistar tu novio con imagenes de amor' },        
        { property: 'og:url', content: 'https://easyjobs.site/frases-de-amor' },
        { property: 'og:type', content: 'product' },
        { property: 'fb:app_id', content: '1994748484137426' }
      ]
    }
  },
  async asyncData ({ params }) {
    const ref = firestore.collection('posts').orderBy("created_at", "desc")
    let snap
    try {
      snap = await ref.get()
    }
    catch(e) {console.error(e)}
    let result = []
    snap.docs.map(s => result.push(s.data()))    
    return {posts: result, last_post: snap.docs[0].data()}
  }
}
</script>

<style lang="sass" scoped>
@import './assets/css/main'
section.main_blog
  background-color: #f2f4f5
aside.card_register
  height: fit-content
  border-radius: 2px
  background-color: $primary_color
  overflow: hidden
  width: 1065px
  margin: 0 auto
  display: flex
  align-items: center
  margin-bottom: 2rem
  .description
    padding: 20px
    box-sizing: border-box
    h3
      font-family: $font_black
      font-weight: normal
      text-align: left
      font-size: 20px
      color: white
      line-height: 1.3
    p
      font-family: $font_regular
      margin-top: 10px
      margin-bottom: 15px
      text-align: left
      color: rgba(white, .7)
      line-height: 1.4
    .button_login
      padding: 12px 20px
      box-sizing: border-box
      color: $primary_color
      border-radius: 2px
      background-color: $accent_color
      border: 1px solid $accent_color
      width: 200px
      display: flex
      text-decoration: none
      justify-content: center
      align-items: center
      font-family: $font_bold
      font-size: 15px
  .image_wrap
    background-color: transparent
    padding: 10px 30px
    img
      width: 220px
      margin: 0 auto
      display: block

@media screen and (max-width: 1100px)
  aside.card_register
    width: 800px
    .image_wrap
      img
        width: 200px

@media screen and (max-width: 850px)
  aside.card_register
    width: 450px
    display: block
    .image_wrap
      padding: 10px 20px
      img
        margin-top: 10px
    .description
      h3, p
        text-align: center
      p
        margin-bottom: 20px
        margin-top: 10px
      .button_login
        width: 100%

@media screen and (max-width: 550px)
  aside.card_register
    width: calc(100% - 40px)
    margin: 20px
    margin-bottom: 2rem
</style>
