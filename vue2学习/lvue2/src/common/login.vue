loginPage.vue :
<template>
  <div class="login">
    <img src="../assets/t3.jpg" class="t3-img">
    <div class="login-con">
      <h1>用户登录</h1>
      <p>
        <label>用户名：</label>
        <input>
      </p>
      <p>
        <label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input>
      </p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$router.push({
        name: "Main"
      })
    },
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;

  .t3-img {
    height: 100%;
    width: 100%;
  }

  .login-con {
    position: absolute;
    top: 25%;
    left: 35%;
    width: 400px;
    height: 250px;
    border: 1px solid #ffffff;
    opacity: 1;
    background: #ffffff;
    border-radius: 10px;
  }
}
</style>
