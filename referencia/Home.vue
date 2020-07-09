<template>
  <div>
      <img src="../../public/assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">

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
        </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.btnSesion {
    margin: 0;
    background-image: url(/assets/images/BOTONES/sesion.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 40%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnSesion:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 30%;
    border: none;
    outline: transparent;
    border: transparent;
}
.btnShare {
    margin: 0;
    background-image: url(/assets/images/BOTONES/comparti.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnShare:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}
.btnAutochequeo {
    margin: 0;
    background-image: url(/assets/images/BOTONES/autochequeo.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnAutochequeo:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnEmergencia {
    margin: 0;
    background-image: url(/assets/images/BOTONES/numeros.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnEmergencia:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}
.btnSintomas {
    margin: 0;
    background-image: url(/assets/images/BOTONES/sintomas.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnSintomas:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnPrevencion {
    margin: 0;
    background-image: url(/assets/images/BOTONES/prevencion.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnPrevencion:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}
</style>