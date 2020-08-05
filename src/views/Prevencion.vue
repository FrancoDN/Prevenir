<template>
  <div>

       <img    
            class="banner" 
            src="../../public/assets/images/Web/head_web.png" 
            alt="berisso banner" 
            width="100%" 
            height="100%"
        >

    <br><br>

    <table width="100" class="tabla">
        <tr>
            <td>
                <img 
                    src="../../public/assets/images/prevencion/quedarse_casa.png" 
                    alt="" 
                    width="100%" 
                    style="padding-left: 5px;"
                >
            </td>
            <td>
                <img 
                    src="../../public/assets/images/prevencion/lavar_manos.png" 
                    alt="" 
                    width="100%" 
                    style="padding-left: 5px;"
                >
            </td>
        </tr>

        <tr>
            <td>
                <img 
                    src="../../public/assets/images/prevencion/toser.png" 
                    alt="" 
                    width="100%" 
                    style="padding-left: 5px;"
                >
            </td>
            <td>
                <img 
                    src="../../public/assets/images/prevencion/evitar_tocar.png" 
                    alt="" 
                    width="100%" 
                    style="padding-left: 5px;"
                >
            </td>
        </tr>

        <tr>
            <td>
                <img 
                    src="../../public/assets/images/prevencion/distancia.png" 
                    alt="" 
                    width="100%" 
                    style="padding-left: 5px;"
                >
            </td>
            <td>
                <img 
                    src="../../public/assets/images/prevencion/desinfectar.png" 
                    alt="" 
                    width="100%" 
                    style="padding-left: 5px;"
                >
            </td>
        </tr>
    </table>
<br>
    <table width="130" height="40" class="tabla">
        <tbody>
            <tr>
                <td>
                    <input 
                        type="button" 
                        alt="Menu" 
                        class="btnMenu" 
                        @click="$router.push('/')"
                    >
                </td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.banner {
    width: 100%;
    height: 100%;
    margin: 0;
    align-items: center;
}
.btnMenu {
    margin: 0;
    background-image: url(/assets/images/Auto_positivo/VOLVER.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border: transparent;
}


.tabla {
    margin: auto;
    border: 0;
    width: 80%;
}

</style>