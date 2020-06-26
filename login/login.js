//Login
const loginFormu = document.getElementById('loginform');


//Auth
loginFormu.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("apretadoide")

    const email = loginFormu['email'].value;
    const dni = loginFormu['dni'].value;

    firebase.auth().signInWithEmailAndPassword(email, dni).then(cred => {
        console.log(cred);
    }).catch(function(error) {


        var errorCode = error.code;

        if (errorCode == 'auth/wrong-password' || email.value == null || dni.value == null || errorCode == 'auth/invalid-email') {
            alert('Email o contraseña erroneos.');
        } else if (errorCode != 'auth/wrong-password' && email.value != null && dni.value != null) {
            alert('Usuario indentificado!');
        }

        loginFormu.reset();

    });
});

function getId(id) {
    return document.getElementById(id).value;
}