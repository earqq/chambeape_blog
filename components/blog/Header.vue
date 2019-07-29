<template>
    <header class="header_blog_content">
        <div class="article_cover">
            <img :src="last_article[0].cover" >
        </div>
        <div class="header_blog_wrapper">
            <div class="header_blog_body">
                <nav>
                    <a class="logo" href="/">
                        <div class="logo_wrapper"><img src="/public/img/logo_easybill.svg" alt="easybill facturacion electronica" /></div>
                    </a>
                    <div class="menu_right_top">
                        <div class="menu_mobile"  @click="showMenu=true"><i class="icon icon-menu"></i></div>
                        <transition name="fade" mode="in-out" >
                            <ul v-if="!mobile || (mobile && showMenu)">
                                <div class="close_menu" @click="showMenu=false">
                                    <i class="icon icon-close"></i>
                                </div>
                                <li> <a @click="
                                    gtag('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Precios header', 'value': 1})
                                    showMenu=false"  
                                    href="/#plans_section">Precios</a></li>
                                <li> <a @click="
                                    gtag('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Clientes header', 'value': 1})
                                    showMenu=false"  
                                    href="/#clients">Clientes</a></li>
                                <li> <a href="/blog" rel="noopener" >Blog  </a></li>

                                <li> <a 
                                    @click="
                                    gtag('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Guia header', 'value': 1})"                                    
                                    href="http://guia.easybill.pe" target="_blank">Guia  </a></li>
                                <li>
                                    <a
                                    @click="
                                    gtag('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Ingresar header', 'value': 1})"                                     
                                    class="button_login inline button_fill" href="https://app.easybill.pe">Ingresar</a>
                                    <a 
                                    @click="
                                    gtag('event', 'Click boton', {'event_category': 'Landing page', 'event_label': 'Registrate header', 'value': 1});
                                    "                                     
                                    href='https://app.easybill.pe/registro'
                                    class="button_login button"  >Regístrate</a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                </nav>
                <div class="header_blog_main_content">
                    <div class="header_blog_main_text">
                        <small> Publicado el {{last_article[0].created_at | moment("DD [de] MMMM [de] YYYY")}} </small>
                        <h1>{{last_article[0].title}}<span>.</span></h1>
                        <a  :href="'/blog/'+last_article[0]._id" class="button_fill" > 
                            Continuar Leyendo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { firestore } from '../../blog'
export default {
    data () {
        return {
            showMenu: false,
            mobile: false,
            last_article: {}
        }
    },
    firestore ()  {
        return {
            last_article: firestore.collection('articles').orderBy("created_at", "desc").limit(1)
        }
    },
    created () {
        if (window.innerWidth < 850) this.mobile = true
        else this.mobile = false

        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                if (window.innerWidth < 850) this.mobile = true
                else this.mobile = false
            })
        })
    },
}
</script>

<style>

</style>
