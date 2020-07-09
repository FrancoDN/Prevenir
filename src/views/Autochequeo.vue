<template>
  <div>
      <img class="banner" src="../../public/assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">
    <table width="300" height="100" class="tabla">
        <tr>
            <td>
                <img src="../../public/assets/images/Autochequeo/autochequeo.png" alt="AutochequeoFormu" class="btnAutochequeoFormu">
            </td>
        </tr>
    </table>
<form class="form" @submit.prevent="updateUsuaruo(usuario)">
    <table width="320" height="50" class="tablaAutochequeo">

        <tr>
            <td>
                <p class="text-autochequeo">¿Que se entiende como <span onclick="alerta()" style="color:blue;text-decoration: underline;">personal esencial o persona de riesgo</span>?</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="radiobtn">
                    <label><input type="radio" name="EseRies" value="Si" id="EseRies" v-model="preguntas.pickEs" > Sí</label>
&nbsp;
                    <label><input type="radio" name="EseRies" value="No" id="EseRies" v-model="preguntas.pickEs"> No</label>
                
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="text-autochequeo">¿Tuviste o tenés contacto estrecho con algun caso confirmado de COVID-19?</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="radiobtn">
                    <label><input type="radio" name="contacto" value="Si" id="contactoSi" v-model="preguntas.pickCon"> Sí</label>
&nbsp;
                    <label><input type="radio" name="contacto" value="No" id="contactoNo" v-model="preguntas.pickCon"> No</label>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="text-autochequeo">¿Presentas temperatura igual o mayor a <a style="color: #E15252;"><b>37.5°C</b></a> ?</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="radiobtn">
                    <label><input type="radio" name="temperatura" value="Si" id="tempSi" v-model="preguntas.pickTem"> Sí</label>
                    &nbsp;
                    <label><input type="radio" name="temperatura" value="No" id="tempNo" v-model="preguntas.pickTem"> No</label>
                </p>
            </td>
        </tr>
    </table>

    <table width="320" height="50" class="tablaAutochequeo" style="margin-top: 5px;">
        <tr>
            <td>
                <p class="text-centeredSignUp">Si presentas otros síntomas podes marcarlos a continuación.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="radiobtn">
                    <label><input type="checkbox" name="garganta"  id="gar" v-model="preguntas.garChecked"> Dolor de garganta</label><br>

                    <label><input type="checkbox" name="respiratoria"  id="resp" v-model="preguntas.respChecked"> Dificultad respiratoria</label><br>

                    <label><input type="checkbox" name="toser"  id="tos" v-model="preguntas.tosChecked"> Tos</label><br>

                    <label><input type="checkbox" name="gusOlf"  id="gus" v-model="preguntas.gusChecked"> Perdida de gusto/olfato</label><br>
                    
                </p>
            </td>
        </tr>
    </table><br>
</form>
    <table width="206" height="77" class="tabla">
        <tbody>
            <tr>
                <td><input type="button" alt="Enviar" class="btnEnviar" id="enviar" @click="enviarPreguntas( preguntas )">
                </td>
            </tr>
        </tbody>
    </table>

  </div>
</template>


<!---//TODO: Falta integrar firebase-->
<script>
export default {
        data(){
            
            return {
            
                preguntas: {
                    pickEs: 'No',
                    pickCon: 'No',
                    pickTem: 'No',
                    garChecked: false,
                    respChecked: false,
                    tosChecked: false,
                    gusChecked: false
                }
            }
        },

         methods: {
            updateUsuario( usuario ) {

            },

            enviarPreguntas( respuestas ) {
                console.log(respuestas)
            }
        }
}
//var data = {gustolf,riesgo,contacto};
import {auth, db} from '../firebase'

function enviarform() {
    if (document.querySelector('input[name="EseRies"]:checked') && document.querySelector('input[name="contacto"]:checked') && document.querySelector('input[name="temperatura"]:checked')) {
        var uid;
        auth.onAuthStateChanged(function(user) {
            if (user) {
                llenardatos();
                uid = user.uid;
                var data = { Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato, Sospechoso }
                db.ref('Personas').child(uid).update(data);
                alert("Envio exitoso!");
            }
        });

    } else {
        if (!document.querySelector('input[name="EseRies"]:checked')) {
            window.alert("Debe indicar si es personal esencial o persona de riesgo");
        }

        if (!document.querySelector('input[name="contacto"]:checked')) {
            window.alert("Debe indicar si tuvo o tiene contacto estrecho con algun caso confirmado de COVID-19");

        }
        if (!document.querySelector('input[name="temperatura"]:checked')) {
            window.alert("Debe indicar si presenta temperatura mayor a 37.5°C");

        }
    }
}


function llenardatos() {

    if (document.querySelector('input[name="EseRies"]:checked')) {
        Personal_Esencial = document.querySelector('input[name="EseRies"]:checked').value;
    }

    if (document.querySelector('input[name="contacto"]:checked')) {
        Contacto_estrecho = document.querySelector('input[name="contacto"]:checked').value;
    }
    if (document.querySelector('input[name="temperatura"]:checked')) {
        Fiebre = document.querySelector('input[name="temperatura"]:checked').value;
        if (Fiebre == "Si") {
            sintomas++;
        }
    }

    if (document.querySelector('input[name="garganta"]:checked')) {
        Dolor_de_garganta = "Si";
        sintomas++;
    } else {
        Dolor_de_garganta = "No";
    }
    if (document.querySelector('input[name="respiratoria"]:checked')) {
        Dificultad_respiratoria = "Si";
        sintomas++;
    } else {
        Dificultad_respiratoria = "No";
    }
    if (document.querySelector('input[name="toser"]:checked')) {
        Tos = "Si";
        sintomas++;
    } else {
        Tos = "No";
    }
    if (document.querySelector('input[name="gusOlf"]:checked')) {
        Perdida_gusto_olfato = "Si";
        sintomas++;
    } else {
        Perdida_gusto_olfato = "No";
    }

    if (Contacto_estrecho === "Si" && sintomas >= 1) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Personal_Esencial === "Si" && sintomas >= 2) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Fiebre === "Si" && sintomas >= 2) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Personal_Esencial === "Si" && sintomas <= 1) {
        Sospechoso = "No";
        window.open('https://prevenir.net.ar/resultados/esen_noPositivo.html', "_self");
    } else if (Personal_Esencial === "No" && Fiebre === "No" && Contacto_estrecho === "No" && sintomas === 4) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Personal_Esencial === "No" && sintomas <= 1) {
        Sospechoso = "No";
        window.open('https://prevenir.net.ar/resultados/noPositivo.html', "_self");
    } else if (Personal_Esencial === "No" && Contacto_estrecho === "No" && Fiebre === "No" && sintomas < 4) {
        Sospechoso = "No";
        window.open('https://prevenir.net.ar/resultados/noPositivo.html', "_self");
    }

}

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
    padding-inline-start: 5px
}
.text-centeredSignUp {
    color: #000000;
    font-weight: 450;
    font-family: "Montserrat", sans-serif;
    src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Light.ttf);
    margin: auto;
    text-align: center;
    font-size: 15px;
    padding-inline-start: 5px
}

.tabla {
    margin: auto;
    border: 0;
}

.tablaAutochequeo {
    margin: auto;
    border: 0;
    background-color: #CFD6D2;
    border-radius: 10px;
}
</style>