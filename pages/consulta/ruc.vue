<template >
  <section class="login_container">
		<a href="https://easybill.pe/" class="logo_wrapper">
			<img src="@/assets/img/logo_easybill.svg" alt="Logo easybill"  />
		</a>
		<div class="login_content">
      <div v-if="result" class="login_wrapper box_results">
        <aside>
          <i @click="result = null;ruc=''" class="icon icon-keyboard_arrow_left"></i>
          <span>
            Resultados
          </span>
        </aside>
        <div class="results">
          <span  @click='textCopy(result.RUC)'  title='Click para copiar' >
            <strong>RUC</strong>
            <p>{{result.RUC}}</p>
          </span>
          <span @click='textCopy(result.RAZON)'  title='Click para copiar' >
            <strong>Razón Social</strong>
            <p>{{result.RAZON}}</p>
          </span>
          <span>
            <strong>Estado</strong>
            <p>{{result.ESTADO}}</p>
          </span>
          <span>
            <strong>Tipo</strong>
            <p>{{result.TIPO}}</p>
          </span>
          <span  @click='textCopy(result.DIRECCION)'  title='Click para copiar' >
            <strong>Dirección</strong>
            <p>{{result.DIRECCION}}</p>
          </span>
          <br>
          <a target='_blank' :href='"https://api.whatsapp.com/send?&text=RUC: "+result.RUC+" | RAZON SOCIAL: "+result.RAZON+" | DIRECCIÓN: "+result.DIRECCION'>Enviar a Whatsapp</a>
        </div>
			</div>
			<div v-else class="login_wrapper">
				<div class="overlay_error">
					<i class="icon icon-alert-circle"></i>
					<div>
						<p></p>
					</div>
				</div>
				<h1>Consulta RUC</h1>
				<h2>Ingrese el ruc que desea consultar</h2>
				<div class="login_form">
					<div class="input_wrapper" :class="{validate_require: !validateRuc && trigger}">
						<div class="validate_msg">ruc inválido</div>
						<input type="text" id="ruc_user" v-model="ruc" @keypress="isNumber($event)"  autocomplete="off" v-on:keyup.enter='sendRuc' placeholder="Escribe el RUC" maxlength="11"/>
					</div>
					<button id="search_ruc"  @click="sendRuc" class="button_wave"> 
						<span> Consultar </span> 
					</button>
					<p class="link_to_register">¿Aún no facturas con Easybill?  
						<a href="http://demo.easybill.pe/pos" target='_blank'> Pruebanos </a>
					</p>
				</div>
			</div>
      <div id='divToCopy'>

      </div>
		</div>   
    <script v-html="jsonld" type="application/ld+json"></script> 
	</section>


</template>
<script>
export default {
  data() {
    const jsonld={
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Easybill",
        "legalName":"MAKEASY S.R.L.",
        "url":"https://www.easybill.pe",
        "logo":"https://easybill.pe/_nuxt/img/9ed2535.svg",
        "foundingDate":"2017-12-11",
        "founders": [
        {
        "@type": "Person",
        "name": "Elef Abner Rosales Quispe"
        },
        {
        "@type": "Person",
        "name": "Max Houston Ramirez Martel"
        },
        {
        "@type": "Person",
        "name": "Thalia Soledad Damian Aguirre"
        },
        {
        "@type": "Person",
        "name": "Omar Benjamin Chagua Ramos"
        }
        ],
        "address":{"@type":"PostalAddress",
        "streetAddress":"Jiron Tarapaca 160",
        "addressLocality":"Huanuco",
        "addressRegion":"HUANUCO",
        "postalCode":"10010",
        "addressCountry":"PERU"},
        "contactPoint":{"@type":"ContactPoint",
        "contactType":"customer service",
        "telephone":"[+51-999017080]",
        "email":"teamakeasy@gmail.com"},
        "sameAs":["https://www.facebook.com/Easybill.pe/",
        "https://www.youtube.com/channel/UCvz8-GgLr0z3Ty2cWffH_9w",
        "https://www.instagram.com/easybill.pe/?hl=es-la"],
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"WebSite",
            "@id":"https://easybill.pe/#website",
            "url":"https://easybill.pe/",
            "name":"Easybill",
            "potentialAction":{
              "@type":"SearchAction",
              "target":"https://easybill.pe/?s={search_term_string}",
              "query-input":"required name=search_term_string"
            }
          },
          {
            "@type":"WebPage",
            "@id":"https://easybill.pe/consulta/ruc/#webpage",
            "url":"https://easybill.pe/consulta/ruc",
            "inLanguage":"es-PE",
            "name":"Consulta RUC de SUNAT | Easybill",
            "isPartOf":{
              "@id":"https://easybill.pe/#website"
            },
            "datePublished":"2019-01-01T20:12:54+00:00",
            "dateModified":"2019-09-23T09:00:09+00:00",
            "description":"Herramienta gratuita para realizar consultas a la SUNAT  ingresando el número de RUC y devuelve toda su información."
          }
        ]
    }
    return {
      jsonld,
      ruc: '',
      trigger: false,
      result: null,
      textToCopy:'',
      titleClipboard:'Click para copiar'
    }
  },
  head () {
    return {
      htmlAttrs: {
      lang: 'es',
      },
      title: 'Consulta RUC de SUNAT rápido y confiable | Easybill',
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
  },
  methods: {
    sendRuc () {
      this.trigger = true
      if (this.validateRuc) this.getRucClient()
    },
    textCopy(text){
      if (process.client) {
        var copyText = text
        var textArea = document.createElement("textarea");
        textArea.value = copyText
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
      }
    },
    getRucClient() {
      let uri = "https://app.easybill.pe/tools/consult/identification/" + this.ruc
      this.$axios.get(uri)
        .then(res => {
          this.result = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }
  },
  computed: {
    validateRuc () {
      return this.ruc.length == 11
    }
  }
}
</script>

<style lang="sass">
@import './assets/css/main'
$line_button_color: rgba(42, 48, 56, 0.25)
$border_radius_button: 0.1rem

.link_to_register
  margin-top: 15px
.input_wrapper	
	position: relative
	&.validate_require
		border: 1px solid #ff3f41  !important
		border-radius: .1rem
		textarea, input, select
			border: none !important
			display: block
		.validate_msg
			display: block
	.validate_msg
		position: absolute
		right: -1px
		top: -17px
		background-color: #ff3f41
		color: white
		font-family: 'c-book', sans-serif
		font-size: 10px
		padding: 1px 5px
		border-radius: .1rem .1rem 0 0
		display: none	
.login_container
	display: flex
	justify-content: center
	align-items: center
	position: relative
	flex-direction: column
	background-color: $primary_color
	min-height: 100vh
	.logo_wrapper
		img
			width: 150px
			margin-bottom: 20px
.login_content
  min-width: 350px
  display: flex
  .terminos
    a
      color: #727a84
      font-size: 13px
      text-decoration: none
      margin-top: 3px
      display: inline-block
      &:hover
        text-decoration: underline
  .login_wrapper
    width: 100%
    background-color: #fff
    min-height: 400px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    border-radius: 6px 6px 4px 4px
    position: relative
    font-family: $font_regular
    padding: 20px 20px
    min-height: 450px
    &.box_results
      padding: 0
      justify-content: flex-start
      width: 350px
      aside
        border-bottom: 1px solid rgba(black, .2)
        width: 100%
        display: flex
        padding: 15px 10px
        i
          width: 20px
          height: 20px
          cursor: pointer
          font-size: 20px
        span
          flex: 1
          text-align: center
          font-family: $font_bold
      .results
        width: 100%
        span
          width: 100%
          border-bottom: 1px solid rgba(black, .1)
          display: block
          padding: 10px
          strong
            font-size: 13px
            font-weight: normal
            font-family: $font_bold
            color: rgba(black, .77)
          p
            font-size: 14px
    img
      width: 220px
    h1
      font-size: 27px
      font-family: $font_black
      color: $primary_color
      margin-bottom: 0
      margin-top: 5px
    h2
      font-size: 14px
      font-family: $font_regular
      color: #575F66
      margin-top: 0px
      font-weight: normal
      text-align: center
    .login_form
      width: 270px
      margin-top: 23px
      .input_wrapper
        margin-bottom: 15px
        input
          margin-bottom: 0 !important
        .validate_msg
          top: -14px  
      form, aside
        display: flex
        border: 1px solid rgba(0, 0, 0, 0.035)
        border-radius: 4px
        flex-direction: column
        width: 270px
        margin-top: 10px
      .inline_inputs
        display: grid
        grid-template-columns: 1fr 1fr
        grid-gap: 10px
      input
        &:focus, &:active
          outline: none
      button
        &:focus, &:active
          outline: none
        background-color: $primary_color
        border: none
        color: #fff
        padding: 0 20px
        height: 45px
        box-sizing: border-box
        justify-content: center
        align-items: center
        margin-top: 0px
        cursor: pointer
        width: 100%
        font-family: $font_bold
        border-radius: 2px
      input[type="text"], input[type="number"], input[type="password"], select
        color: $primary_color
        font-size: 13px
        border: 0
        background-color: rgba(249, 249, 249, 0.55)
        font-family: $font_regular
        border: 1px solid $line_button_color
        border-radius: $border_radius_button
        padding: 5px
        width: 100%
        height: 45px
        padding-left: 12px
        box-sizing: border-box
        margin-bottom: 15px
      p
        font-family: $font_regular
        font-size: 15px
        color: $primary_color
        font-size: 14px
        text-align: center
        a
          font-family: $font_bold
          color: $primary_color
          margin-left: 7px
  .login_auth_wrapper
    width: 100%
    background-color: #fff
    min-height: 400px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    border-radius: 6px 4px 4px 4px
    position: relative
    font-family: $font_regular
    padding: 20px 20px
    min-height: 450px
    img
      width: 220px
    h1
      font-size: 27px
      font-family: $font_black
      color: $primary_color
      margin-bottom: 0
      margin-top: 5px
    h2
      font-size: 14px
      font-family: $font_regular
      color: #575F66
      margin-top: 0px
      font-weight: normal
      text-align: center
    .login_top
      position: absolute
      top: 0
      left: 0
      display: flex
      align-items: center
      width: 100%
      border-bottom: 1px solid rgba(gray, .2)
      height: 45px
      a
        background-color: #1A1F2B
        padding: 10px 15px
        box-sizing: border-box
        color: #fff
        height: 100%
        display: flex
        align-items: center
        text-decoration: none
        border-radius: 4px 0 0 0
        &:hover
          color: white !important
      h3
        margin: 0
        margin-left: 10px
        font-size: 12px
        margin-right: 10px
        font-weight: normal
        color: $primary_color
        font-family: $font_regular
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
    .login_form
      .input_wrapper
        margin-bottom: 15px
        input
          margin-bottom: 0 !important
        .validate_msg
          top: -14px
      form
        display: flex
        border-radius: 4px
        flex-direction: column
        width: 270px
        #email
          animation: fadeIn .3s
        input
          &:focus, &:active
            outline: none
        button
          &:focus, &:active
            outline: none
          background-color: $primary_color
          border: none
          color: #fff
          padding: 0 20px
          height: 45px
          box-sizing: border-box
          justify-content: center
          align-items: center
          margin-top: 0px
          cursor: pointer
          width: 100%
          font-family: $font_bold
          border-radius: 2px
        input[type="text"], input[type="password"]
          color: $primary_color
          font-size: 13px
          border: 0
          background-color: rgba(249, 249, 249, 0.55)
          font-family: $font_regular
          border: 1px solid $line_button_color
          border-radius: $border_radius_button
          padding: 5px
          width: 100%
          height: 45px
          padding-left: 12px
          box-sizing: border-box
          margin-bottom: 15px
      p
        font-family: $font_regular
        font-size: 15px
        color: $primary_color
        font-size: 14px
        text-align: center
        a
          font-family: $font_bold
          color: $primary_color
          margin-left: 7px
</style>
