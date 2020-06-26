//var data = {gustolf,riesgo,contacto};
var Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato;
var sintomas = 0;
var Sospechoso = null;


function enviarform() {
    if (document.querySelector('input[name="EseRies"]:checked') && document.querySelector('input[name="contacto"]:checked') && document.querySelector('input[name="temperatura"]:checked')) {
        var uid;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                llenardatos();
                uid = user.uid;
                var data = { Personal_Esencial, Contacto_estrecho, Fiebre, Dolor_de_garganta, Dificultad_respiratoria, Tos, Perdida_gusto_olfato, Sospechoso }
                ref.child(uid).update(data);
                alert("Envio exitoso!");
            }
        });

    } else {
        if (!document.querySelector('input[name="EseRies"]:checked')) {
            window.alert("Debe indicar si es personal esencial o persona de riesgo");
        }
    
        if (!document.querySelector('input[name="contacto"]:checked')) {
            window.alert("Debe indicar si tuvo o tiene contacto estrecho con algun caso confirmado de COVID-19");
            
        }
        if (!document.querySelector('input[name="temperatura"]:checked')) {
            window.alert("Debe indicar si presenta temperatura mayor a 37.5°C");
            
        } 
    }
}


function llenardatos() {

    if (document.querySelector('input[name="EseRies"]:checked')) {
        Personal_Esencial = document.querySelector('input[name="EseRies"]:checked').value;
    }

    if (document.querySelector('input[name="contacto"]:checked')) {
        Contacto_estrecho = document.querySelector('input[name="contacto"]:checked').value;
    }
    if (document.querySelector('input[name="temperatura"]:checked')) {
        Fiebre = document.querySelector('input[name="temperatura"]:checked').value;
        if(Fiebre == "Si"){
            sintomas++;
        }        
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

    if (Contacto_estrecho === "Si" && sintomas >= 1) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Personal_Esencial === "Si" && sintomas >= 2) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Fiebre === "Si" && sintomas >= 2) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Personal_Esencial === "Si" && sintomas <= 1) {
        Sospechoso = "No";
        window.open('https://prevenir.net.ar/resultados/esen_noPositivo.html', "_self");
    } else if (Personal_Esencial === "No" && Fiebre === "No" && Contacto_estrecho === "No" && sintomas === 4) {
        Sospechoso = "Si";
        window.open('https://prevenir.net.ar/resultados/positivo.html', "_self");
    } else if (Personal_Esencial === "No" && sintomas <= 1) {
        Sospechoso = "No";
        window.open('https://prevenir.net.ar/resultados/noPositivo.html', "_self");
    } else if (Personal_Esencial === "No" && Contacto_estrecho === "No" && Fiebre === "No" && sintomas < 4) {
        Sospechoso = "No";
        window.open('https://prevenir.net.ar/resultados/noPositivo.html', "_self");
    }   

}

