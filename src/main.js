import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
Vue.use(ElementUI, { size: 'mini' })
Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
