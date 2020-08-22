<template>
  <div>
    <img
      class="bannerEmer"
      src="../../public/assets/images/Web/Head_chicoWeb.png"
      alt="berisso banner"
    />
    <main>
      <br />
      <table width="100" height="40" class="tabla">
      <tbody>
        <tr>
          <td>
        <img
          src="../../public/assets/images/Llamadas/Tocar.png"
          alt="seleccione un boton para llamar"
          width="100%"
        />
      </td>
        </tr>
      </tbody>
    </table>
      <br /><br />

      <div class="grid-container">
        <a href="tel:911"
          ><input
            type="button"
            class="botonllamar"
            style="background-image: url(/assets/images/Llamadas/Policia.png);"
        /></a>

        <a href="tel:103"
          ><input
            type="button"
            class="botonllamar"
            style="background-image: url(/assets/images/Llamadas/Defensa-Civil.png);"
        /></a>

        <a href="tel:148"
          ><input
            type="button"
            class="botonllamar"
            style="background-image: url(/assets/images/Llamadas/Linea-148.png);"
        /></a>

        <a href="tel:107"
          ><input
            type="button"
            class="botonllamar"
            style="background-image: url(/assets/images/Llamadas/SAME.png);"
        /></a>

        <a href="tel:+5492214612425"
          ><input
            type="button"
            class="botonllamar"
            style="background-image: url(/assets/images/Llamadas/Bomberos.png);"
        /></a>

        <a href="tel:+5492216567873"
          ><input
            type="button"
            class="botonllamar"
            style="background-image: url(/assets/images/Llamadas/Denuncias.png);"
        /></a>
      </div>
    </main>
    <br /><br />
    <table width="100" height="40" class="tabla">
      <tbody>
        <tr>
          <td>
            <input
              type="button"
              alt="Menu"
              class="btnMenu"
              @click="$router.push('/')"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tabla {
  margin: auto;
  border: 0;
}
.bannerEmer {
  width: 100%;
}

.banner {
  align-content: center;
  margin: auto;
  align-items: center;
  align-self: center;
  -moz-box-align: center;
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5vw;
  grid-row-gap: 5vw;
  justify-items: center;
  width: 100%;
}

.botonllamar {
  background-position: center;
  background-attachment: inherit;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20vw;
  width: 35vw;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
