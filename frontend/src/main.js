import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import routes from './routes.js'
import 'vuetify/dist/vuetify.css'

import axios from 'axios';
import moment from 'moment-timezone';
import VueMomentJS from "vue-momentjs";
 
Vue.use(VueMomentJS, moment);
moment.tz.setDefault('UTC');

Vue.prototype.$http = axios;

Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
