<template>
  <div id="app">
    <h1>跟组件</h1>
    <span>库存总数</span>
    <!-- 为什么不在v-model里面直接写$store.state.count
    页面改值要修改给$store.state.count (虽然效果都对)但是Vuex强烈要求我们在mutation里修改state状态（这样可以在调试工具里追踪变化过程） -->
    <input type="text" v-model.number="num">
    <div style="border:1px solid black; width: 300px;">
      <AddItem></AddItem>
    </div>
    <hr>
    <div style="border:1px solid black; width: 300px;">
      <SubItem></SubItem>
    </div> 
  </div>
  </template>
  
  <script>
  import AddItem from '@/components/AddItem'
  import SubItem from '@/components/SubItem'
  
  export default {
      components: { 
        AddItem,
        SubItem 
      },
      computed:{
        num: {
        set(val){
          this.$store.commit('setCount',val)
        },
        get(){
          return this.$store.state.count
        }
      }
    }
  }
  </script>
  
  <style>
  #app {
    width: 300px;
    margin: 20px auto;
    border: 1px solid #ccc;
    padding: 4px;
  }
  </style>
  