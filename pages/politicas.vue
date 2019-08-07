<template lang="pug">
  section
    header-section
    .terminos_section
      .terminos_wrapper
        h2 Politicas de Privacidad
        aside
          p MAKEASY S.R.L. se encuentra comprometida a respetar tu privacidad yconfidencialidad de tu información brindada y generada en nuestro sistemade facturación electrónica EASYBILL.
          
        h3 Divulgación de Información 
        aside
          p Toda información que se nos brinda en el momento de su suscripcióngratuita solo se maneja para brindarle información sobre nuestros servicios.Toda información recibida en el momento de su suscripción mensual o anualse usará en beneficio de su empresa para la emisión de sus comprobanteselectrónicos y el envío a SUNAT. No se brindará información a personasexternas a su empresa sin contar con su consentimiento. La información nose tomará para otros fines diferentes a lo expresado anteriormente.
          p No se requiere el consentimiento del gerente de la empresa cuando se tratade información contenida o destinados a ser contenidos en fuentesaccesibles para el público.
        h3 Seguridad de Información
        aside
          p Comprometidos con la seguridad de su información se cuenta con medidasde seguridad adecuadas que permiten salvaguardar toda informaciónbrindada y generada en el momento del uso de nuestro sistema deFacturación Electrónica EASYBILL. Se almacena toda la información que senos proporciona en un sistema seguro alojado en la nube con accesolimitado a personal designado.
          p Las medidas de seguridad tomadas garantizan la seguridad y evitan laalteración, pérdida, tratamiento o acceso no autorizado.
        h3 Integridad de Información
        aside 
          p La información que se nos brinda debe ser veraces, exactos, y en la medidade lo posible, actualizados, necesarios, pertinentes y adecuados, por el cualMAKEASY S.R.L. utilizará las medidas necesarias para confirmar laconfiabilidad y exactitud de la información. El tratamiento de la informaciónse realiza con respeto de los derechos fundamentales de las empresas y delos derechos que confiere la Ley Peruana N° 29733 de Protección de DatosPersonales.
          p La información que genera en EASYBILL es responsabilidad absoluta de laempresa. No somos responsables de ninguna pérdida, demanda, dañodirecto o indirecto con el uso del Servicio y la información.
        h3 Acceso a Información Personal
        aside 
          p El gerente de la empresa titular de la información tiene derecho a serinformado de forma detallada, sencilla, expresa, inequívoca.
          p La información perteneciente a su empresa puede solicitarla a través de uncorreo electrónico a contactos@easybill.pe o mediante una llamadatelefónica; debe ser solicitado previo, informado, expreso e inequívoco. Sepuede tener acceso a la información solo con el consentimiento del gerentede la empresa, salvo la ley lo solicite.
          p En caso de información sensible el consentimiento para efectos a su accesoademás debe efectuarse por escrito. Aun cuando no mediara elconsentimiento del gerente, el acceso a la información sensible puedeefectuarse cuando la ley lo autorice, siempre que ello atienda a motivosimportantes de interés público.
        h3 Protección y Confidencialidad de Datos Personales
        aside
          p Para proteger la confidencialidad y los derechos de todas las personas queson clientes y/o proveedores de las empresas que hacen uso de nuestroservicio de Facturación Electrónica se viene cumpliendo de acuerdo con laLey Peruana N° 29733 de Protección de Datos Personales.
        h3 Preguntas o Comentarios
        aside
          p En caso tenga consultas o comentarios sobre esta Política de Privacidad,puede hacerlo llegar a través del correo contactos@easybill.pe, Gerente General MAKEASY S.R.L.Huánuco, Perú
    footer-section
</template>

<script>
import HeaderSection from '@/components/landing/Header'
import FooterSection from '@/components/landing/Footer'
export default {
  components: {
    HeaderSection,
    FooterSection
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      },
      title: 'Easybill | Politicas de Privacidad',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { hid : 'description', name:'description', content:'Politicas de Privacidad de nuestro sistema de facturación electrónica.' },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import './assets/css/main'
.terminos_section
    background-color: white
    display: flex
    justify-content: center
    .terminos_wrapper
        width: $large
        display: flex
        align-items: center
        padding: 2rem 0
        flex-direction: column
        text-align: left
        h2, h3
          font-family: $font_black
          font-size: 27px
          width: 100%
          margin-bottom: 15px
          color: $primary_color
        h3
          font-size: 20px
        article
          font-size: 16px
          font-family: $font_regular
          line-height: 1.7
          width: 100%
          margin-bottom: 15px
          display: flex
          align-items: flex-start
        aside
          margin-bottom: 15px
          p
            margin-bottom: 10px  
            font-size: 16px
            font-family: $font_regular
            line-height: 1.7
            width: 100%
        strong
          color: $primary_color
          font-size: 22px
          font-family: $font_black
          margin-right: 10px
          margin-top: -3px
          min-width: 45px
      
@media screen and (max-width: 1100px)
  .terminos_section
    .terminos_wrapper
        width: $medium

@media screen and (max-width: 850px)
  .terminos_section
    .terminos_wrapper
        width: $small
        padding: 4rem 0
        h2
          font-size: 25px
        article
          font-size: 15px  
        strong
          font-size: 20px
          min-width: 30px 
        aside p
          font-size: 15px

@media screen and (max-width: 500px)
  .terminos_section
    .terminos_wrapper
        width: $extra-small
        padding-left: 20px
        padding-right: 20px
        box-sizing: border-box
</style>
