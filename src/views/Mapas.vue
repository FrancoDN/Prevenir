<template>
  <div id="map"></div>
</template>

<script>
var map = L.map("map").fitWorld();

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

var userIcon = L.Icon.extend({
  options: {
    iconSize: [24, 24],
    iconAnchor: [24, 24],
    popupAnchor: [-3, -30],
  },
});
var hospIcon = L.Icon.extend({
  options: {
    iconSize: [52, 52],
    iconAnchor: [52, 52],
    popupAnchor: [-23, -50],
  },
});

var unidad = new hospIcon({
    iconUrl: "../../public/assets/images/hospital_maps.png",
  }),
  usuario = new userIcon({
    iconUrl: "../../public/assets/images/usuario.png",
  });

function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker([-34.8827613, -57.8560349], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 16")
    .openPopup();
  L.marker([-34.8785583, -57.8780554], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 17")
    .openPopup();
  L.marker([-34.8787169, -57.8500942], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 18")
    .openPopup();
  L.marker([-34.9073664, -57.9232203], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 19")
    .openPopup();
  L.marker([-34.9300793, -57.8855325], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 35")
    .openPopup();
  L.marker([-34.8830713, -57.893241], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 41")
    .openPopup();
  L.marker([-34.8817144, -57.8691838], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 42")
    .openPopup();
  L.marker([-34.8890037, -57.9025103], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Unidad Sanitaria 43")
    .openPopup();
  L.marker([-34.8672894, -57.8891979], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Dispensario Municipal Tetamanti")
    .openPopup();
  L.marker([-34.8664185, -57.8892669], {
    icon: unidad,
  })
    .addTo(map)
    .bindPopup("Hospital de Berisso")
    .openPopup();
  L.marker(e.latlng, {
    icon: usuario,
  })
    .addTo(map)
    .bindPopup("Su radio de ubicación aproximada")
    .openPopup();
}

function onLocationError(e) {
  alert(
    "Para ver las unidades sanitarias cercanas debes permitir la ubicación"
  );
}

map.on("locationfound", onLocationFound);
map.on("locationerror", onLocationError);

map.locate({
  setView: true,
  maxZoom: 16,
});
export default {};
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
