//Login
const loginFormu = document.getElementById('loginform');


//Auth
loginFormu.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginFormu['email'].value;
    const dni = loginFormu['dni'].value;
    var user = firebase.auth().currentUser;
    var emailVerified = user.emailVerified;

    if(emailVerified === true){
        firebase.auth().signInWithEmailAndPassword(email, dni).then(cred => {
            //console.log(cred);
            window.open('https://prevenir.net.ar/botonera/botonera.html', "_self");
        }).catch(function(error) {
            
    
            var errorCode = error.code;
    
            if (errorCode == 'auth/wrong-password' || email.value == null || dni.value == null || errorCode == 'auth/invalid-email') {
                alert('Email o contraseña erroneos.');
            } else if (errorCode != 'auth/wrong-password' && email.value != null && dni.value != null) {
                alert('Usuario indentificado!');
            }
    
            loginFormu.reset();
    
        });
        
    }else{
        window.alert("Debe verificar su email antes de ingresar, si ya lo hizo, por favor recargue la pagina.");
        location.reload();
    }
    
});

function getId(id) {
    return document.getElementById(id).value;
}