<template lang="pug">
  section
    header-section( :page="1" )
    services-section
    benefits-section
    pricing-section
    demo-section
    about-section
    clients-section
    footer-section
    script(type='application/ld+json').
      {
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Easybill",
        "legalName":"MAKEASY S.R.L.",
        "url":"https://www.easybill.pe",
        "logo":"https://easybill.pe/_nuxt/img/9ed2535.svg",
        "foundingDate":"2017-12-11",
        "founders":
        [
          {"@type":"Person","name":"Elef Abner Rosales Quispe"},
          {"@type":"Person","name":"Max Houston Ramirez Martel"},
          {"@type":"Person","name":"Thalia Soledad Damian Aguirre"},
          {"@type":"Person","name":"Omar Benjamin Chagua Ramos"}
        ],
        "address":
        {
          "@type":"PostalAddress",
          "streetAddress":"Jiron Tarapaca 160",
          "addressLocality":"Huanuco",
          "addressRegion":"HUANUCO",
          "postalCode":"10010",
          "addressCountry":"PERU"
        },
        "contactPoint":
        {
          "@type":"ContactPoint",
          "contactType":"customer service",
          "telephone":"[+51999017080]",
          "email":"teamakeasy@gmail.com"
        },
        "sameAs":[
          "https://www.facebook.com/Easybill.pe/",
          "https://www.youtube.com/channel/UCvz8-GgLr0z3Ty2cWffH_9w",
          "https://www.instagram.com/easybill.pe/?hl=es-la"
        ]
      }
    script(type='application/ld+json').
      {"@context":"https://schema.org","@graph":[
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Pecios","url":"https://easybill.pe/?section=1"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Clientes","url":"https://easybill.pe/?section=2"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Blog","url":"https://easybill.pe/blog"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Ingresar","url":"https://app.easybill.pe"},
      {"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Registrarte","url":"https://app.easybill.pe/registro"}]}

</template>

<script>
import HeaderSection from '@/components/landing/Header'
import AboutSection from '@/components/landing/About'
import ServicesSection from '@/components/landing/Services'
import PricingSection from '@/components/landing/Pricing'
import BenefitsSection from '@/components/landing/Benefits'
import FooterSection from '@/components/landing/Footer'
import ClientsSection from '@/components/landing/Clients'
import DemoSection from '@/components/landing/Demo'
export default {
  components: {
    HeaderSection,
    AboutSection,
    ServicesSection,
    BenefitsSection,
    PricingSection,
    FooterSection,
    ClientsSection,
    DemoSection
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      },
      title: 'Facturación Electrónica y ventas rápidas en Perú - SUNAT | Easybill',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content:'#17de8b'},
        { hid : 'description', name:'description', content:'Descubre nuestra innovadora solución a facturación electrónica. Ventas rápidas, reportes kardex, facturas, boletas, guías de remisión y mucho más. ' },
        { property: 'og:title', content: 'Facturación Electrónica y ventas rápidas en Perú - SUNAT | Easybill' },
        { property: 'og:description', content: 'Descubre nuestra innovadora solución a facturación electrónica. Ventas rápidas, reportes kardex, facturas, boletas, guías de remisión y mucho más. ' },
        { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/easybill-b9a91.appspot.com/o/landing%2Ffacebook-preview.png?alt=media&token=16577e76-02d9-4351-99f1-8663bbb90b92' },
        { property: 'og:url', content: 'https://easybill.pe' },
        { property: 'og:type', content: 'product' },
        { property: 'fb:app_id', content: '1994748484137426' }
      ]
    }
  }
}
</script>

<style lang="sass">
</style>
