<template>
  <div>

      <img class="banner" src="../../public/assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">
    <table width="200" height="80" class="tabla">
        <tr>
            <td>
                <img src="../../public/assets/images/Registro/datos_personales.png" alt="AutochequeoFormu" class="btnAutochequeoFormu">
            </td>
        </tr>
    </table>
    <p class="text-centeredSignUp">Esto es un pre-diagnóstico medico. En caso de dudas, consultar a su medico de cabecera.</p>
    <div class="container">
        <form id="regform" autocomplete="on">
            <div class="container">
                <div>
                    <a><input required minlength="3" maxlenght="30" class="loginFieldSignUp" name="nombre" id="nombre" placeholder="Nombre"></a>
                </div>

                <div>
                    <a><input requiered minlength="3" maxlenght="30" type="text" class="loginFieldSignUp" name="apellido" id="apellido" placeholder="Apellido"></a>
                </div>
                <div>
                    <a><input required type="number"  id="dni"  name="dni" class="loginFieldSignUp" placeholder="DNI"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="8"></a>
                </div>
                <div>
                    <a><input required type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" class="loginFieldSignUp" placeholder="Email"></a>
                </div>
                <div>
                    <a><input required type="number"  id="telefono" name="telefono" class="loginFieldSignUp" placeholder="Teléfono"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="10"></a>
                </div>
                <div>
                    <a><input required type="number"  id="edad" name="edad" class="loginFieldSignUp" placeholder="Edad"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="2"></a>
                </div>
                <div>
                    <a><input required type="text" id="direc" name="direc" class="loginFieldSignUp" placeholder="Dirección"></a>
                </div><br>
                <div class="textStyle">
                    <label><input type="radio" name="sexo" value="Masculino" id="mascu" required> Masculino</label><br>

                    <label><input type="radio" name="sexo" value="Femenino" id="feme" required> Femenino</label>
                </div>
            </div>
            <table width="150" height="77" class="tabla">
                <tbody>
                    <tr>
                        <td><input type="submit" alt="Ingreso" class="btnSignUp" value="">
    </td>
    </tr>
    </tbody>
    </table>
    </form>
    </div>
  </div>
</template>

<script>
/*
const regFormu = document.querySelector('#regform');
firebase.auth().signOut();
var uid;

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var telefono = document.getElementById("telefono");
var edad = document.getElementById("edad");
var sexo = document.querySelector('input[name=sexo]:checked');

// TODO: Falta hacer la validacion para el campo DNI y teléfono, hay que ponerle un largo minimo.

regFormu.dni.oninvalid = function(event){
    event.target.setCustomValidity('Debe ingresar un DNI válido');
}
regFormu.telefono.oninvalid = function(event){
    event.target.setCustomValidity('El teléfono debe tener 10 caracteres de largo');
}




regFormu.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = regFormu['email'].value;
    const dni = regFormu['dni'].value;
    const nombre = regFormu['nombre'].value;
    const apellido = regFormu['apellido'].value;
    const direc = regFormu['direc'].value;
    const edad = regFormu['edad'].value;
    const sexo = regFormu['sexo'].value;
    firebase.auth().createUserWithEmailAndPassword(email, dni).then(cred => {
        var uid;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {

                uid = user.uid;
                console.log(uid);
                var data = { nombre, apellido, email, dni, direc, edad, sexo }
                ref.child(uid).update(data);
                window.open('https://prevenir.net.ar/index.html', "_self");
            } else {
                window.alert("No se pudo cargar tu información, intentá nuevamente");
            }
        });
    }).catch(function(error) {

    
        var errorCode = error.code;
    
        if (errorCode == 'auth/email-already-in-use') {
            alert('Este email ya está en uso, por favor ingrese otro.');
          }
        if (errorCode == 'auth/weak-password'){
            alert('Ingrese un DNI válido');
          }
        });

});
*/
export default{

}
</script>

<style>

.btnAutochequeoFormu {
    margin: 0;
    width: 100%;
    border-radius: 100px;
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
    background-color: #DFDFDF;
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
    background-color: #DFDFDF;
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
    margin: auto;
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
    padding-inline-start: 5px
}

</style>