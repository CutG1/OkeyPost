import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
import router from './routes/index.js'

Vue.config.productionTip = false


import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";

new Vue({
  router,
  render: h => h(App),
  bootstrap,
}).$mount('#app')
