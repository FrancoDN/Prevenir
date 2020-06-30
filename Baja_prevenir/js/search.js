var firebaseConfig = {
    apiKey: "AIzaSyDDRyqvjiteCRv9dtsvepBFntWCj2_2u7A",
    authDomain: "coronapp-b1f3c.firebaseapp.com",
    databaseURL: "https://coronapp-b1f3c.firebaseio.com",
    projectId: "coronapp-b1f3c",
    storageBucket: "coronapp-b1f3c.appspot.com",
    messagingSenderId: "971835283337",
    appId: "1:971835283337:web:0637a51c09501d1970b358",
    measurementId: "G-HM80TBP5GQ"
  };
  // Inicializamos Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var rootRef = database.ref('Personas')

rootRef.orderByChild('Caso_sospechoso').equalTo('Si').once('value', function(snapshot) {  
    var a = snapshot.numChildren();
    
    rootRef.orderByChild('Caso_sospechoso').equalTo('No').once('value', function(snapshot) {  

        var numCasos = document.getElementById('casos');
        numCasos.innerHTML ='';  
        var b = snapshot.numChildren();
    
        numCasos.innerHTML += `
        <tr>
        <td>${a}</td>
        <td>${b}</td>
        </tr>
        `
    
    });
});



signOut.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
        alert("Sesión cerrada");
        window.open('https://prevenir.net.ar/Baja_prevenir/index.html', "_self");
      }).catch(function(error) {
        alert("No se a podido cerrar la sesión, intente nuevamente");
      });
    });

    // Persistencia de usuario

    var IDLE_TIMEOUT = 10 * 60;  // 10 minutes of inactivity
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
                window.open('https://prevenir.net.ar/Baja_prevenir/index.html', "_self");
              }).catch(function(error) {
                alert("Error");
              });
        }
    }

// Autentificacion al ingresar

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
   

// Datos completos

var tabla = document.getElementById('tabla');

rootRef.on('value', function(snapshot) {
    tabla.innerHTML ='';   
snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

     
    tabla.innerHTML += `
    <tr>
    <th scope="row">${childData.dni}</th>
    <td>${childData.nombre}</td>
    <td>${childData.apellido}</td>
    <td>${childData.email}</td>  
    <td>${childData.telefono}</td>
    <td>${childData.edad}</td>
    <td>${childData.direc}</td>
    <td>${childData.sexo}</td>
    <td>${childData.Personal_esencial}</td>
    <td>${childData.Perdida_gusto_olfato}</td>
    <td>${childData.Fiebre}</td>
    <td>${childData.Dolor_de_garganta}</td>
    <td>${childData.Contacto_estrecho}</td>
    <td>${childData.Dificultad_respiratoria}</td>
    <td>${childData.Caso_sospechoso}</td>
    </tr>
    `

});
    
});

// Filtro por personal esencial

esencial.addEventListener('click', (e) => {
    e.preventDefault();

    var tabla = document.getElementById('tabla');

rootRef.orderByChild('Personal_esencial').equalTo('Si').on('value', function(snapshot) {
    tabla.innerHTML ='';   
snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

     
    tabla.innerHTML += `
    <tr>
    <th scope="row">${childData.dni}</th>
    <td>${childData.nombre}</td>
    <td>${childData.apellido}</td>
    <td>${childData.email}</td>  
    <td>${childData.telefono}</td>
    <td>${childData.edad}</td>
    <td>${childData.direc}</td>
    <td>${childData.sexo}</td>
    <td>${childData.Personal_esencial}</td>
    <td>${childData.Perdida_gusto_olfato}</td>
    <td>${childData.Fiebre}</td>
    <td>${childData.Dolor_de_garganta}</td>
    <td>${childData.Contacto_estrecho}</td>
    <td>${childData.Dificultad_respiratoria}</td>
    <td>${childData.Caso_sospechoso}</td>
    </tr>
    `

});
    
});


});

// Filtro por DNI

submit.addEventListener('click', (e) => {
    e.preventDefault();

    var dni = document.getElementById('buscar')
    var tabla = document.getElementById('tabla');

rootRef.orderByChild('dni').equalTo(dni.value).on('value', function(snapshot) {
    tabla.innerHTML ='';   
snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

     
    tabla.innerHTML += `
    <tr>
    <th scope="row">${childData.dni}</th>
    <td>${childData.nombre}</td>
    <td>${childData.apellido}</td>
    <td>${childData.email}</td>  
    <td>${childData.telefono}</td>
    <td>${childData.edad}</td>
    <td>${childData.direc}</td>
    <td>${childData.sexo}</td>
    <td>${childData.Personal_esencial}</td>
    <td>${childData.Perdida_gusto_olfato}</td>
    <td>${childData.Fiebre}</td>
    <td>${childData.Dolor_de_garganta}</td>
    <td>${childData.Contacto_estrecho}</td>
    <td>${childData.Dificultad_respiratoria}</td>
    <td>${childData.Caso_sospechoso}</td>
    </tr>
    `

});
    
});


});

// Filtro sospechoso

sospechoso.addEventListener('click', (e) => {
    e.preventDefault();

    var tabla = document.getElementById('tabla');

rootRef.orderByChild('Caso_sospechoso').equalTo('Si').on('value', function(snapshot) {
    tabla.innerHTML ='';   
snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

     
    tabla.innerHTML += `
    <tr>
    <th scope="row">${childData.dni}</th>
    <td>${childData.nombre}</td>
    <td>${childData.apellido}</td>
    <td>${childData.email}</td>  
    <td>${childData.telefono}</td>
    <td>${childData.edad}</td>
    <td>${childData.direc}</td>
    <td>${childData.sexo}</td>
    <td>${childData.Personal_esencial}</td>
    <td>${childData.Perdida_gusto_olfato}</td>
    <td>${childData.Fiebre}</td>
    <td>${childData.Dolor_de_garganta}</td>
    <td>${childData.Contacto_estrecho}</td>
    <td>${childData.Dificultad_respiratoria}</td>
    <td>${childData.Caso_sospechoso}</td>
    </tr>
    `

});
    
});

});


// Filtro no sospechoso

noSospechoso.addEventListener('click', (e) => {
    e.preventDefault();

    var total = 0;
    var tabla = document.getElementById('tabla');

rootRef.orderByChild('Caso_sospechoso').equalTo('No').on('value', function(snapshot) {
    tabla.innerHTML ='';   

snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    

     
    tabla.innerHTML += `
    <tr>
    <th scope="row">${childData.dni}</th>
    <td>${childData.nombre}</td>
    <td>${childData.apellido}</td>
    <td>${childData.email}</td>  
    <td>${childData.telefono}</td>
    <td>${childData.edad}</td>
    <td>${childData.direc}</td>
    <td>${childData.sexo}</td>
    <td>${childData.Personal_esencial}</td>
    <td>${childData.Perdida_gusto_olfato}</td>
    <td>${childData.Fiebre}</td>
    <td>${childData.Dolor_de_garganta}</td>
    <td>${childData.Contacto_estrecho}</td>
    <td>${childData.Dificultad_respiratoria}</td>
    <td>${childData.Caso_sospechoso}</td>
    </tr>
    `
    

});

});
    
});

}else{
    alert("Debe autentificarse antes de acceder a esta página");
    window.open('https://prevenir.net.ar/Baja_prevenir/index.html', "_self");
}
});