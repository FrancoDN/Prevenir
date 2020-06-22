//Fijarse si hay usuario conectado

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('Hay un usuario logeado: ', user)
    } else {
        console.log('No hay un usuario logeado.')
    }
})