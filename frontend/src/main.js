// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import axios from 'axios';
import moment from 'moment-timezone';
import VueMomentJS from "vue-momentjs";
 
moment.tz.setDefault('Asia/Seoul');
Vue.use(VueMomentJS, moment);
Vue.use(Vuetify)
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
