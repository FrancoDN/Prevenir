firebase.auth().onAuthStateChanged(function(user) {
    if (user) {} else {
        alert("Debe iniciar sesión antes de acceder a esta página");
        window.open('https://prevenir.net.ar/index.html', "_self");
    }
});