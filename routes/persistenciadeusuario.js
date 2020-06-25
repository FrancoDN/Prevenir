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