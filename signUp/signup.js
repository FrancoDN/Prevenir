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
/*
const regFormu = document.querySelector('#regform');
//Constantes
const email = regFormu['email'].value;
const dni = regFormu['dni'].value;
const nombre = regFormu['nombre'].value;
const apellido = regFormu['apellido'].value;
const direc = regFormu['direc'].value;
const edad = regFormu['edad'].value;

var ref = firebase.database().ref('Personas');

regFormu.addEventListener("submit", (e) => {
    e.preventDefault();

    var data = { nombre, apellido, email, dni, direc, edad }
    ref.child(dni).update(data);

    firebase.auth().createUserWithEmailAndPassword(email, dni).then(cred => {
        console.log(cred.user);
    });


    alert("Registrado");
    document.getElementById("regform").reset();
});

*/

/*
function getId(id) {
    return document.getElementById(id).value;
}
*/

