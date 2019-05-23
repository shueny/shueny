import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle, faMobileAlt, faEnvelope, faEllipsisH, faDesktop, faServer, faPalette, faTerminal
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Progress from 'bootstrap-vue/es/components/progress'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import VueWow from 'vue-wow'
// eslint-disable-next-line import/no-extraneous-dependencies
import VueWaypoint from 'vue-waypoint'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap' // Import js file
import 'bootstrap/dist/css/bootstrap.min.css' // Import css file
import 'wowjs/css/libs/animate.css'
import 'animate.css'

library.add(faCircle, faMobileAlt, faEnvelope, faGithub, faEllipsisH, faDesktop, faServer, faPalette, faTerminal)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Progress, BootstrapVue, Meta)
// mount with global
Vue.use(VueWow, VueWaypoint)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
