import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './route/router'

import './assets/css/vars.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')