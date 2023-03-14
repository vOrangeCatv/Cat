<template>
  <div class="home">
    <el-container>
      <!-- 头部导航栏 -->
      <el-header class="header_box">
        <el-row :gutter="20">
        <el-col :span="16">
          <img src="../assets/logo1.png" alt="">
        </el-col>
        <el-col :span="8">
          <div class="esc">
            <el-button type="text">退出</el-button>
          </div>
          
        </el-col>
      </el-row>
      </el-header>
      <!-- 侧边导航栏 -->
      <el-container>
        <el-aside width="200px">
          <el-menu class="aside_box">
           <el-menu-item v-for="i in tabList" :key="i.name" :index="i.name">
            <!-- <i class="el-icon-document"></i> -->
          <template #title>{{i.name}}</template>
        </el-menu-item>
      </el-menu>
        </el-aside >
        <!-- 主页面 -->
        <el-main>主页面</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import {reactive} from "vue";
import router from '../router/index';
export default {
  name: 'Home',
  setup() {
    let tabList = router.options.routes; 

        return{
          tabList
    };
  },
};
</script>
<style lang="scss" scoped>
.header_box{
  background:  #d9ecff;
  padding:10px;
}
.esc{
  text-align: right;
}
.aside_box{
  background: #F5F7FA;
}
</style>>

