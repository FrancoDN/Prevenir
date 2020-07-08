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

</style>