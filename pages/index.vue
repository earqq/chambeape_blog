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
import Logo from '~/components/Logo.vue'
import HeaderSection from '@/components/landing/Header'
import AboutSection from '@/components/landing/About'
import ServicesSection from '@/components/landing/Services'
import PricingSection from '@/components/landing/Pricing'
import FooterSection from '@/components/landing/Footer'
import ClientsSection from '@/components/landing/Clients'
import DemoSection from '@/components/landing/Demo'
export default {
  components: {
    Logo,
    HeaderSection,
    AboutSection,
    ServicesSection,
    PricingSection,
    FooterSection,
    ClientsSection,
    DemoSection
  }
}
</script>

<style lang="sass">
</style>
