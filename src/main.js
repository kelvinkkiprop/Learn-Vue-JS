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


 //Vuex store and router
import router from './router'
import store from './store'

//Default config file
Vue.config.productionTip = false


//Vue render default
new Vue({
   //Vuex store and router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
