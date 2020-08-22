<template>

  <div>
    <img
      class="banner"
      src="../../public/assets/images/Web/Head_chicoWeb.png"
      alt="berisso banner"
      width="100%"
      height="100%"
    />
    <table width="300" height="100" class="tabla">
      <tr>
        <td>
          <img
            src="../../public/assets/images/Autochequeo/autochequeo.png"
            alt="AutochequeoFormu"
            class="btnAutochequeoFormu"
            width="100%"
          />
        </td>
      </tr>
    </table>

    <form class="form" @submit.prevent="updateUsuaruo(usuario)">
      <table width="320" height="50" class="tablaAutochequeo">
        <tr>
          <td>
            <p class="text-autochequeo">
              ¿Que se entiende como
              <span
                @click="alerta()"
                style="color:blue;text-decoration: underline;"
              >personal esencial o persona de riesgo</span>?
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="radiobtn">
              <label>
                <input
                  type="radio"
                  name="EseRies"
                  value="Si"
                  id="EseRies"
                  v-model="preguntas.Personal_esencial"
                />
                Sí
              </label>
              &nbsp;
              <label>
                <input
                  type="radio"
                  name="EseRies"
                  value="No"
                  id="EseRies"
                  v-model="preguntas.Personal_esencial"
                />
                No
              </label>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="text-autochequeo">
              ¿Tuviste o tenés contacto estrecho con algun caso confirmado de
              COVID-19?
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="radiobtn">
              <label>
                <input
                  type="radio"
                  name="contacto"
                  value="Si"
                  id="contactoSi"
                  v-model="preguntas.Contacto_estrecho"
                />
                Sí
              </label>
              &nbsp;
              <label>
                <input
                  type="radio"
                  name="contacto"
                  value="No"
                  id="contactoNo"
                  v-model="preguntas.Contacto_estrecho"
                />
                No
              </label>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="text-autochequeo">
              ¿Presentas temperatura igual o mayor a
              <a style="color: #E15252;">
                <b>37.5°C</b>
              </a> ?
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="radiobtn">
              <label>
                <input
                  type="radio"
                  name="temperatura"
                  value="Si"
                  id="tempSi"
                  v-model="preguntas.Fiebre"
                />
                Sí
              </label>
              &nbsp;
              <label>
                <input
                  type="radio"
                  name="temperatura"
                  value="No"
                  id="tempNo"
                  v-model="preguntas.Fiebre"
                />
                No
              </label>
            </p>
          </td>
        </tr>
      </table>

      <table width="320" height="50" class="tablaAutochequeo" style="margin-top: 5px;">
        <tr>
          <td>
            <p
              class="text-centeredSignUp"
            >Si presentas otros síntomas podes marcarlos a continuación.</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="radiobtn">
              <label>
                <input
                  type="checkbox"
                  name="garganta"
                  id="gar"
                  v-model="preguntas.Dolor_de_garganta"
                />
                Dolor de garganta
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  name="respiratoria"
                  id="resp"
                  v-model="preguntas.Dificultad_respiratoria"
                />
                Dificultad respiratoria
              </label>
              <br />

              <label>
                <input type="checkbox" name="toser" id="tos" v-model="preguntas.Tos" />
                Tos
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  name="gusOlf"
                  id="gus"
                  v-model="preguntas.Perdida_gusto_olfato"
                />
                Perdida de gusto/olfato
              </label>
              <br />
            </p>
          </td>
        </tr>
      </table>

      <br />
    </form>
    <table width="206" height="77" class="tabla">
      <tbody>
        <tr>
          <td>
            <input
              type="button"
              alt="Enviar"
              class="btnEnviar"
              id="enviar"
              @click="enviarPreguntas(preguntas)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <table width="100" height="40" class="tabla">
      <tbody>
        <tr>
          <td>
            <input type="button" alt="Menu" class="btnMenu" @click="$router.push('/')" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { auth, db } from "../firebase";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      // Preguntas en el form
      preguntas: {
        Personal_esencial: "No",
        Contacto_estrecho: "No",
        Fiebre: "No",
        Dolor_de_garganta: false,
        Dificultad_respiratoria: false,
        Tos: false,
        Perdida_gusto_olfato: false
      }
    };
  },

  methods: {
    alerta() {
      Swal.fire({
        title: "Esencial-Riesgo",
        html:
          '<p align="left">-Personal de salud</p>' +

          '<p align="left">-Policia</p>'+
         
          '<p align="left">-Bomberos</p>'+
         
          '<p align="left">-Cuidador de personas mayores</p>'+
        
          '<p align="left">-Personas mayores de 60 años</p>',

        icon: "info"
      });
    },

    cambiarChecks() {
      if (this.preguntas.Dolor_de_garganta) {
        this.preguntas.Dolor_de_garganta = "Si";
      } else {
        this.preguntas.Dolor_de_garganta = "No";
      }

      if (this.preguntas.Dificultad_respiratoria) {
        this.preguntas.Dificultad_respiratoria = "Si";
      } else {
        this.preguntas.Dificultad_respiratoria = "No";
      }

      if (this.preguntas.Tos) {
        this.preguntas.Tos = "Si";
      } else {
        this.preguntas.Tos = "No";
      }

      if (this.preguntas.Perdida_gusto_olfato) {
        this.preguntas.Perdida_gusto_olfato = "Si";
      } else {
        this.preguntas.Perdida_gusto_olfato = "No";
      }
    },

    evaluacionEsenciales(respuesta) {
      let contador = 0;

      if (respuesta.Contacto_estrecho === "Si") {
        console.log(contador);
        return (this.preguntas.Caso_sospechoso = "Si");
      }

      if (respuesta.Fiebre === "Si") contador++;
      if (respuesta.Dolor_de_garganta === "Si") contador++;
      if (respuesta.Dificultad_respiratoria === "Si") contador++;
      if (respuesta.Tos === "Si") contador++;
      if (respuesta.Perdida_gusto_olfato === "Si") contador++;

      if (contador >= 2) {
        console.log(contador);
        return (this.preguntas.Caso_sospechoso = "Si");
      }
      console.log(contador);
      return (this.preguntas.Caso_sospechoso = "No");
    },

    evaluacionNoEsenciales(respuesta) {
      let contador = 0;


      // Suma uno por cada uno que dice SI
      if (respuesta.Fiebre === "Si") contador++;
      if (respuesta.Dolor_de_garganta === "Si") contador++;
      if (respuesta.Dificultad_respiratoria === "Si") contador++;
      if (respuesta.Tos === "Si") contador++;
      if (respuesta.Perdida_gusto_olfato === "Si") contador++;

      // Tiene contacto estrecho y mas de un sintoma
      if (respuesta.Contacto_estrecho === "Si" && contador > 0)
        return (this.preguntas.Caso_sospechoso = "Si");

      // Si contador es mas de 4 SI
      if (contador >= 4) {
        console.log(contador);
        return (this.preguntas.Caso_sospechoso = "Si");
      }

      // Como no cumple ninguno de los anteriores es NO
      console.log(contador);
      return (this.preguntas.Caso_sospechoso = "No");
    },

    calcularFecha() {
      let dia = '';
        let mes = '';
    
        if( Number(new Date().getDate()) < 10  ){
          dia = `0${new Date().getDate()}`
        }else {
          dia = `${new Date().getDate()}`
        }

        if(Number(new Date().getMonth() +1 ) < 10){
          mes = `0${new Date().getMonth()+1}`
        }else{
          mes = `${new Date().getMonth()+1}`
        }
       
        return `${dia}/${mes}/${new Date().getFullYear()}`;
    },

    async enviarPreguntas(respuestas) {
      this.cambiarChecks();

      if (respuestas.Personal_esencial === "Si") {
        this.evaluacionEsenciales(respuestas);
      } else {
        this.evaluacionNoEsenciales(respuestas);
      }

      // Agrego la fecha al objeto con las respuestas.
      respuestas.Fecha = this.calcularFecha();

      const userUid = await auth.onAuthStateChanged(function(user) {        

        if (user) {
          db.ref("Personas")
            .child(user.uid)
            .update(respuestas)
            .then(resp => {
              Swal.fire({
                title: "Prevenir Berisso",
                text: "Datos enviados con exito !",
                icon: "success"
              });
            })
            .catch(error => {
              Swal.fire({
                title: "Prevenir Berisso",
                text: "Error al actualizar los datos. Intente mas tarde.",
                icon: "error"
              });
            });
        }
      });

      if (
        respuestas.Personal_esencial === "Si" &&
        respuestas.Caso_sospechoso === "No"
      ) {
        this.$router.push("/resultadoesen");
      } else if (respuestas.Caso_sospechoso === "Si") {
        this.$router.push("/resultadoposi");
      } else if (respuestas.Caso_sospechoso === "No") {
        this.$router.push("/resultadonega");
      }
    }
  }
};
</script>

<style>
.radiobtn {
  font-size: 15px;
  padding-top: 8px;
  font-weight: 450;
  padding-inline-start: 15px;
  font-family: "Montserrat";
}
.btnEnviar {
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

.btnEnviar:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
}

.text-autochequeo {
  color: #000000;
  font-weight: 450;
  font-family: "Montserrat";
  src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Medium.ttf);
  margin: auto;
  text-align: start;
  font-size: 15px;
  padding-inline-start: 5px;
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

.tabla {
  margin: auto;
  border: 0;
}

.tablaAutochequeo {
  margin: auto;
  border: 0;
  background-color: #cfd6d2;
  border-radius: 10px;
}
</style>
