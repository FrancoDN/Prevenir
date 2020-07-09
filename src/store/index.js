import Vue from 'vue'
import Vuex from 'vuex'

import {auth, db} from '../firebase'
import router from '../router/index'
import Swal from "sweetalert2";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    userUid: '',
  },
  mutations: {
    
    // Para actualizar el userUID
    setUserUid(state, payload){
      state.userUid = payload
      console.log(state.userUid);
    },

    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
    
  },
  actions: {

    crearUsuario({commit}, usuario ) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.dni)
        .then( resp => {
          const uuid = resp.user.uid;
            db.ref('Personas').child(uuid).update(usuario)
              .then( resp => router.push('/'));
        });
    
    },  
    
    
    ingresoUsuario({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.dni)
        .then(res => {
          
          // Actualizo el state con uid del usuario que hizo login
          commit('setUserUid', res.user.uid)
          
          // Creo la constante que guarda el mail y dni del usuario.
          const usuarioLogeado = {
            email: res.user.email,
            dni: res.user.dni
          }

          // Actualizo el state con el usuario logueado (mail y dni )
          commit('setUsuario', usuarioLogeado)
          router.push('/')
        })
        .catch(error => {
          // Guardo el error en el state
          commit('setError', error)

          Swal.fire({
            title: "Prevenir Berisso",
            text: "Email y/o DNI no Registrados !!!",
            icon: "error",
          });

        })
    },
    
    cerrarSesion({commit}){
      auth.signOut()
        .then(() => {
          router.push('/login')
        })
    },

    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
    }

  },
  modules: {
  }
})
