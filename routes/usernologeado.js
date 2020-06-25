firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('Estás logeado.');
    } else {
        alert("Debe iniciar sesión antes de acceder a esta página");
        window.open('https://prevenir.net.ar/index.html', "_self");
    }
});