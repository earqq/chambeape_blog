<template lang="pug">
  section
    header-section
    services-section
    pricing-section
    demo-section
    about-section
    clients-section
    footer-section
</template>

<script>
import HeaderSection from '@/components/landing/Header'
import AboutSection from '@/components/landing/About'
import ServicesSection from '@/components/landing/Services'
import PricingSection from '@/components/landing/Pricing'
import FooterSection from '@/components/landing/Footer'
import ClientsSection from '@/components/landing/Clients'
import DemoSection from '@/components/landing/Demo'
export default {
  components: {
    HeaderSection,
    AboutSection,
    ServicesSection,
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
      title: 'Facturación Electrónica para Minimarkets en Perú - SUNAT | Easybill',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { hid : 'description', name:'description', content:'Descubre nuestra innovadora solución a facturación electrónica. Ventas rápidas, reportes kardex, facturas, boletas, guías de remisión y mucho más. ' },
      ]
    }
  }
}
</script>

<style lang="sass">
</style>
