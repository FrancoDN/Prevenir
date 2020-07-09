<template>
  <div>
    <h1>Registro</h1>

    <form class="form" @submit.prevent="crearUsuario(usuario)">
        <div>
            <label>Nombre</label>
            <input type="text" v-model="usuario.nombre">
        </div>
                
        <div>
            <label>Apellido</label>
            <input type="text" v-model="usuario.apellido">    
        </div>
        
        <div>
            <label>DNI</label>
            <input type="text" v-model="usuario.dni">    
        </div>  
                
        <div>
            <label>Email</label>
            <input type="text" v-model="usuario.email">    
        </div>
                
        <div>
            <label>Telefono</label>
            <input type="text" v-model="usuario.telefono">    
        </div>
                
        <div>
            <label> Edad</label>
            <input type="text" v-model="usuario.edad">    
        </div>
                
        <div>
            <label> direccion</label>
            <input type="text" v-model="usuario.direccion">    
        </div>
                
        <div>
            <label>Sexo</label>
            <input type="text" v-model="usuario.sexo">    
        </div>

        <div>
            <button type="submit">Nuevo</button>
        </div>
        
    </form>
  </div>
</template>

<script>

    import {auth, db} from '../firebase'

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
                    console.log(resp);
                })
                
            },
        }


}
</script>

<style>
.btnAutochequeoFormu {
    margin: 0;
    width: 100%;
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
    margin: auto;
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
</style>