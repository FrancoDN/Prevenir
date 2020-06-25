firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.open('../botonera/botonera.html', "_self");
    }
});