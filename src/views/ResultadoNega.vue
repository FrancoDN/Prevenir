<template>
  <div>
    <img class="banner" src="../../public/assets/images/head_chico.png" alt="berisso banner" />
    <br />
    <br />
    <p class="text-centerPosi">
      No presenta síntomas de COVID-19, por favor continúe cumpliendo con las
      medidas de Distanciamiento Social Preventivo, higiene y seguridad
      previstas. Vuelva a repetir el autochequeo cada 48 hs.
    </p>
    <br />
    <p class="text-centerPosi">
      En caso de presentar síntomas comuniquese lo más pronto posible con el
      número 148 o SAME.
    </p>
    <table width="320" height="90" class="tabla">
      <tbody>
        <tr>
          <td>
            <a href="tel:107">
              <input type="button" alt="Same" class="btnSame" />
            </a>
          </td>
          <td>
            <a href="tel:148">
              <input type="button" alt="Linea148" class="btn148" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <table width="320" height="90" class="tabla">
      <tbody>
        <tr>
          <td>
            <input
              type="button"
              alt="Corregir"
              class="btnCorregir"
              @click="navegar('/autochequeo')"
            />
          </td>
          <td>
            <input type="button" alt="Menu" class="btnMenu" @click="navegar('/home')" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    navegar(destino) {
      this.$router.push(destino);
    }
  }
};
</script>

<style>
.text-centerPosi {
  color: #000000;
  font-family: "Montserrat";
  src: url(https://prevenir.net.ar/assets/fonts/Montserrat/Montserrat-Medium.ttf);
  margin: auto;
  text-align: center;

  padding-inline-start: 5px;
  padding-inline-end: 5px;
  font-size: 15px;
}
.banner {
  width: 100%;
  height: 100%;
  margin: 0;
  align-items: center;
}
.btnUnidades {
  margin: 0;
  background-image: url(/assets/images/Auto_positivo/UNIDADES-CERCANAS.png);
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

.btnUnidades:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
}
.btn148 {
  margin: 0;
  background-image: url(/assets/images/Auto_positivo/LINEA148.png);
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

.btn148:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
}

.btnCorregir {
  margin: 0;
  background-image: url(/assets/images/Auto_positivo/CORREGIR.png);
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

.btnCorregir:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
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

.btnMenu:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
}
.btnUnidades:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
}

.btnSame {
  margin: 0;
  background-image: url(/assets/images/Auto_positivo/SAME.png);
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

.btnSame:hover {
  margin: 0;
  background-color: transparent;
  width: 100%;
  height: 60%;
  border: none;
  outline: transparent;
  border: transparent;
}
</style>
