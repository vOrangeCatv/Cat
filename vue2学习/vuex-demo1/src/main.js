import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
Vue.config.productionTip = false

new Vue({
    //new Vue 也提前留好了一个属性就叫store，可以放入你创建好的store对象
    // 让Vue项目拥有vuex的功能
    // Vue实例原型上$store属性赋值
    store,
    render: h => h(App),
}).$mount('#app')
