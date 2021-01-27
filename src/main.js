import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 导入全局样式 */
import './assets/css/common.less'
/* 导入vant-ui组件库 */
import Vant from 'vant'
import 'vant/lib/index.css'
/* rem适配 */
import './assets/js/rem.js'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
