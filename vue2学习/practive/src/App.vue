<template>
    <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/content">Content</router-link>
      <router-view></router-view>
    </div>
   </template>
   
   <script>
   export default {
    data() {
      return {};
    },
   };
   </script>
   <style lang="scss">
   #app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 20px;
   
    /* router-link标签会默认渲染为a标签 */
    a {
      // text-decoration: none;
      color: black;
      font-weight: bold;
   
      /* 当router-link被点击时候的样式 */
      &.router-link-exact-active {
        color: #42b983;
      }
    }
   }
   </style>
   