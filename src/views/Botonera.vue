<template>
  <div>
      <img src="../assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">

    <table width="300" height="430" class="tabla">
        <tbody>
            &nbsp;
            <tr>
                <td><input type="button" alt="Sintomas" class="btnSintomas" onclick="location.href='../prevenSinto/sintomas.html'"></td>
            </tr>
            <tr>
                <td><input type="button" alt="Prevencion" class="btnPrevencion" onclick="location.href='../prevenSinto/prevencion.html'"></td>
            </tr>
            <tr>
                <td><input type="button" alt="Autochequeo" class="btnAutochequeo" onclick="location.href='../autochequeo/autochequeo.html'"></td>
            </tr>
            <tr>
                <td><input type="button" alt="Emergencia" class="btnEmergencia" onclick="location.href='../emergencia/numeros.html'"></td>
            </tr>
        </tbody>
    </table>

    <table width="300" height="70" class="tabla">
        <tbody>
            <tr>
                <td><input type="button" alt="Sesion" class="btnSesion" id="sesion" onclick="cerrarsesion()"></td>
                <td><input type="button" alt="Share" class="btnShare" id="share" onclick="location.href='../share.html'"></td>
            </tr>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>