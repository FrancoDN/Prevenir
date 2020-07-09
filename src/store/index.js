import Vue from 'vue'
import Vuex from 'vuex'

import {auth, db} from '../firebase'
import router from '../router/index'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
    
  },
  actions: {

    crearUsuario({commit}, usuario ) {
      auth.createUserWithEmailAndPassword(usuario)
        .them( resp => {
          console.log(resp);
        })
        .catch( error => {
          console.log(error);
        })
    },
    
    ingresoUsuario({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.dni)
        .then(res => {
          console.log('hizo login')
          const usuarioLogeado = {
            email: res.user.email,
            dni: res.user.dni
          }
          commit('setUsuario', usuarioLogeado)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    
    cerrarSesion({commit}){
      auth.signOut()
        .then(() => {
          router.push('/acceso')
        })
    },
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
    }
  },
  modules: {
  }
})
