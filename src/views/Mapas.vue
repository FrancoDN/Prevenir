<template>
  <div >
    <l-map :zoom="zoom" :center="center" style="height: 850px; width: auto">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="center">
        <l-icon :icon-url="iconU" :icon-size="iconSizeU"></l-icon>
        <l-popup content="Mi ubicación actual"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8785583, -57.8780554]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 16"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8787169, -57.8500942]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 17"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.9073664, -57.9232203]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 18"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.9300793, -57.8855325]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 19"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8830713, -57.893241]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 35"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8817144, -57.8691838]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 41"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8890037, -57.9025103]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 42"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8672894, -57.8891979]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 43"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8664185, -57.8892669]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Hospital de Berisso"></l-popup>
      </l-marker>
      <l-marker :lat-lng="[-34.8890037, -57.9025103]">
        <l-icon :icon-url="iconH" :icon-size="iconSizeH"></l-icon>
        <l-popup content="Unidad Sanitaria 42"></l-popup>
      </l-marker> 
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import { Icon } from "leaflet";
import user from "../../public/assets/images/usuario.png";
import hosp from "../../public/assets/images/hospital_maps.png";

// Ignoramos los iconos por default
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


export default {
  name: "Icon",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      iconH: hosp,
      iconAnchorH: [52, 52],
      iconSizeH: [52, 52],
      

      iconU: user,
      iconSizeU: [24, 24],
      iconAnchorU: [24, 24],
      location: null,
      gettingLocation: false,
      errorStr: null,
    };
  },
  mounted() {
        //do we support geolocation
        if (!("geolocation" in navigator)) {
          this.errorStr = "La geolocalización no esta habilitada";
          return;
        }
        // get position
        navigator.geolocation.getCurrentPosition(
          pos => {
            this.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
            this.gettingLocation = true;
          },
          err => {
            this.gettingLocation = false;
            this.errorStr = err.message;
          }
        );
      },
      updated() {
        //do we support geolocation
        if (!("geolocation" in navigator)) {
          this.errorStr = "La geolocalización no esta habilitada";
          return;
        }
        // get position
        navigator.geolocation.getCurrentPosition(
          pos => {
            this.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
            this.gettingLocation = true;
          },
          err => {
            this.gettingLocation = false;
            this.errorStr = err.message;
          }
        );
      },
      methods: {
      innerClick() {
      alert("Click!");
    }
    }
};
</script>

<style>
.body {
  height: 100%;
  margin: 0;
}

#map {
  width: 600px;
  height: 400px;
}
</style>
