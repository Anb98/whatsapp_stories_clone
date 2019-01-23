<template lang='pug'>
.view
    nav Estados
    .contenido  
        header
            //- miestado(:miestado='true' nombre='Mi estado' fecha='Añade un estado')
        estados(titulo='Recientes' :estados='recientes')
        estados(titulo='Vistos' :estados='vistos')
        estados(titulo='Silenciados' :estados='silenciados' class='silenciados')

</template>

<script>

import estados from './estados'
import miestado from './estado'

export default {
    components:{
        estados,
        miestado
    },

    data(){
        return{
            recientes:[
                {nombre:'Nancy', fecha:'Hoy'},
                {nombre:'Roxana', fecha:'Hoy'}
            ],
            vistos:[
                {nombre:'Mary', fecha:'Hoy'},
                {nombre:'Katrisha', fecha:'Hoy'}
            ],
            silenciados:[
                {nombre:'Flor', fecha:'Hoy'},
                {nombre:'Ana', fecha:'Hoy'}
            ],
        }
    }
}
</script>

<style lang='stylus'>
.hide
    display none

.view
  background white
  font-family montserrat, sans-serif
  margin auto
  width calc(100% / 3)
  min-width 300px
  & > .contenido
    height 450px 
    overflow auto
  
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
