import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//import store from './store'
import Vuex from 'vuex'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(vueResource)


import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const store = new Vuex.Store({
  state: {
    ApiURL: 'http://roslina2021.lh/'
  }
}) 

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
