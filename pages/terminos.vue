<template lang="pug">
  section
    header-section
    .terminos_section
      .terminos_wrapper
        h1 Términos y Condiciones.
        aside
          p MAKEASY S.R.L. empresa legalmente constituida en Perú con número deidentificación tributaria RUC 20602768059, brinda la plataforma EASYBILL como servicio de Facturación Electrónica. 
        h2 Términos
        ul 
          li El término contrato hace referencia al acuerdo entre las dos partes.
          li El término sitio web hace referencia al sitio donde presta losservicios, que se puede acceder con el usuario principal o secundariogenerado.
          li El término servicio se refiere a la aplicación en el sitio web condominio app.easybill.pe.
          li El término usuario principal hace referencia a la empresa con RUCque se utilizó para registrarse su cuenta.
          li El término usuario secundario hace referencia a la persona designadacomo administrador o trabajador por el Gerente de la empresa.
          li El término Plan hace referencia a las características y beneficios quetiene la empresa según el pago que efectúe.
        h2 Aceptación
        aside 
          p El usuario principal de EASYBILL acepta lo dispuesto en este contrato y ensus Términos y condiciones. El usuario principal que no esté de acuerdo con estos términos y condiciones no podrá hacer uso del servicio EASYBILL prestado por MAKEASY S.R.L.
          p La aceptación se desarrolla con el contrato entre las dos partes, se celebrade dos modalidades: presencial con un contrato físico y virtual adjuntando el contrato firmado.
        h2 Capacidad de Celebración de Contratos
        aside 
          p La persona capacitada para celebrar el contrato es el representante legal dela empresa y se responsabiliza por las acciones que se realizan en EASYBILL.
          p En caso de incumplimiento del contrato firmado de cualquiera de las dos partes se dará por terminado el contrato. Teniendo opción a resolver los inconvenientes de acuerdo a la gravedad del incumplimiento suscitado.
        h2 Registro de Cuenta y Usuario
        aside 
          p MAKEASY S.R.L. presta servicio de Facturación Electrónica  que se accede através de nuestro sitio web www.easybill.pe Los usuarios principales y secundarios pueden acceder a nuestro servicio con sus credenciales brindados y generados por autorización del Gerente General de la empresa.
          p EASYBILL permite el ingreso de una cantidad limitada de usuarios según el plan en que se realiza el pago, teniendo conocimiento de los planes y sus beneficios. Pueden tener acceso solo los usuarios autorizados con el nivel asignado en el momento de su creación, los usuarios no pueden ser reemplazados por otras personas que conozcan las credenciales de pasaresto no nos hacemos responsables por el uso impropio de la información encontra de la empresa. Además en caso de verse en este escenario y se tiene conocimiento sobre este hecho informar de inmediato para dar de baja al o los usuarios detectados.
          p Los usuarios tienen acceso al sistema durante el mes de pago realizado osegún el plan elegido y pagado.
          p Se brinda niveles de usuarios: administrador y trabajador. El usuario con nivel administrador puede acceder a todas las funcionalidades con la que cuenta su plan de suscripción, mientras que el usuario a nivel trabajador solo tendrá acceso a la sección ventas rápidas que le permitirá generar facturas y boletas electrónicas, así como algunas configuraciones básicos necesarias para realizar ventas.
        h2 Descripción del Servicio
        aside 
          p MAKEASY brinda el servicio de Facturación Electrónica EASYBILL mediante dos modalidades gratuito y pagado. El plan gratuito puede usarlo durante un mes, que le permite probar todas las funcionalidades antes de elegir un plan. El usuario principal adquiere un permiso intransferible para usar el sistema con los beneficios del plan elegido, pero en ningún caso adquiere propiedad sobre el sistema.
          p Los derechos de autor sobre las obras de software que componen el sistemason de titularidad de MAKEASY S.R.L. y bajo ningún motivo y momento de éstos términos se comprenderán como transferidos al usuario. El servicio consiste el uso del sistema EASYBILL disponible en app.easybill.pe.
          p El usuario principal es conocedor del plan por el que está pagando, no nos hacemos responsables por los errores cometidos por el usuario en  el momento de elegir un plan ni de la información ingresada al usar el sistema.
        h2 Alcance y Nivel de Servicio
        aside 
          p El sistema EASYBILL se encuentra disponible el 99% del tiempo, el 1% se toma para realizar mantenimiento y actualizaciones al sistema. Las diferentes fallas e inconvenientes ocasionados por agentes externos(conexión de internet, hardware, etc.) a EASYBILL no serán aceptadas bajo ningún concepto como responsabilidad de MAKEASY S.R.L. 
          p MAKEASY S.R.L. brindará información anticipada sobre actualizaciones del sistema EASYBILL.
          p El representante legal de la empresa se compromete a informar el decesodel presente contrato con un promedio de 3 meses.
        h2 Medios de Pago
        aside 
          p El pago que se realiza por el servicio de Facturación Electrónica es anticipado, el usuario principal mediante el presente acepta realizar el pago días antes de iniciar el siguiente mes de uso.
          p EASYBILL cuenta con dos pasarelas de pago online: 
          p PAGO EFECTIVO: la pasarela de pago te permite generar un código CIP conel que puedes realizar el pago en cualquier agente más cercano a ti a nivel nacional. Para realizar el pago debes dirigirte a la sección PAGO en EASYBILL (https://app.easybill.pe/main#/company/pays) a continuación seleccionar Crear Pago y se mostrará la opción PagoEfectivo, puede seleccionar Depósitos en efectivo (pagos en cualquier agente) o Transferencia Bancaria(pagos por banca internet o banca móvil), luego de seleccionar cualquiera de los dos finalizar el pago haciendo click en Pagar, se generará un código CIP y debe realizar el pago.
          p CULQUI: con la pasarela debe ingresar datos de su tarjeta para que se realice el pago. Para realizar el pago debes dirigirte a la sección PAGO en EASYBILL (https://app.easybill.pe/main#/company/pays) a continuación seleccionar Crear Pago y se mostrará la opción Tarjeta, en el formulario quese muestra debe ingresar el Número de tarjeta, mes de vencimiento de sutarjeta, año de vencimiento de su tarjeta, CVV y su correo electrónico, para finalizar su pago debe hacer click en Pagar y el pago ya se encuentra realizado. Los datos ingresados de su tarjeta no son verificados por MAKEASY S.R.L. por lo que no se responsabiliza por la información incorrecta que se ingrese.
          p El usuario principal afirma y acepta bajo juramento que sus ingresos no tienen relación con ningún tipo de acto ilegal: lavado de   activos,narcotráfico, terrorismo u otro delito.
    footer-section
</template>

<script>
import HeaderSection from '@/components/landing/Header'
import FooterSection from '@/components/landing/Footer'
export default {
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>

<style lang="sass">
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
        ul
          padding: 0
          margin-bottom: 10px
          li
            font-family: $font_regular
            font-size: 15px
            margin-bottom: 5px
        h1, h2
          font-family: $font_black
          font-size: 27px
          width: 100%
          margin-bottom: 15px
          color: $primary_color
        h2
          font-size: 20px
        article
          font-size: 15px
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
            font-size: 15px
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
        h1
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
