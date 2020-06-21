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

var ref = firebase.database().ref('Personas');


//Constantes



//Login
const loginFormu = document.querySelector('#loginform');
loginFormu.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginFormu['email'].value;
    const dni = loginFormu['dni'].value;

    firebase.auth().signInWithEmailAndPassword(email, dni).then(cred => {
        console.log(cred);
    })
})

/*

document.getElementById("loginform").addEventListener("submit", (e) => {
    e.preventDefault();

    email = getId("email");
    dni = getId("dni");

    firebase.auth().signInWithEmailAndPassword(email, dni).catch(e => alert(e.message));

    alert("Logeado papi " + email);

    document.getElementById("loginform").reset();
});
*/

function getId(id) {
    return document.getElementById(id).value;
}