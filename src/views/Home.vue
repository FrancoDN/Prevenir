<template>
 <div>
      <img src="../../public/assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">

    <table width="300" height="430" class="tabla">
        <tbody>
            &nbsp;
            <tr>
                <td><input @click="navegar( 'sintomas' )" type="button" alt="Sintomas" class="btnSintomas" ></td>
            </tr>
            <tr>
                <td><input type="button" alt="Prevencion" class="btnPrevencion" @click="navegar( 'prevencion' )"></td>
            </tr>
            <tr>
                <td><input type="button" alt="Autochequeo" class="btnAutochequeo" @click="navegar( 'autochequeo' )"></td>
            </tr>
            <tr>
                <td><input type="button" alt="Emergencia" class="btnEmergencia" @click="navegar( 'emergencia' )"></td>
            </tr>
        </tbody>
    </table>

    <table width="300" height="70" class="tabla">
        <tbody>
            <tr>
                <td><input type="button" alt="Sesion" class="btnSesion" id="sesion" @click="cerrarSesion()"></td>
                <td><input type="button" alt="Share" class="btnShare" id="share" onclick="location.href='../share.html'"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {

    methods: {
        navegar( destino ) {
            this.$router.push(destino)
        },

        ...mapActions(['cerrarSesion']),
    }
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
