import 'core-js/stable'


import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import VueInputMask from "vue-inputmask"

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.use(VueInputMask.default);

import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;

new Vue({
  el: '#app',
  router,
  store,  
  icons,
  template: '<App/>',
  components: {
    App
  },
})
