<template lang="pug">
  section.article_container
    header-article-section( v-if="article" :article="article" )
    .body_content
      main( v-if="article.body" v-html="toHtml(article.body)") 
    footer-section
</template>

<script>
import HeaderArticleSection from '@/components/blog/HeaderArticle'
import FooterSection from '@/components/landing/Footer'
import { firestore } from '~/plugins/firebase.js'
import marked from 'marked'

export default {
  components: { HeaderArticleSection, FooterSection },
  data() {
    return {
      article: {}
    }
  },
  // firestore ()  {
  //   return {
  //     article: firestore.collection('articles').where("_id", "==", this.getId)
  //   }
  // },            
  async asyncData ({ params }) {
    const ref = firestore.collection('articles').where("_id", "==", parseInt(params.id))
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
.body_content
  display: flex
  justify-content: center
  main
    width: 1065px
    font-family: "c-book", sans-serif
    padding: 2rem 0
    color: #171B26
    p
      line-height: 1.7
      font-size: 15px
@media screen and (max-width: 1100px)
  .body_content
    main
      width: 800px

@media screen and (max-width: 850px)
  .body_content
    main
      width: 450px

@media screen and (max-width: 500px)
  .body_content
    padding: 0 20px
    box-sizing: border-box
    main
      width: 100%
</style>