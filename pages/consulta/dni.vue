<template >
  <section class="login_container">
		<a href="https://easybill.pe/" class="logo_wrapper">
			<img src="@/assets/img/logo_easybill.svg" alt="Logo easybill"  />
		</a>
		<div class="login_content">
			<div v-if="result" class="login_wrapper box_results">
        <aside>
          <i @click="result = null" class="icon icon-keyboard_arrow_left"></i>
          <span>
            Resultados
          </span>
        </aside>
        <div class="results">
          <span>
            <strong>DNI</strong>
            <p>{{result.identification}}</p>
          </span>
          <span>
            <strong>Nombres</strong>
            <p>{{result.nombres}}</p>
          </span>
          <span>
            <strong>Apellido Paterno</strong>
            <p>{{result.apellido_paterno}}</p>
          </span>
          <span>
            <strong>Apellido Materno</strong>
            <p>{{result.apellido_materno}}</p>
          </span>
        </div>
			</div>
			<div v-else class="login_wrapper">
				<h1>Consulta DNI</h1>
				<h2>Ingrese el dni que desea consultar</h2>
				<div class="login_form">
					<div class="input_wrapper" :class="{validate_require: !validateDNI && trigger}">
						<div class="validate_msg">dni inválido</div>
						<input type="text" id="ruc_user" v-model="dni"  @keypress="isNumber($event)"  autocomplete="off"  placeholder="Escribe el DNI" maxlength="8"/>
					</div>
					<button id="search_ruc"  @click="sendDni" class="button_wave"> 
						<span> Consultar </span> 
					</button>
					<p class="link_to_register">¿No tienes una cuenta?  
						<a href="https://app.easybill.pe/registro"> Regístrate </a>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
  data() {
    return {
      dni: '',
      trigger: false,
      result: null
    }
  },
  head () {
    return {
      title: 'Easybill | Consulta DNI'
    }
  },
  methods: {
    sendDni () {
      this.trigger = true
      if (this.validateDNI) this.getDniClient()
    },
    getDniClient() {
      let uri = "https://app.easybill.pe/tools/consult/identification/" + this.dni
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
    validateDNI () {
      return this.dni.length == 8
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
