<template lang="pug">
div
    p 
    header
        div(v-for='(estado, index) in estados' :key='index') hola
</template>

<script>
export default {
    props:['id'],
    computed:{
        estados(){
            return this.$store.getters.getEstados(this.$route.params.id);
        }
    }
}
</script>
<style lang="stylus">
header
    display flex

</style>


