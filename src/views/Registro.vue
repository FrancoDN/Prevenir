<template>
  <div>
    <img
      class="banner"
      src="../../public/assets/images/Web/Head_chicoWeb.png"
      alt="berisso banner"
      width="100%"
      height="100%"
    />

    <div class="tabla">
      <img
        src="../../public/assets/images/Registro/datos_personales.png"
        alt="AutochequeoFormu"
        class="btnAutochequeoFormu"
      />
    </div>
    <p class="text-centeredSignUp">
      Esto es un pre-diagnóstico medico. En caso de dudas, consultar a su medico
      de cabecera.
    </p>
    <form class="form" @submit.prevent="crearUsuario(usuario)">
      <div>
        <input
          placeholder="Nombre"
          type="text"
          class="loginFieldSignUp"
          v-model="$v.usuario.nombre.$model"
        />
        <div v-if="$v.usuario.nombre.$dirty">
          <p
            class="error-message"
            v-if="!$v.usuario.nombre.required"
          >El campo nombre debe estar completo.</p>
        </div>
      </div>
      <div>
        <input
          placeholder="Apellido"
          class="loginFieldSignUp"
          type="text"
          v-model="$v.usuario.apellido.$model"
        />
        <div v-if="$v.usuario.apellido.$dirty">
          <p
            class="error-message"
            v-if="!$v.usuario.apellido.required"
          >El campo apellido debe estar completo.</p>
        </div>
      </div>

      <div>
        <input
          placeholder="DNI"
          class="loginFieldSignUp"
          type="number"
          v-model="$v.usuario.dni.$model"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="8"
        />
        <div v-if="$v.usuario.dni.$dirty">
          <p class="error-message" v-if="!$v.usuario.dni.minLength">Ingrese un DNI valido.</p>
          <p class="error-message" v-if="!$v.usuario.dni.required">El campo DNI debe estar completo.</p>
        </div>
      </div>

      <div>
        <input
          placeholder="Email"
          class="loginFieldSignUp"
          type="email"
          v-model="$v.usuario.email.$model"
        />
        <div v-if="$v.usuario.email.$dirty">
          <p class="error-message" v-if="!$v.usuario.email.email">Debe ingresar un email valido.</p>
          <p
            class="error-message"
            v-if="!$v.usuario.dni.required"
          >El campo Email debe estar completo.</p>
        </div>
      </div>

      <div>
        <input
          placeholder="Telefono"
          class="loginFieldSignUp"
          type="number"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="10"
          v-model="$v.usuario.telefono.$model"
        />
        <div v-if="$v.usuario.telefono.$dirty">
          <p class="error-message" v-if="!$v.usuario.telefono.minLength">Ingrese un teléfono valido.</p>
          <p
            class="error-message"
            v-if="!$v.usuario.telefono.required"
          >El campo Teléfono debe estar completo.</p>
        </div>
      </div>
      <div>
        <input
          placeholder="Edad"
          class="loginFieldSignUp"
          type="number"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="2"
          v-model="$v.usuario.edad.$model"
        />
        <div v-if="$v.usuario.edad.$dirty">
          <p
            class="error-message"
            v-if="!$v.usuario.edad.minLength"
          >Debe tener como mínimo 2 caracteres.</p>
          <p
            class="error-message"
            v-if="!$v.usuario.edad.required"
          >El campo Edad debe estar completo.</p>
        </div>
      </div>
      <div>
        <input
          placeholder="Dirección"
          class="loginFieldSignUp"
          type="text"
          v-model="$v.usuario.direccion.$model"
        />
        <div v-if="$v.usuario.direccion.$dirty">
          <p
            class="error-message"
            v-if="!$v.usuario.direccion.required"
          >El campo Dirección debe estar completo.</p>
        </div>
      </div>
        <select
            class="loginFieldSignUp"
            id="barrio"
            name="barrio"
            v-model="$v.usuario.barrio.$model" 
          >
            <option hidden selected value="">Seleccione su barrio</option>
            <option value="Berisso Centro"  >Berisso Centro</option>
            <option value="Villa Zula">Villa Zula</option>
            <option value="Villa San Carlos">Villa San Carlos</option>
            <option value="Villa Roca">Villa Roca</option>
            <option value="Villa Progreso">Villa Progreso</option>
            <option value="Villa Porteña">Villa Porteña</option>
            <option value="Villa Nueva">Villa Nueva</option>
            <option value="Villa Paula">Villa Paula</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Las 14">Las 14</option>
            <option value="El Carmen">El Carmen</option>
            <option value="Villa Dolores">Villa Dolores</option>
            <option value="Barrio Obrero">Barrio Obrero</option>
            <option value="Villa Arguello">Villa Argüello</option>
            <option value="Juan B. Justo">Juan B. Justo</option>
            <option value="Trabajadores de la Carne">Trabajadores de la Carne</option>
            <option value="Banco Provincia">Banco Provincia</option>
            <option value="Santa Teresita">Santa Teresita</option>
            <option value="Alto los Talas">Alto los Talas</option>
            <option value="Nueva York">Nueva York</option>
            <option value="Solidaridad">Solidaridad</option>
            <option value="Villa Roca">Villa Roca</option>
            <option value="Barrio Universitario">Barrio Universitario</option>

          </select>
      <br>
      <br />
      <div class="sepa">
        <input type="radio" id="masculino" value="Masculino" v-model="$v.usuario.sexo.$model" />
        <label for="masculino">Masculino</label>
        <br />
        <input type="radio" id="femenino" value="Femenino" v-model="$v.usuario.sexo.$model" />
        <label for="femenino" class="textStyle">Femenino</label>
      </div>
      <br />
      <table width="150" height="60" class="tabla">
        <tbody>
          <tr>
            <td>
              <button
                :class="$v.usuario.$invalid ? 'btnSignUpDisabled' : 'btnSignUp'"
                :disabled="$v.usuario.$invalid"
                type="submit"
                alt="Ingreso"
                value=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { mapActions, mapState } from "vuex";
import {
  required,
  minLength,
  email,
  numeric,
  alpha
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      usuario: {
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        telefono: "",
        edad: "",
        direccion: "",
        sexo: "",
        barrio: ""
      }
    };
  },

  methods: {
    crearUsuario(usuario) {
      console.log(usuario);
      auth
        .createUserWithEmailAndPassword(usuario.email, usuario.dni)
        .then(resp => {
          const uuid = resp.user.uid;
          db.ref("Personas")
            .child(uuid)
            .update(usuario);
        });
    },

    ...mapActions(["crearUsuario"])
  },

  validations: {
    usuario: {
      nombre: {
        required
      },
      apellido: {
        required
      },
      dni: {
        required,
        minLength: minLength(8),
        numeric
      },
      email: {
        required,
        email
      },
      telefono: {
        required,
        minLength: minLength(10),
        numeric
      },
      edad: {
        required,
        minLength: minLength(2),
        numeric
      },
      direccion: {
        required
      },
      sexo: {
        required
      },
      barrio: {
        required
      }
    }
  }
};
</script>

<style>
.sepa {
  margin-left: 15px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.error-message {
  color: red;
  font-family: "Montserrat";
  src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Black.ttf);
  margin: auto;
  text-align: center;
  font-weight: 450;
  padding-inline-start: 5px;
  padding-inline-end: 5px;
  font-size: 10px;
}
.btnAutochequeoFormu {
  margin-top: 10px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 180px;
  height: 50px;
  border-radius: 100px;
}

/*  reemplazar esta clase*/
.btnSignUpDisabled {
  margin: 0;
  background-image: url(/assets/images/Registro/enviar_disabled.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 100%;
  height: 70%;
  border: none;
  outline: transparent;
  border: transparent;
}

.btnSignUp {
  margin: 0;
  background-image: url(/assets/images/Registro/ENVIAR.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 100%;
  height: 70%;
  border: none;
  outline: transparent;
  border: transparent;
}

.loginField {
  width: 100%;
  height: 52px;
  margin-top: 6%;
  align-content: center;
  border-radius: 24px;
  background-color: #dfdfdf;
  border: 0;
  outline: 0;
  position: relative;
  padding-inline-start: 30px;
}

.loginFieldSignUp {
  width: 100%;
  height: 47px;
  margin-top: 6%;
  align-content: center;
  border-radius: 24px;
  background-color: #dfdfdf;
  border: 0;
  outline: 0;
  position: relative;
  padding-inline-start: 30px;
}

.container {
  align-content: center;
  margin: auto;
  width: 90%;
  margin-top: 20px;
  max-width: 800px;
}

.tabla {
  width: 100%;
  border: 0;
}

.textStyle {
  color: #000000;

  font-family: "Montserrat", sans-serif;
  src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Light.ttf);
  margin: auto;
  font-size: 15px;
}

.text-centeredSignUp {
  color: #000000;
  font-weight: 450;
  font-family: "Montserrat", sans-serif;
  src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Light.ttf);
  margin: auto;
  text-align: center;
  font-size: 15px;
  padding-inline-start: 5px;
}
.banner {
  width: 100%;
  height: 100%;
  margin: 0;
  align-items: center;
}
</style>
