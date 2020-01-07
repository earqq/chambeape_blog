<template  lang="pug">
  section.article_container
    header-section( :article="article" )
    .body_content
      main( v-if="article.body" v-html="toHtml(article.body)")
    footer-section
    script(v-html='jsonld' type='application/ld+json')
</template>

<script>
import HeaderSection from '@/components/blog/HeaderArticle'
import FooterSection from '@/components/landing/Footer'
import Info from '@/components/Info'
import { firestore } from '~/plugins/firebase.js'
import marked from 'marked'

export default {
  components: { HeaderSection, FooterSection, Info },
  data() {
    return {
      article: {
        _id:'',
        slug:'',
        title:'',
        created_at:'',
        description_google:''
      },
      jsonld: {
     
      },
     
    }
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      itemscope:'',
      itemtype:'http://schema.org/WebPage'
      },
      link:[
        {
          rel:'canonical',href:`https://easyjobs.site/blog/${this.article.slug}`,
        },
        {
          rel:'amphtml',href:`https://easyjobs.site/amp/blog/${this.article.slug}`
        }
      ],
      title: this.article.title + ' | Easyjobs',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content: this.article.description_google },
        { property: 'og:title', content: this.article.title + ' | Easyjobs' },
        { property: 'og:description', content: this.article.description_google },
        { property: 'og:image', content: this.article.cover },
        { property: 'og:url', content: `https://easyjobs.site/blog/${this.article.slug}` },
        { property: 'og:type', content: 'product' },
        { property: 'fb:app_id', content: '1994748484137426' }
      ]
    }
  },
  mounted(){
    this.jsonld={
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
            "@id":"https://easyjobs.site/"+this.article.slug+"/#webpage",
            "url":"https://easyjobs.site/"+this.article.slug+"",
            "inLanguage":"es-PE",
            "name":this.article.title,
            "isPartOf":{
              "@id":"https://easyjobs.site/#website"
            },
            "datePublished":"2019-12-16T20:12:54+00:00",
            "dateModified":"2019-12-16T09:00:09+00:00",
            "description":this.article.description_google 
          },   
        {
            "@type": "CreativeWorkSeries",
            "name": this.article.title ,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "bestRating": "5",
                "ratingCount": "119"
            }
          },
          {
            "@type": "BlogPosting",
            "headline": this.article.title ,
            "description": this.article.description_google ,
            "datePublished": this.article.created_at ,
            "dateModified": this.article.created_at ,
            "author": {
                "@type": "Person",
                "@id": "#makeasy",
                "name": "MAKEASY"
            },
            "image": {
                "@type": "ImageObject",
                "url": this.article.cover,
                "width": 600,
                "height": 600
            },
            "interactionStatistic": [
                {
                    "@type": "InteractionCounter",
                    "interactionType": "http:/schema.org/CommentAction",
                    "userInteractionCount": "9"
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
            "mainEntityOfPage": "https://easyjobs.site/estados-para-whatsapp"

          },
        ]
    }    
  },
  async asyncData ({ params }) {
    const ref = firestore.collection('articles').where("slug", "==", params.slug)
    let snap
    try {
      snap = await ref.get()
    }
    catch(e) {console.error(e)}
    return {article: snap.docs[0].data()}
  },          
  methods: { 
    toHtml (body) {
      return marked(body)
    }
  }
}
</script>

<style lang="sass">
@import './assets/css/main'

.body_content
  display: grid
  grid-template-columns: 1fr 300px
  grid-gap: 20px
  justify-content: center
  width: 1065px
  margin: 0 auto
  main
    font-family: "c-book", sans-serif
    padding: 2rem 0
    color: #171B26
    line-height: 1.8
    font-size: 17px
    img
      width: 100%
      margin-bottom: 5px
    p, li
      line-height: 1.8
      font-size: 17px
    a
      color: #171B26
    h2, h3, h4, h5, h6, strong
      font-weight: normal
      font-family: "c-bold", sans-serif
      margin-top: 10px
      margin-bottom: 10px
      line-height: 1.2
      letter-spacing: -0.02rem
    strong
      display: block
    blockquote
      border-left: 2px solid $accent_color
      padding: 5px
      padding-left: 20px
      background-color: #F2F4F5
@media screen and (max-width: 1100px)
  .body_content
    grid-template-columns: 1fr
    width: 800px
@media screen and (max-width: 850px)
  .body_content
    width: 450px
    main
      padding: 1rem 0
@media screen and (max-width: 500px)
  .body_content
    padding: 0 20px
    box-sizing: border-box
    width: 100%
    main
      line-height: 1.7
      font-size: 15px
      p, li
        line-height: 1.7
        font-size: 15px
      h1 
        font-size: 22px
      h2
        font-size: 20px
      h3
        font-size: 18px
</style>