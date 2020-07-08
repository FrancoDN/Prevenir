<template>
  <div>

      <img class="banner" src="../assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">
    <table width="200" height="80" class="tabla">
        <tr>
            <td>
                <img src="../assets/images/Registro/Datos personales.png" alt="AutochequeoFormu" class="btnAutochequeoFormu">
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
</template>

<script>
const regFormu = document.querySelector('#regform');
firebase.auth().signOut();
var uid;

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var telefono = document.getElementById("telefono");
var edad = document.getElementById("edad");

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
    firebase.auth().createUserWithEmailAndPassword(email, dni).then(cred => {
        var uid;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {

                uid = user.uid;
                console.log(uid);
                var data = { nombre, apellido, email, dni, direc, edad }
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
</script>

<style>

</style>