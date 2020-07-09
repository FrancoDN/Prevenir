import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import Autochequeo from '../views/Autochequeo.vue'
import Login from '../views/Login.vue'
import Sintomas from '../views/Sintomas.vue'
import Prevencion from '../views/Prevencion.vue'
import Emergencia from '../views/Emergencia.vue'
import ResultadoPosi from '../views/ResultadoPosi.vue'
import ResultadoNega from '../views/ResultadoNega.vue'
import ResultadoEsen from '../views/ResultadoEsen.vue'
import Condiciones from '../views/Condiciones.vue'


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
  },
  {
    path: '/prevencion',
    name: 'Prevencion',
    
    component: Prevencion
  },
  {
    path: '/emergencia',
    name: 'Emergencia',
    
    component: Emergencia
  },
  {
    path: '/resultadoposi',
    name: 'ResultadoPosi',
    
    component: ResultadoPosi
  },
  {
    path: '/resultadonega',
    name: 'ResultadoNega',
    
    component: ResultadoNega
  },
  {
    path: '/resultadoesen',
    name: 'ResultadoEsen',
    
    component: ResultadoEsen
  },
  {
    path: '/condiciones',
    name: 'Codiciones',
    
    component: Condiciones
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
