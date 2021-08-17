//Vue imports default
import Vue from 'vue'
import App from './App.vue'

//Vue imports default
import 'bootstrap/dist/css/bootstrap.css'

//Popper and Jquery
// import $ from 'jquery';
// import Popper from 'popper.js';

import 'bootstrap/dist/js/bootstrap.bundle.min';

//Import Bootstrap-vue styles and icons
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Default config file
Vue.config.productionTip = false


//Render Bootstrap-Vue styles and icons
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


//Vue render default
new Vue({
  render: h => h(App),
}).$mount('#app')
