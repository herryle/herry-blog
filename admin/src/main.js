import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '../src/assets/css/index.css'
import http from './http'
Vue.use(mavonEditor)
Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
