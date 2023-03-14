<template>
  <div class="login">
    <h4>后台管理系统</h4>
    <el-form
    label-width="100px"
    :model="loginData"
    style="max-width: 460px"
  >
    <el-form-item label="账号">
      <el-input placeholder="请输入账号" v-model="loginData.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="loginData.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="jiaohu" class="anniu" type="primary">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
import {reactive} from 'vue'
import { ElMessage } from 'element-plus';
import {login} from '../http/api'
import router from '../router/index.js'
export default {
  name: "Login",
  setup() {
    let loginData=reactive({// eslint-disable-line no-unused-vars
      name:'',
      password:''
    })
      //先判断账号是否输入
      let jiaohu =()=>{
        //if判断语句取反 ！
        if(!loginData.name||loginData.password){
          ElMessage.error('请先填写账号和密码');
          return
        }

        //执行登录操作
        login(loginData).then(res=>{
          console.log(res)
          router.push('/Home')
        })
      }
    return{
      loginData,
      jiaohu
    }
  },
};
</script>
<style scoped>
.login{
  width: 500px;
  border: 1px solid gray;
  border-radius: 10px;  
  margin: 150px auto;
  padding: 20px;
}
.anniu{
  width: 100%;
}
h4{
  text-align: center;
}
</style>
