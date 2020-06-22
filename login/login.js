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
const loginFormu = document.getElementById('loginform');


//Auth
loginFormu.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("apretadoide")

    const email = loginFormu['email'].value;
    const dni = loginFormu['dni'].value;

    firebase.auth().signInWithEmailAndPassword(email, getId('dni')).then(cred => {
        console.log(cred);
    }).catch(function(error) {

    
        var errorCode = error.code;
    
        if (errorCode == 'auth/wrong-password' || email.value == null || dni.value == null) {
            alert('Email o contraseña erroneos.');
          } else if (errorCode != 'auth/wrong-password' && email.value != null && dni.value != null){
            alert('Usuario indentificado!');
          }
    
        loginFormu.reset();
        
      });
});

//TODO: Limpiar codigo -------------------

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