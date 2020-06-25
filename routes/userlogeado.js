firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.open('https://prevenir.net.ar/botonera/botonera.html', "_self");
    }
});