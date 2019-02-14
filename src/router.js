import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Secondary from './views/secondary.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path:'/view/:id',
      component: Secondary,
     
    }
  ]
})
