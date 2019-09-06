<template lang="pug">
    transition( name="fade" mode="in-out" )
        section.modal_info_content( v-if="openModal" )
            .modal_wrapper
                .close( @click="closeModal" )
                    i.icon.icon-close
                disenar( :modal="true" ) 
</template>
<script>
import Disenar from '@/components/Disenar'
export default {
    props: ['openModal'],
    components: { Disenar },
    methods: {
        closeModal () {
            this.$emit("closeModal")
        }
    }
}
</script>

<style lang="sass" scoped>
@import './assets/css/main'
.modal_info_content
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100vh
    background-color: rgba($primary_color, .7)
    z-index: 4
    display: flex
    justify-content: center
    align-items: center
    .modal_wrapper
        width: 700px
        background-color: white
        border-radius: 2px
        position: relative
        .close
            position: absolute
            right: 10px
            top: 10px
            cursor: pointer
            z-index: 5
            i
                font-size: 20px
@media screen and (max-width: 750px)
    .modal_info_content
        .modal_wrapper
            width: 500px

@media screen and (max-width: 540px)
    .modal_info_content
        .modal_wrapper
            width: calc(100% - 40px)
</style>