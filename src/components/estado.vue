<template lang='pug'>
.estado
    canvas(:id='idEstado' width='56' height='56')
    .img
    i.fas.fa-plus-circle(:class='{hide: !(miestado)}')
    .contenido
        .nombre {{nombre}}
        .fecha {{fecha}}
</template>

<script>
export default {
  mounted(){
    this.hacerCirculo({
      lados: 5,
      nPrimario:3
      })
  },
  props:{
    miestado: {type:Boolean},
    idEstado:{type:String, required: true},
    nombre: {type: String, required:true},
    fecha: {type: String, required:true}
  },
  methods:{
    hacerCirculo(attr){
      const colorPrimario='#00cec9';
      const colorSecundario='#aaa';
    
      const canvas = document.getElementById(this.idEstado);

      // console.log(this.idEstado);
      // return;
      const ctx = canvas.getContext('2d');
      
      const blanco=(Math.PI*2)/50;
      const segmento = (Math.PI*2)/attr.lados; //valor constante de cada segmento

      const startAngle= attr.anguloInicial || blanco;  //primer segmento inicia luego del espacio en blanco
      const endAngle= attr.anguloFinal || segmento;	//primer segmento
      
      ctx.beginPath();
      ctx.arc(28.5,27.5,26,startAngle,endAngle)
      ctx.lineWidth=2;
      ctx.strokeStyle = (attr.nPrimario>0)?colorPrimario:colorSecundario;
      ctx.stroke();
      
      // if(n) n--;
      // else n=lados;

      attr.n= attr.n-1 || attr.lados; //n dismiyue su valor en cada iteracion
          
      if(attr.n>1) this.hacerCirculo({
          lados        : attr.lados,
          anguloInicial: endAngle+blanco, 
          anguloFinal  : endAngle+segmento, 
          n            : attr.n, 
          nPrimario    : attr.nPrimario-1
      });
          //cada nuevo segmento inicia despues del espacio en blanco  
      }
  }
}
</script>

<style lang='stylus'>
gris = rgba(grey,0.7)

.estado
    cursor pointer
    padding 10px 15px
    position relative
    .img 
      background grey 
      width 45px
      height @width
      border-radius 50%
    canvas
      top 5px
      left 10px
      position absolute
      z-index 1
      transform rotate(268deg)
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
