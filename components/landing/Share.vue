<template lang='pug'>
    .offert
        .share_section
          h3.description Comparte esta publicación
          social-sharing( 
            :url='"https://easybill.pe/"+$route.path' 
            :title='article.title' 
            :description='article.title'
            hashtags='easybill,facturacionelectronica,facturacion'
            inline-template='')
            .buttons
                network(network='facebook')
                    i.icon.icon-social-facebook
                    |  Facebook                                      
                network(network='twitter')
                    i.icon.icon-twitter
                    |  Twitter
                network(network='whatsapp')
                    i.icon.icon-whatsapp
                    |  Whatsapp
</template>
<script>
import SocialSharing from '~/plugins/vue-social-sharing'

export default {
    components: { SocialSharing },
    props:["article"],
    data(){
        const jsonld={
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"Easyjobs",
            "legalName":"MAKEASY S.R.L.",
            "url":"https://www.easyjobs.site",
            "logo":"https://easyjobs.site/_nuxt/img/805aa18.png",
            "foundingDate":"2018-05-11",
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
            "sameAs":["https://business.facebook.com/easyjobsapp/?",
            "https://www.youtube.com/channel/UCvz8-GgLr0z3Ty2cWffH_9w",
            "https://www.instagram.com/chambeap/?hl=es-la"],
        }
        return {
            jsonld
        }
    }
}
</script>

<style lang="sass">
@import './assets/css/main'
.share_section
    text-align: center
    margin-top: 25px
    margin-bottom: 10px
    h3  
        font-size: 20px        
        font-family: "ABeeZee", sans-serif
        margin-bottom: 10px
    .buttons
        font-size: 15px
        i
            margin-left: 10px
</style>
