//Vue imports default
import Vue from 'vue'
import App from './App.vue'

//Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//Default config file
Vue.config.productionTip = false


//Vue render default
new Vue({
  render: h => h(App),
}).$mount('#app')
