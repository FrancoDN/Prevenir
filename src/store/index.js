import Vue from "vue";
import Vuex from "vuex";

import { auth, db } from "../firebase";
import router from "../router/index";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    userUid: "",
  },
  mutations: {
    // Para actualizar el userUID
    setUserUid(state, payload) {
      state.userUid = payload;
      console.log(state.userUid);
    },

    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    crearUsuario({ commit }, usuario) {
      auth
        .createUserWithEmailAndPassword(usuario.email, usuario.dni)
        .then((resp) => {
          Swal.fire({
            title: "Prevenir Berisso",
            text: "Se ha registrado exitosamente !",
            icon: "success",
          });
          const uuid = resp.user.uid;
          db.ref("Personas")
            .child(uuid)
            .update(usuario)
            .then((resp) => router.push("/"));
        })
        .catch((error) => {
          // Guardo el error en el state
          var errorCode = error.code;

          if (errorCode == "auth/email-already-in-use") {
            Swal.fire({
              title: "Prevenir Berisso",
              text: "El email ingresado ya existe, por favor ingrese otro.",
              icon: "error",
            });
          }
        });
    },

    ingresoUsuario({ commit }, usuario) {
      auth
        .signInWithEmailAndPassword(usuario.email, usuario.dni)
        .then((res) => {
          // Actualizo el state con uid del usuario que hizo login
          commit("setUserUid", res.user.uid);

          // Creo la constante que guarda el mail y dni del usuario.
          const usuarioLogeado = {
            email: res.user.email,
            dni: res.user.dni,
          };

          // Actualizo el state con el usuario logueado (mail y dni )
          commit("setUsuario", usuarioLogeado);
          router.push("/");
        })
        .catch((error) => {
          // Guardo el error en el state
          commit("setError", error);

          Swal.fire({
            title: "Prevenir Berisso",
            text: "Email o DNI erroneos !",
            icon: "error",
          });
        });
    },

    cerrarSesion({ commit }) {
      Swal.fire({
        title: "Prevenir Berisso",
        text: "Está seguro/a que quiere cerrar la sesión?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
      }).then((result) => {
        if (result.value) {
          auth.signOut().then(() => {
            router.push("/login");
          });
        }
      });
      
    },

    guardarApp({commit}) {
      Swal.fire({
        title:'<u>Prevenir Berisso</u>',
        text: ''
      });
    },

    detectarUsuario({ commit }, usuario) {
      commit("setUsuario", usuario);
    },
  },
  modules: {},
});
