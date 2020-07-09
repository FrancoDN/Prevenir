import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import Botonera from '../views/Botonera.vue'
import Autochequeo from '../views/Autochequeo.vue'
import Login from '../views/Login.vue'
import Sintomas from '../views/Sintomas.vue'

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
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    
    component: Registro
  },
  {
    path: '/sintomas',
    name: 'Sintomas',
    
    component: Sintomas
  },
  {
    path: '/autochequeo',
    name: 'Autochequeo',
    
    component: Autochequeo
  }
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
