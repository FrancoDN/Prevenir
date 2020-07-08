<template>
  <div>
      <img class="banner" src="../assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">
    <table width="300" height="100" class="tabla">
        <tr>
            <td>
                <img src="../assets/images/Autochequeo/autochequeo.png" alt="AutochequeoFormu" class="btnAutochequeoFormu">
            </td>
        </tr>
    </table>

    <table width="320" height="50" class="tablaAutochequeo">

        <tr>
            <td>
                <p class="text-autochequeo">¿Que se entiende como <span onclick="alerta()" style="color:blue;text-decoration: underline;">personal esencial o persona de riesgo</span>?</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="radiobtn">
                    <label><input type="radio" name="EseRies" value="Si" id="EseRies" required> Sí</label>

                    <label><input type="radio" name="EseRies" value="No" id="EseRies" required> No</label>
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
                    <label><input type="radio" name="contacto" value="Si" id="contactoSi" required> Sí</label>

                    <label><input type="radio" name="contacto" value="No" id="contactoNo" required> No</label>
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
                    <label><input type="radio" name="temperatura" value="Si" id="tempSi" required> Sí</label>

                    <label><input type="radio" name="temperatura" value="No" id="tempNo" required> No</label>
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
                    <label><input type="checkbox" name="garganta" value="Si" id="gar"> Dolor de garganta</label><br>

                    <label><input type="checkbox" name="respiratoria" value="Si" id="resp"> Dificultad respiratoria</label><br>

                    <label><input type="checkbox" name="toser" value="Si" id="tos"> Tos</label><br>

                    <label><input type="checkbox" name="gusOlf" value="Si" id="gus"> Perdida de gusto/olfato</label><br>
                </p>
            </td>
        </tr>
    </table><br>

    <table width="206" height="77" class="tabla">
        <tbody>
            <tr>
                <td><input type="button" alt="Enviar" class="btnEnviar" id="enviar" onclick="enviarform()">
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
//var data = {gustolf,riesgo,contacto};

</script>

<style>

</style>