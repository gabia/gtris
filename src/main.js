import Vue from 'vue'
import App from './App.vue'
import '@/assets/sass/gtris.scss';
import '@/assets/js/common.js';
import EventMixin from '@/components/Mixins/EventMixin.js'

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue(); // Global event bus
Vue.mixin(EventMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')