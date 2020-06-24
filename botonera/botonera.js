// Persistencia de usuario

var IDLE_TIMEOUT = 10 * 60; // 10 minutes of inactivity
var _idleSecondsCounter = 0;
document.onclick = function() {
    _idleSecondsCounter = 0;
};
document.onmousemove = function() {
    _idleSecondsCounter = 0;
};
document.onkeypress = function() {
    _idleSecondsCounter = 0;
};
window.setInterval(CheckIdleTime, 1000);

function cerrarsesion() {
    firebase.auth().signOut();
}



function CheckIdleTime() {
    _idleSecondsCounter++;
    //console.log(_idleSecondsCounter);
    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
        // Cierra la sesion de firebase 
        firebase.auth().signOut().then(function() {
            alert("Sesión cerrada por inactividad");
            window.open('../login/login.html', "_self");
        }).catch(function(error) {
            alert("Error");
        });
    }
}
// Autentificacion al ingresar

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('Estás logeado.');
    } else {
        alert("Debe autentificarse antes de acceder a esta página");
        window.open('../login/login.html', "_self");
    }
});