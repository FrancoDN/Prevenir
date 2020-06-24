//var data = {gustolf,riesgo,contacto};
var Personal_Esencial ,Contacto_estrecho,Fiebre,garganta,Dificultad_respiratoria,Tos,falta_gusto_olfato = null;



function enviarform() {
    if(document.querySelector('input[name="EseRies"]:checked').value !== null){
        Personal_Esencial = document.querySelector('input[name="EseRies"]:checked').value;
       }

       if(document.querySelector('input[name="contacto"]:checked').value!== null){
        Contacto_estrecho = document.querySelector('input[name="contacto"]:checked').value;
       }

       if(document.querySelector('input[name="temperatura"]:checked').value!== null){
        temperatura = document.querySelector('input[name="temperatura"]:checked').value;
       }
       if(document.querySelector('input[name="garganta"]:checked')){
           garganta="Si";
              }else {
           garganta="No";
       }
       if(document.querySelector('input[name="respiratoria"]:checked')){
           respiratoria="Si";
              }else {
        respiratoria="No";
        }
        if(document.querySelector('input[name="toser"]:checked')){
        toser="Si";
           }else {
         toser="No";
            }
        if(document.querySelector('input[name="gusolf"]:checked')){
        falta_gusto_olfato="Si";
        }else {
        falta_gusto_olfato="No";
        }
    //riesgo = document.querySelector('input[name="EseRies"]:checked').value;
    //contacto = document.querySelector('input[name="contacto"]:checked').value;
    //temperatura = document.querySelector('input[name="temperatura"]:checked').value;
    //garganta = document.querySelector('input[name="garganta"]:checked').value;
    //dificultad_respiratoria = document.querySelector('input[name="respiratoria"]:checked').value;
    //tos = document.querySelector('input[name="toser"]:checked').value;
    //falta_gusto_olfato = document.querySelector('input[name="gusOlf"]:checked').value;
    
    console.log(Personal_Esencial);
    console.log(contacto);
    console.log(temperatura);
    console.log(garganta);
    console.log(respiratoria);
    console.log(toser);
    console.log(falta_gusto_olfato);
}

