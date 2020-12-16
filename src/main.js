import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LetItSnow from 'vue-let-it-snow';
import { vueBaberrage } from 'vue-baberrage'
import api from "./api"

Vue.prototype.$api=api
Vue.use(vueBaberrage)
Vue.use(LetItSnow);
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
