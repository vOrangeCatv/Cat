
<template>
<el-container>
  <el-header class="header">
    <span>后台管理系统</span>
  </el-header>

  <el-container>
    <el-aside width="200px">
      aside
      
    </el-aside>

    <el-main>
      Main
    </el-main>

  </el-container>
</el-container>

</template>

<script>
export default {
  name: "main",
  methods:{
    logout(){
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="less" scoped >
*{
  margin: 0;
  padding: 0;

}
.el-header{
    background-color: aqua;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: cornflowerblue;
    color: #333;
    text-align: center;
    line-height: 400px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
   
</style>
