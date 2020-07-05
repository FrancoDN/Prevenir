var firebaseConfig = {
  apiKey: "AIzaSyCxBaoLoczWuMLOanQSBzyZMrgZ1CyBVaI",
  authDomain: "prevenir-ensenada.firebaseapp.com",
  databaseURL: "https://prevenir-ensenada.firebaseio.com",
  projectId: "prevenir-ensenada",
  storageBucket: "prevenir-ensenada.appspot.com",
  messagingSenderId: "489743770277",
  appId: "1:489743770277:web:2adb3526e749a1f5e0e34c",
  measurementId: "G-DRHFR1WHB1"
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