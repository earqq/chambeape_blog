<template>
	<header class="header_blog_content">
			<div class="article_cover">
					<img alt='Imagen de fondo' :src="last_article.cover" >
			</div>
			<div class="header_blog_wrapper">
					<div class="header_blog_body">
							<nav>
								<nuxt-link to="/"  class="logo">
									<div class="logo_wrapper"><img src="@/assets/img/logo_easyjobs.png" alt="Logo easybill" /></div>
								</nuxt-link>
								<no-ssr >
									<div class="menu_right_top">
										<div class="menu_mobile" @click="showMenu=true"><i class="icon icon-menu"></i></div>
										<transition name="fade" mode="in-out">
											<ul v-if="!mobile || (mobile && showMenu)">
												<div class="close_menu" @click="showMenu=false">
														<i class="icon icon-close"></i>
												</div>
												<li> <a href='#'> Noticias</a></li>
												<li> <a href='#' >Ultimos</a></li>
												<li> <nuxt-link to="/blog">Blog</nuxt-link></li>
												<!-- <li> <a @click="
														ga('event', 'Click boton', {'event_category': 'Header blog', 'event_label': 'Guia header', 'value': 1})" href="http://guia.easybill.pe" target="_blank">Guia  </a></li> -->
												<li>
													<a href='#' class="button_login inline button_fill" >Ingresar</a>
													<a href='#' class="button_login button">Regístrate</a>
												</li>
											</ul>
										</transition>
									</div>
								 </no-ssr>
							</nav>
							<div class="header_blog_main_content">
									<div class="header_blog_main_text">
											<small> Publicado el {{last_article.created_at | moment("DD [de] MMMM [de] YYYY")}} </small>
											<h1>{{last_article.title}}<span>.</span></h1>
											<nuxt-link :to="{name: 'blog-slug-article', params: {slug: last_article.slug}}"  class="button_fill">
												Continuar Leyendo
											</nuxt-link>
									</div>
							</div>
					</div>
			</div>
	</header>
</template>

<script>
import { firestore } from '~/plugins/firebase.js'
export default {
		props: ['last_article'],
		data () {
				return {
						showMenu: false,
						mobile: false,
						 
						
				}
		},
		created () {
			if (process.client) { // en lado del servidor no existe windown, document, etc
				if (window.innerWidth < 850) this.mobile = true
				else this.mobile = false

				this.$nextTick(() => {
						window.addEventListener('resize', () => {
								if (window.innerWidth < 850) this.mobile = true
								else this.mobile = false
						})
				})
				this.ga=window.gtag
			}
		},
		methods: {
			moveTo (section) {
				this.$router.push({
					path: `/?section=${section}`
				})
			}
		}
}
</script>

<style lang="sass">
@import './assets/css/main'
header.header_blog_content
	width: 100%
	display: flex
	position: relative
	background-color: $primary_color
	height: 600px
	.article_cover
		position: absolute
		left: 0
		top: 0
		height: 100%
		width: 100%
		opacity: .15
		img
			object-fit: cover
			height: 100%
			width: 100%
	.header_blog_wrapper
		width: 100%
		z-index: 2
		nav
			display: flex
			justify-content: space-between
			align-items: center
			width: $large
			box-sizing: border-box
			height: 50px
			z-index: 5
			position: relative
			margin: 0 auto
			margin-top: 40px
			z-index: 11
			.menu_right_top
				.menu_mobile
					display: none
				ul
					display: flex
					align-items: center
					width: 550px
					justify-content: space-between
					.close_menu
						display: none
					li
						list-style: none
						a
							font-size: 15px
							color: white
							text-decoration: none
							font-family: $font_bold
							font-weight: normal
							cursor: pointer
							&.button_login
								padding: 12px 20px
								box-sizing: border-box
								color: $primary_color
								border-radius: 2px
								background-color: $accent_color
								border: 1px solid $accent_color
								margin-left: 12px
								&.inline
									background-color: transparent
									color: $accent_color
									white-space: nowrap
									margin-left: 0
			.logo
				display: flex
				align-items: center
				.logo_wrapper
					width: 50px
					height: 55px
					margin-left: -5px
					img
						width: 100px

		.header_blog_body
			background-size: cover
			text-align: left
			display: flex
			flex-direction: column
			align-items: center
			justify-content: flex-start
			position: relative
			height: 100%
			.header_blog_main_content
				box-sizing: border-box
				width: $large
				display: flex
				align-items: center
				justify-content: center
				z-index: 5
				flex: 1
				.header_blog_main_text
					color: black
					text-align: center
					width: $large
					small
						font-size: 16px
						font-family: $font_regular
						color: rgba(white, .7)
						text-align: center
						margin-bottom: 15px
						display: block
					h1
						font-size: 32px
						font-family: $font_black
						color: white
						text-align: center
						span
								display: inline
								color: $accent_color
					a
						height: 35px
						font-size: 20px
						font-weight: 500
						font-family: $font_bold
						font-size: 15px
						border: 0
						text-decoration: none
						width: 200px
						align-self: center
						display: flex
						justify-content: center
						align-items: center
						padding: 23px 20px
						margin-top: 10px
						box-sizing: border-box
						border-radius: 2px
						border: 1px solid $accent_color
						margin: 0 auto
						margin-top: 20px
						background-color: transparent
						color: $accent_color

@media screen and (max-width: 1100px)
	header.header_blog_content
		height: 500px
		.header_blog_wrapper
			nav
				width: $medium
				.menu_right_top
					ul li a
						font-size: 14px
						&.button_login
							padding: 10px 15px
			.header_blog_body
				.header_blog_main_content
					width: $medium
					.header_blog_3d
						.header_blog_3d_wrapper
							width: 350px
					.header_blog_main_text
						width: $medium
						h1
							font-size: 27px
							margin-bottom: 15px
						p
							font-size: 16px
							width: 400px
							margin-bottom: 15px
						span
							width: 400px
							a
								font-size: 14px
								padding: 20px 15px

@media screen and (max-width: 850px)
	header.header_blog_content
		height: auto
		.header_blog_wrapper
			nav
				width: $small
				.logo
					.logo_wrapper
						width: 50px
				.menu_right_top
					.menu_mobile
						display: block
						color: $accent_color
						font-size: 22px
					ul
						position: fixed
						left: 0
						top: 0
						width: 100%
						height: 100vh
						background-color: $primary_color
						z-index: 10
						flex-direction: column
						justify-content: center
						padding: 30px
						box-sizing: border-box
						.close_menu
							font-size: 25px
							color:  $accent_color
							margin-bottom: 30px
							display: block
						li
							margin-bottom: 40px
							a
								font-size: 16px
								&:hover
									color: #899AAC
							&:last-child
								display: flex
								flex-direction: column
								a
									width: 150px
									text-align: center
									margin-bottom: 30px
									&.button
										margin-left: 0
										&:hover
											color: $primary_color
			.header_blog_body
				min-height: 500px
				.header_blog_main_content
					width: $small
					flex-direction: column-reverse
					margin-top: 30px
					margin-bottom: 50px
					.header_blog_3d
						.header_blog_3d_wrapper
							width: 250px
					.header_blog_main_text
						width: $small
						display: flex
						flex-direction: column
						align-items: center
						text-align: center
						h1
							font-size: 22px
							margin-top: 10px
						small
							font-size: 15px
							margin-bottom: 5px
						p
							font-size: 15px
							width: 450px
						span
							width: 370px
							a
								font-size: 13px
								padding: 20px 15px
								i
									font-size: 20px
									margin-left: 17px

@media screen and (max-width: 500px)
	header.header_blog_content
		.header_blog_wrapper
			nav
				width: $extra-small
				padding: 0 20px
				box-sizing: border-box
				margin-top: 20px
			.header_blog_body
				.header_blog_main_content
					width: $extra-small
					padding: 0 20px
					box-sizing: border-box
					.header_blog_main_text
						width: $extra-small
						h1
							width: 100%
							text-align: center
						span
							width: $extra-small
							grid-gap: 15px
							grid-template-columns: 1fr
							a
								margin-top: 0
						p
							width: 100%
							text-align: center
							font-size: 14px
</style>
