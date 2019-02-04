import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories:[
      {id: 1, nombre:'Nancy', silenciado:false, estados:[
        {hora:'hace 39 minutos', tipo:'text', contenido:'Ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 38 minutos', tipo:'text', contenido:'Ejemplo', visto:false, font:'',bgcolor:'green'}
      ]},
      {id: 2, nombre:'Roxana', silenciado:false, estados:[
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
      ]},
      {id: 3, nombre:'Mary', silenciado:false, estados:[
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
      ]},
      {id: 4, nombre:'Katrisha', silenciado:false, estados:[
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
      ]},
      {id: 5, nombre:'Flor', silenciado:true, estados:[
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
      ]},
      {id: 6, nombre:'Ana', silenciado:true, estados:[
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
        {hora:'hace 39 minutos', tipo:'text', contenido:'ejemplo', visto:false, font:'',bgcolor:'green'},
      ]}
    ],
  },
  getters:{
    getSilenciados(state){
      const resultado =  state.stories.filter(element=>element.silenciado);

      return resultado;
    },
    getVistos(state){
      const resultado = state.stories.filter(element=>{
        if(element.silenciado) return false;  //si esta silenciado se salta el elemento

        const cantidadStories = element.estados.length;

        const nVistos=element.estados.reduce((total,actual)=>{
          if(actual.visto) return total+1;  //si esta visto suma 1
        },0);

        if(cantidadStories==nVistos) return true;

      });

      return resultado;
    },
    getRecientes(state){
      const resultado = state.stories.filter(element=>{
        if(element.silenciado) return false;  //si esta silenciado se salta el elemento
        
        const cantidadStories = element.estados.length;

        const nVistos=element.estados.reduce((total,actual)=>{
          if(actual.visto) return total+1;
        },0);

        if(cantidadStories!=nVistos) return true;
      });

      return resultado;
    },
    getNNuevos(state){
      return (idPersona)=>{
        const indice=state.stories.findIndex(element=>element.id==idPersona);
        const nuevos= state.stories[indice].estados.filter(element=> !element.visto);  
        return nuevos.length;
      };
    },
    getNEstados(state){
      return (idPersona)=>{
        const indice=state.stories.findIndex(element=>element.id==idPersona);
        return state.stories[indice].estados.length;
      };
    },
    getHora(state){
      return (idPersona)=>{
        const indice=state.stories.findIndex(element=>element.id==idPersona);
        return state.stories[indice].estados[state.stories[indice].estados.length-1].hora;
      };
    },
    getEstados(state){
      return (idPersona)=>{
        const index = state.stories.findIndex(element=>element.id==idPersona);
        return state.stories[index].estados;
      };
    }
  },
  mutations: {
    silenciar(state,payload){
      const indice=state.stories.findIndex(element=>element.id==payload);

      state.stories[indice].silenciado = !state.stories[indice].silenciado;
    },
    verEstado(state,payload){
      const {id, i} = payload;
      const indice=state.stories.findIndex(element=>element.id==id);
      state.stories[indice].estados[i].visto=true;     
    }

  },
  actions: {

  }
});
