<template lang="pug">
  section
    header-section
    list-articles-section
    footer-section
</template>

<script>
import HeaderSection from '@/components/blog/Header'
import ListArticlesSection from '@/components/blog/ListArticles'
import FooterSection from '@/components/landing/Footer'
export default {
  components: {
    HeaderSection,
    ListArticlesSection,
    FooterSection
  }
}
</script>

<style lang="sass">
</style>
