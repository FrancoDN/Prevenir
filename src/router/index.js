import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    
    {
    // Esta tendria que ser la botonera
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    
    component: () => import( '../views/Registro.vue')
  },
  //{
  //  path: '/autochequeo',
  //  name: 'Autochequeo',
    
  //  component: () => import( '../views/Autochequeo.vue')
  //},

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
