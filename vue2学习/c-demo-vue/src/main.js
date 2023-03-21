import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    el:'#app',
    router,
    // render: h => h(App)是ES6的写法，其实就是如下内容的简写：
    // render: function (createElement) {
    //   return createElement(App);
    // }
    render: h => h(App)
})