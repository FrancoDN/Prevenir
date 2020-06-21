var firebaseConfig = {
    apiKey: "AIzaSyDDRyqvjiteCRv9dtsvepBFntWCj2_2u7A",
    authDomain: "coronapp-b1f3c.firebaseapp.com",
    databaseURL: "https://coronapp-b1f3c.firebaseio.com",
    projectId: "coronapp-b1f3c",
    storageBucket: "coronapp-b1f3c.appspot.com",
    messagingSenderId: "971835283337",
    appId: "1:971835283337:web:0637a51c09501d1970b358",
    measurementId: "G-HM80TBP5GQ"
};
firebase.initializeApp(firebaseConfig);


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

function getId(id) {
    return document.getElementById(id).value;
}