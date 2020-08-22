import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueIpfs from './plugins/vue-ipfs'
import 'buefy/dist/buefy.css'

Vue.use(VueIpfs);
Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
