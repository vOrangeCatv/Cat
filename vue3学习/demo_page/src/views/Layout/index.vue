<template>
  <div class="menu">
    <!-- 下面setup定义的变量isClose传值给LeftMenu -->
    <LeftMenu :isClose="isClose"></LeftMenu>
  </div>
  <div class="content" :class="{active:isClose}">
    <!-- 父组件调用子组件RightContent的地方，定义@change="change"一个事件 -->
    <RightContent :isClose="isClose" @change="change"></RightContent>
  </div>
</template>
  
<script>
import { ref } from 'vue';
import LeftMenu from "../Layout/LeftMenu";
import RightContent from "../Layout/RightContent";
export default {
  components: {
    LeftMenu,
    RightContent,
  },
  setup(){
    //定义小伸缩组件的变量  
    let isClose = ref(false);

    //修改变量
    const change=()=>{
      isClose.value = !isClose.value
    }
    return{
      isClose,
      change
    }
  }
};
</script>

<style lang ="less" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0; 
  background: #545c64;
}
.content {
  padding-left: 200px;
  transition: all .5s;
}
.active{
  padding-left: 64px;
}
</style>