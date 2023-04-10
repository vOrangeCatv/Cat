import cont from "./js/cont";
import sum from "./js/sum";
//引入样式
import "./css/index.css";
import "./css/iconfont.css";

import Vue from 'vue';
import App from './App.vue';


new Vue({
    el:'#app',
    render: h => h(App),
});


console.log(cont (1,2));
console.log(sum(1, 2, 3, 4)); 
