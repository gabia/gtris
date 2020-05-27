import Vue from 'vue'
import App from './App.vue'
import '@/assets/sass/gtris.scss';

Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  render: h => h(App),
}).$mount('#app')
