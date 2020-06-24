const regFormu = document.querySelector('#regform');
firebase.auth().signOut();
var uid;

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
                window.open('/Users/franonano11/Desktop/Prevenir/login/login.html', "_self");
                } else {
                 window.alert("No se pudo cargar tu información, intentá nuevamente");
            }
        });
        
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