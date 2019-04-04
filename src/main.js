import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Header from './pugin/Header'
import Shadow from './pugin/Shadow'
import ChatPannel from './pugin/ChatPannel'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

Vue.use(ElementUI)

Vue.use(Header)
Vue.use(preview)
Vue.use(ChatPannel)
Vue.use(Shadow)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
