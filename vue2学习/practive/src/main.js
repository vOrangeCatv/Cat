import {createApp} from 'vue'
import  App  from './App.vue'
import router from './router/index'

new Vue({
    el: '#app',
    render: h => h(App),
    router,
})
createApp(App).$mount('#app')