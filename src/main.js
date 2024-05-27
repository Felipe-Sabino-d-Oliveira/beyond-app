import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './route/router'

import './assets/css/vars.css'

Vue.config.productionTip = false

import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';

// Configure a persistência para localStorage
const auth = getAuth();
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistência configurada para localStorage');
  })
  .catch((error) => {
    console.error('Erro ao configurar a persistência:', error);
  });

// Crie a instância do Vue
let vueApp;
onAuthStateChanged(auth, (user) => {
  if (!vueApp) {
    vueApp = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }
  if (user) {
    vueApp.$root.$emit('logged-in', user);
  }
});