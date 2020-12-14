import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
Vue.use(ElementUI, { size: 'mini' })
Vue.use(VCharts)
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'ef4308dcc95cb6d783f97aa81334e9df',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',],
  v: '1.4.4'
});
Vue.config.productionTip = false
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: ['陕西省']
  },
  mutations: {
    cityChange (state, data) {
      state.city = data
    }
  }
})

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount('#app')
