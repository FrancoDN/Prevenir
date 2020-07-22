<template>
  <div>
    <img
      class="banner"
      src="../../public/assets/images/Web/Head_chicoWeb.png"
      alt="berisso banner"
      width="100%"
      height="100%"
    />
    <br><br>
    <p class="text-share">Compartí la aplicación escaneando el código QR!</p>
    <div class="divQR">
      <img
        class="bannerQR"
        src="../../public/assets/images/qr.png"
        alt="berisso banner"
        width="100%"
        height="100%"
      />
    </div>
    <div v-if="sistemaOperativo">
      <Instalar />
    </div>
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
import { mapActions, mapState } from "vuex";
import Compartir from '../views/Compartir.vue'
import Instalar from "../components/Instalar.vue"

export default {

  data() {
    return {
      sistemaOperativo: false
    }
  },
  components: {
    Instalar
  },

  methods: {
    navegar(destino) {
      this.$router.push(destino);
    },

    ...mapActions(["guardarApp"]),
  },

   mounted() {
    // Nos fijamos si el SO es Mac
    this.sistemaOperativo = navigator.appVersion.indexOf("Mac")!=-1;
    //console.log(this.sistemaOperativo);
  }
};
</script>

<style>
.text-share {
  color: #000000;
  font-weight: 450;
  font-family: "Montserrat";
  src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Medium.ttf);
  margin: auto;
  text-align: center;
  font-size: 20px;
  padding-inline-start: 5px;
}

.bannerQR {
  width: 100%;
  height: 100%;
  margin: auto;
  align-content: center;
  vertical-align: auto;
}

.divQR {
  margin: 0;
  align-content: center;
}

.btnSave {
  margin: 0;
  background-image: url(/assets/images/guardar.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 100%;
  height: 40%;
  border: none;
  outline: transparent;
  border: transparent;
}

.btnSave:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 30%;
  border: none;
  outline: transparent;
  border: transparent;
}
</style>
