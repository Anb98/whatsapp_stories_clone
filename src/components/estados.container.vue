<!-- prettier-ignore -->
<template lang='pug'>
.view
    nav Estados
    .contenido  
        header
            //- miestado(:miestado='true' nombre='Mi estado' fecha='Añade un estado')
        estados(titulo='Recientes' v-bind:estados='recientes')
        estados(titulo='Vistos' v-bind:estados='vistos')
        estados(titulo='Silenciados' v-bind:estados='silenciados' class='silenciados')
    i.fas.fa-pencil-alt

</template>

<script>
// import { mapGetters } from 'vuex';

import estados from "./estados";
import miestado from "./estado";

export default {
  components: {
    estados,
    miestado
  },
  computed: {
    recientes() {
      return this.$store.getters.getRecientes || [];
    },
    vistos() {
      return this.$store.getters.getVistos || [];
    },
    silenciados() {
      return this.$store.getters.getSilenciados || [];
    }
    // ...mapGetters([
    //     {recientes:'getRecientes'},
    //     {vistos:'getVistos'},
    //     {silenciados:'getSilenciados'}
    // ])
  }
};
</script>

<style lang="stylus">
.hide
    display none

.view
  background white
  font-family montserrat, sans-serif
  margin auto
  width calc(100% / 3)
  min-width 300px
  position relative
  & > .contenido
    height 450px
    overflow auto
  & > i
    cursor pointer
    background #2ecc71
    font-size 1.2em
    padding 10px
    border-radius 50%
    color white
    box-shadow 0 0 7px #999
    position absolute
    z-index 2
    bottom 2em
    right 1.5em

  nav
    position relative
    text-transform uppercase
    text-align center
    line-height 2.5em
    background #01a3a4
    color white
    box-shadow 0 1px 5px #bbb
    &::after
      content ''
      position absolute
      height 2px
      background white
      width calc(100% / 3 )
      left calc(100% / 3 )
      top calc(2.5em - 2px)

  header
    border-bottom 0.6px solid gris
</style>
