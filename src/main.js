import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {auth} from './firebase'

import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';


Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false
   
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

auth.onAuthStateChanged(user => {
  
  
  if(user){
    // console.log(user)
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', detectoUsuario)
  }else{
    // console.log(user)
    store.dispatch('detectarUsuario', user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

