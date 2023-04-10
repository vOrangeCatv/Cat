import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false //Vue.config.productionTip = true它会显示你生产模式的消息。在开发环境下，默认设置false
Vue.use(ElementUI)

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
