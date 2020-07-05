firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.open('https://prevenir.net.ar/ensenada/botonera/botonera.html', "_self");
    }
});