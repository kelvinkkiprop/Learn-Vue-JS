//Vue imports default
import Vue from 'vue'
import App from './App.vue'

//Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Moment
import moment from 'moment';
Vue.filter('myDate', function (value) { //Global method to format date
    if (!value) return ''
    return moment(value).format("Do MMM, YYYY")
});


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


import router from './router'

//Default config file
Vue.config.productionTip = false


//Vue render default
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
