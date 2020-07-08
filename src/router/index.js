import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import Botonera from '../views/Botonera.vue'

Vue.use(VueRouter)

  const routes = [
    
    {
    // Esta tendria que ser la botonera
    path: '/',
    name: 'Home',
    component: Home
  },
  {
<<<<<<< HEAD
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

=======
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/botonera',
    name: 'Botonera',
    component: Botonera
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
>>>>>>> 7422f552e9bcc0282ebe3d7ee4a6082046f9cee6
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
