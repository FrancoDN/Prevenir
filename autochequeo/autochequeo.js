//var data = {gustolf,riesgo,contacto};
var Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato;
var sintomas;


function enviarform() {
    if (document.querySelector('input[name="EseRies"]:checked') && document.querySelector('input[name="contacto"]:checked') && document.querySelector('input[name="temperatura"]:checked')) {
        var uid;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                llenardatos();
                uid = user.uid;
                var data = { Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato }
                ref.child(uid).update(data);
                alert("Envio exitoso!");
            }
        });

    } else {
        alert("Porfavor complete los campos...");
        //TODO: ACÁ VAN LAS VALIDACIONES POR SI ALGUIEN TIENE GANAS DE HACERLAS EH!
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
    if (document.querySelector('input[name="temperatura"]:checked')) {
        Fiebre = "Si";
        sintomas++;
    } else if (document.querySelector('input[name="contacto"]:checked').value !== null) {
        Fiebre = document.querySelector('input[name="contacto"]:checked').value;
    }

    if (document.querySelector('input[name="garganta"]:checked')) {
        Dolor_de_garganta = "Si";
        sintomas++;
    } else {
        Dolor_de_garganta = "No";
    }
    if (document.querySelector('input[name="respiratoria"]:checked')) {
        Dificultad_respiratoria = "Si";
        sintomas++;
    } else {
        Dificultad_respiratoria = "No";
    }
    if (document.querySelector('input[name="toser"]:checked')) {
        Tos = "Si";
        sintomas++;
    } else {
        Tos = "No";
    }
    if (document.querySelector('input[name="gusOlf"]:checked')) {
        Perdida_gusto_olfato = "Si";
        sintomas++;
    } else {
        Perdida_gusto_olfato = "No";
    }
    /*
        if (Contacto_estrecho = "Si" && sintomas >= 1) {
            Sospechoso = "Si";
        } else if (Personal_Esencial = "Si" && sintomas >= 2) {
            Sospechoso = "Si";
        } else if (Fiebre = "Si" && sintomas >= 2) {
            Sospechoso = "Si";
        } else if (Personal_Esencial = "Si" && sintomas <= 1) {
            Sospechoso = "No";
        } else if (Personal_Esencial = "No", Fiebre = "No", Contacto_estrecho = "No" && sintomas == 4) {
            Sospechoso = "Si";
        } else if (Personal_Esencial = "No" && sintomas <= 1) {
            Sospechoso = "No";
        } else if (Personal_Esencial = "No", Contacto_estrecho = "No", Fiebre = "No" && sintomas < 4) {
            Sospechoso = "No";
        }
        */
}