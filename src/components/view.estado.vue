<!-- prettier-ignore -->
<template lang="pug">
.content
    header
        .progress
            .progressBar(v-for='(estado, index) in estados' v-bind:key='index')
        i.fas.fa-arrow-left(@click='$router.go(-1)')
        .persona 
            img(alt='foto' height='50' width='50' src='https://randomuser.me/api/portraits/men/22.jpg')
            .datos
                span Nombre contacto
                br
                span hora 
        i.fas.fa-ellipsis-v

</template>

<script>
export default {
  computed: {
    estados() {
      return this.$store.getters.getEstados(this.$route.params.id);
    }
  }
};
</script>

<style lang="stylus">
.content
    background black
    height 90vh
header
    i
        cursor pointer
        color white
        padding 10px
        font-size 1.5em
        &:first-of-type
            float left
        &:last-child
            float right
    .persona
        margin-top 3px
        margin-left 0.5em
        float left
        color white
        &::after
            position absolute
            content ''
            width 54px
            height @width
            background white
            left 47px
            border-radius 50%
            z-index 1
            margin-top 1px
    img
        border-radius 50%
        margin-top 3px
        position relative
        z-index 2
    .datos
        display inline-block
        span
            position relative
            top -17px
            left 15px

.progress
    display flex
    justify-content space-between
    .progressBar
        position relative
        height 7px
        width 100%
        margin 5px
        border-radius 10px
        background rgba(white,0.5)
</style>
