//var data = {gustolf,riesgo,contacto};
var Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato;


function enviarform() {
    if (document.querySelector('input[name="EseRies"]:checked') && document.querySelector('input[name="contacto"]:checked') && document.querySelector('input[name="temperatura"]:checked')) {
        var uid;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                llenardatos();
                uid = user.uid;
                console.log(uid);
                var data = { Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato }
                ref.child(uid).update(data);
                alert("Envio exitoso!");
            }
        });

    } else {
        alert("Porfavor complete los campos...");
        //ACÁ VAN LAS VALIDACIONES POR SI ALGUIEN TIENE GANAS DE HACERLAS EH!
    }
}


function llenardatos() {
    if (document.querySelector('input[name="EseRies"]:checked').value !== null) {
        Personal_Esencial = document.querySelector('input[name="EseRies"]:checked').value;
    } else {
        errorSpan.innerHTML = "* You must pick a flavor.";
        return false;
    }

    if (document.querySelector('input[name="contacto"]:checked').value !== null) {
        Contacto_estrecho = document.querySelector('input[name="contacto"]:checked').value;
    }

    if (document.querySelector('input[name="temperatura"]:checked').value !== null) {
        Fiebre = document.querySelector('input[name="temperatura"]:checked').value;
    }
    if (document.querySelector('input[name="garganta"]:checked')) {
        Dolor_de_garganta = "Si";
    } else {
        Dolor_de_garganta = "No";
    }
    if (document.querySelector('input[name="respiratoria"]:checked')) {
        Dificultad_respiratoria = "Si";
    } else {
        Dificultad_respiratoria = "No";
    }
    if (document.querySelector('input[name="toser"]:checked')) {
        Tos = "Si";
    } else {
        Tos = "No";
    }
    if (document.querySelector('input[name="gusOlf"]:checked')) {
        Perdida_gusto_olfato = "Si";
    } else {
        Perdida_gusto_olfato = "No";
    }
}