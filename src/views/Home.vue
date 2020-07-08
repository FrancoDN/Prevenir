<template>
  <div class="app">
      <form id="loginform" autocomplete="on">

        <img id="bannerWeb" src="../../public/assets/images/Web/head_web.png" width="100%" height="100%">

        <div class="container">
            <div>
                <a><input required type="email" id="email" name="email" class="loginFieldSignUp" placeholder="Email"></a>
            </div>

            <div>
                <a><input required type="number" id="dni"  name="dni" class="loginField" placeholder="DNI"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="8"></a>
            </div>

        </div>

       <table width="206" height="77" class="tabla">
            <tbody>
                <tr>
                    <td><input type="submit" alt="Ingreso" class="btnIngreso" value="">
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <p class="text-center">¿No estás registrado?</p>
        <br>
        <table width="248" height="77" class="tabla">
            <tbody>
                <tr>
                    <td><input type="button" alt="Ingreso" class="btnRegistro" id="signUp" onclick="location.href='../signUp/signup.html'">
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-centered">Al registrarse está aceptando los
            <p class="text-centeredTerm"><a href="/condiciones/condiciones.html"><b>Términos Y Condiciones.</b></a></p>
       

    </form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      img: '../../public/assets/imagenes/Head chico.png'
    }
  },
}
</script>

<style>

.container {
    align-content: center;
    margin: auto;
    width: 90%;
    margin-top: 20px;
    max-width: 800px;
}

.tabla {
    margin: auto;
    border: 0;
}

.text-center {
    color: #989998;
    font-family: "Montserrat";
    src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-SemiBold.ttf);
    margin: auto;
    font-size: 15px;
}

.btnIngreso {
    margin: 0;
    background-image: url(/assets/images/Inicio/Ingresar.png);
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

.btnIngreso:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}

.btnRegistro {
    margin: 0;
    background-image: url(/assets/images/Inicio/REGISTRO.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 70%;
    outline: none;
    border: none;
}

.btnRegistro:hover {
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 60%;
    border: none;
    outline: transparent;
    border: transparent;
}

.text-centered {
    color: #989998;
    font-family: "Montserrat";
    src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-SemiBold.ttf);
    margin: auto;
    text-align: center;
    font-size: 15px;
}

.text-centeredTerm {
    color: #1244e7;
    font-family: "Montserrat";
    src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Bold.ttf);
    margin: auto;
    text-align: center;
    font-size: 15px;
}
</style>
