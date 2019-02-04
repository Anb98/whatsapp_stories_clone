<template lang="pug">
.estados 
    span {{titulo}}
    estado(v-for='(persona, index) in estados' 
    :key='index' 
    :idEstado='persona.id+"id"'
    :nombre='persona.nombre' 
    :hora='$store.getters.getHora(persona.id)' 
    :nEstados='$store.getters.getNEstados(persona.id)'
    :nNuevos='$store.getters.getNNuevos(persona.id)'
    :class='{linea:(index<estados.length-1)}'
    @ver='ver(persona)'
    )

</template>

<script>
import estado from './estado'
export default {
    components:{
       estado, 
    },
    props:{
        titulo:{type: String, required:true},
        estados:{type: Array, required:true}
    },
    methods:{
        ver(persona){
            const i = persona.estados.findIndex(element=>{
                return !element.visto
            });
            const {id} =persona;
            
            if(i== -1) return;

            this.$store.commit('verEstado',{id:id, i:i});
            this.$router.push('/view/'+id);
        }
    }
}
</script>

<style lang='stylus'>
gris = rgba(grey,0.7)
.estados
    border-bottom 0.6px solid gris
    & > span
        text-align left
        display block
        padding-left 1em 
        line-height 1.35em
        height 1.5em
        font-size 0.9em
        color grey
        background rgba(gris,0.1)

  .silenciados .estado   
    &::after
      content ''
      position absolute
      background white
      top 0
      bottom 0
      left 0
      right 0
      opacity 0.5
</style>
