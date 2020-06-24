const regFormu = document.querySelector('#regform');
regFormu.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = regFormu['email'].value;
    const dni = regFormu['dni'].value;
    const nombre = regFormu['nombre'].value;
    const apellido = regFormu['apellido'].value;
    const direc = regFormu['direc'].value;
    const edad = regFormu['edad'].value;

    var data = { nombre, apellido, email, dni, direc, edad }
    ref.child(dni).update(data);

    firebase.auth().createUserWithEmailAndPassword(email, dni).then(cred => {
        console.log(cred.user);
    });
    
    firebase.auth().signInWithEmailAndPassword(email, dni).then(cred => {
        console.log(cred);
    }).catch(function(error) {


        var errorCode = error.code;

        if (errorCode == 'auth/wrong-password' || email.value == null || dni.value == null) {
            alert('Email o contraseña erroneos.');
        } else if (errorCode != 'auth/wrong-password' && email.value != null && dni.value != null) {
            alert('Usuario indentificado!');
        }

        regFormu.reset();

    });
})



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