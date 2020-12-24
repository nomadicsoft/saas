import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'axios-progress-bar/dist/nprogress.css'
import {loadProgressBar} from 'axios-progress-bar'

Vue.config.productionTip = false
require('./bootstrap');
loadProgressBar()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
