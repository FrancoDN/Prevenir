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
import Compartir from '../views/Compartir.vue'

import {auth} from '../firebase'


Vue.use(VueRouter)

  const routes = [
    
    {
    // Esta tendria que ser la botonera
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true}
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
    component: Sintomas,
    meta: { requiresAuth: true}
  },
  {
    path: '/autochequeo',
    name: 'Autochequeo',
    component: Autochequeo,
    meta: { requiresAuth: true}
  },
  {
    path: '/prevencion',
    name: 'Prevencion',
    component: Prevencion,
    meta: { requiresAuth: true}
  },
  {
    path: '/emergencia',
    name: 'Emergencia',
    component: Emergencia,
    meta: { requiresAuth: true}
  },
  {
    path: '/resultadoposi',
    name: 'ResultadoPosi',
    component: ResultadoPosi,
    meta: { requiresAuth: true}
  },
  {
    path: '/resultadonega',
    name: 'ResultadoNega',
    component: ResultadoNega,
    meta: { requiresAuth: true}
  },
  {
    path: '/resultadoesen',
    name: 'ResultadoEsen',
    component: ResultadoEsen,
    meta: { requiresAuth: true}
  },
  {
    path: '/condiciones',
    name: 'Codiciones',
    component: Condiciones
  },
  {
    path: '/compartir',
    name: 'Compartir',
    component: Compartir
  }
  //{
  //  path: '/autochequeo',
  //  name: 'Autochequeo',
    
  //  component: () => import( '../views/Autochequeo.vue')
  //},

]

//mode: 'history',
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  if ( to.matched.some( record => record.meta.requiresAuth ) ) {
    const usuario = auth.currentUser;

    if (!usuario) {
      next( {path: '/login'} )
    }else {
      next();
    }

    
  }else {
    next();
  }
})

export default router
