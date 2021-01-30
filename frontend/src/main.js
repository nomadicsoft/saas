import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/vue-auth'
import 'axios-progress-bar/dist/nprogress.css'
import {loadProgressBar} from 'axios-progress-bar'
import i18n from './i18n'
import _ from 'lodash';
Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.config.productionTip = false
require('./bootstrap');
loadProgressBar()

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
