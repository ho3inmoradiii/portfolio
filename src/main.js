import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css';
import router from "@/router/router";
import VueParticles from 'vue-particles'
import VueHorizontal from 'vue-horizontal';


Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueHorizontal);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
