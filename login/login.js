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
        } else if (errorCode != 'auth/wrong-password' && email.value != null && dni.value != null) {
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