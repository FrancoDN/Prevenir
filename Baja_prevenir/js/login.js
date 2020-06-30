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
  // Inicializamos Firebase
  firebase.initializeApp(firebaseConfig);
  
// Ingreso
const signInForm = document.getElementById("login");
var contador = 0;
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Autenticamos al usuario

  firebase.auth().signInWithEmailAndPassword(email, password).then(userCredential => {
      alert('Ingreso exitoso!');
      signInForm.reset();
      console.log("ingreso exitoso");
      window.open('https://prevenir.net.ar/Baja_prevenir/search.html', "_self");
 
  
  }).catch(function(error) {

    
    var errorCode = error.code;

    if (errorCode == 'auth/wrong-password' || email.value == null || password.value == null) {
        alert('Email o contraseña erroneos.');
      } else if (errorCode != 'auth/wrong-password' && email.value != null && password.value != null){
        alert('Usuario indentificado!');
      }

    signInForm.reset();
    
  });
});