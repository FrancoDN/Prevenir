firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('Estás logeado.');
    } else {
        alert("Debe iniciar sesión antes de acceder a esta página");
        window.open('../login/login.html', "_self");
    }
});