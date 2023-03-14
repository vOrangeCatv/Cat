import Vue from 'vue'
// 使用vuex
// 1. 下载vuex模块（npm install vuex -s）
// 2. 引入vuex暴露函数对象
import Vuex from 'vuex'
// 3.注册-Vue实例原型添加$store属性
Vue.use(Vuex)
// 4.定义规则和生成store对象
/*
// 定义创建全局状态变量
const store = new Vuex.Store({
   state: {
       变量名： 初始值
   }
})
*/
const store = new Vuex.Store({
    state: {//定义变量
        count: 100
    },
    mutations:{//修改变量的值
        // state拿到的就是上面的state对象
        // value是逻辑页面调用mutations方法传递过来的值
        addCount(state,value){
            state.count += value
        },
        subCount(state,value){
            state.count -= value
        },
        setCount(state,value){
            state.count = value
        }
    }
})
// 5.导出到main.js中注册到new Vue里
export default store
