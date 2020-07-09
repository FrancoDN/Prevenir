<template>
  <div>
    <img class="banner" src="../../public/assets/images/Web/Head_chicoWeb.png" alt="berisso banner" width="100%" height="100%">

    <div class="tabla">
        <img src="../../public/assets/images/Registro/datos_personales.png" alt="AutochequeoFormu" class="btnAutochequeoFormu" >
    </div>
    <p class="text-centeredSignUp">Esto es un pre-diagnóstico medico. En caso de dudas, consultar a su medico de cabecera.</p>
    <form class="form" @submit.prevent="crearUsuario(usuario)">
        <div>
            <input placeholder="Nombre" type="text" class="loginFieldSignUp" v-model="usuario.nombre">
        </div>
                
        <div>
            <input placeholder="Apellido" class="loginFieldSignUp" type="text" v-model="usuario.apellido">    
        </div>
        
        <div>
            <input placeholder="DNI" class="loginFieldSignUp" type="text" v-model="usuario.dni">    
        </div>  
                
        <div>
            <input placeholder="Email" class="loginFieldSignUp" type="text" v-model="usuario.email">    
        </div>
                
        <div>
            <input placeholder="Telefono" class="loginFieldSignUp" type="text" v-model="usuario.telefono">    
        </div>
                
        <div>
            <input placeholder="Edad" class="loginFieldSignUp" type="text" v-model="usuario.edad">    
        </div>
                
        <div>
            <input placeholder="Dirección" class="loginFieldSignUp" type="text" v-model="usuario.direccion">    
        </div>
                
        <div>
            <input placeholder="Sexo" class="loginFieldSignUp" type="text" v-model="usuario.sexo">    
        </div>
<br>
        <table width="150" height="60" class="tabla">
            <tbody>
                <tr>
                    <td>
                        <input type="submit" alt="Ingreso" class="btnSignUp" value="">
                    </td>
                </tr>
            </tbody>
        </table>
        
    </form>
    </div>
</template>

<script>

    import {auth, db} from '../firebase'
    import { mapActions, mapState } from "vuex";

    export default {
        data(){
            return {
                usuario: {
                    nombre: '',
                    apellido: '',
                    dni: '',
                    email: '',
                    telefono: '',
                    edad: '',
                    direccion: '',
                    sexo: ''
                }
            }
        },

        methods: {

            crearUsuario( usuario ) {
            auth.createUserWithEmailAndPassword(usuario.email, usuario.dni)
                .then( resp => {
                    const uuid = resp.user.uid;
                    
                   //var data = {nombre, apellido, dni, email, telefono, edad, direccion, sexo}
                   //db.child("Personas").child(uuid).update(usuario);

                   db.ref('Personas').child(uuid).update(usuario);
                
            });
        },  


            ...mapActions(['crearUsuario']),

        }
    }
</script>

<style>

.btnAutochequeoFormu {
    margin-top: 10px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 180px;
    height: 50px;
    border-radius: 100px;
}


.btnSignUp {
    margin: 0;
    background-image: url(/assets/images/Registro/ENVIAR.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 70%;
    border: none;
    outline: transparent;
    border: transparent;
}

.loginField {
    width: 100%;
    height: 52px;
    margin-top: 6%;
    align-content: center;
    border-radius: 24px;
    background-color: #DFDFDF;
    border: 0;
    outline: 0;
    position: relative;
    padding-inline-start: 30px;
}

.loginFieldSignUp {
    width: 100%;
    height: 47px;
    margin-top: 6%;
    align-content: center;
    border-radius: 24px;
    background-color: #DFDFDF;
    border: 0;
    outline: 0;
    position: relative;
    padding-inline-start: 30px;
}

.container {
    align-content: center;
    margin: auto;
    width: 90%;
    margin-top: 20px;
    max-width: 800px;
}

.tabla {
    width: 100%;
    border: 0;
    

}

.textStyle {
    color: #000000;
    
    font-family: "Montserrat", sans-serif;
    src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Light.ttf);
    margin: auto;
    font-size: 15px;
   
}

.text-centeredSignUp {
    color: #000000;
    font-weight: 450;
    font-family: "Montserrat", sans-serif;
    src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Light.ttf);
    margin: auto;
    text-align: center;
    font-size: 15px;
    padding-inline-start: 5px
}
.banner {
    width: 100%;
    height: 100%;
    margin: 0;
    align-items: center;
}


</style>