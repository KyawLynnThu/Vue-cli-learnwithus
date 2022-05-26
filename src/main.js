import Vue from 'vue'
import App from './App.vue'
import '@/assets/js/main'
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
window.jQuery = jQuery;
import 'bootstrap';
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')