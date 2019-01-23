<template lang='pug'>
.estado
    canvas
    .img
    i.fas.fa-plus-circle(:class='{hide: !(miestado)}')
    .contenido
        .nombre {{nombre}}
        .fecha {{fecha}}
</template>

<script>
export default {
  created(){

  },
  props:{
    miestado: {type:Boolean},
    id:{type:String, required: true},
    nombre: {type: String, required:true},
    fecha: {type: String, required:true}
  },
  methods:{

  }
}
</script>

<style lang='stylus'>
gris = rgba(grey,0.7)

.estado
    padding 10px 15px
    position relative
    .img 
      background grey 
      width 45px
      height @width
      border-radius 50%
    canvas
      top 7px
      left 12px
      position absolute
      width 50px
      height @width
      border 1px solid black
    .fa-plus-circle
      background white
      font-size 1.2em
      border-radius 50%
      color #2ecc71
      position absolute
      top 2.1em
      left 43px
    .contenido
      position absolute
      top 0.9em
      left calc(45px + 15px + 0.7em)
      .nombre, .fecha 
        text-align left
      .fecha 
        color gris
        font-size 0.75em
    &.linea::before
      content ''
      height 1px
      width 75%
      bottom 0
      left calc(45px + 10px + 0.7em)
      background rgba(gris,0.3)
      position absolute


</style>
