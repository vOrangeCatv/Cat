<template>
  <el-menu :default-active="route.path" class="el-menu-vertical-demo" :collapse="isClose" active-text-color="#ffd04b"
    background-color="#545c64" text-color="#fff" router>
    <el-menu-item><template #title><span>后台管理系统</span></template></el-menu-item>
    <el-menu-item index="/">
      <el-icon>
        <location />
      </el-icon>
      <span>系统首页</span></el-menu-item>

    <el-sub-menu index="/people">
      <template #title>
        <el-icon>
          <User />
        </el-icon>
        <span>用户管理</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="/people/list">用户信息</el-menu-item>
        <el-menu-item index="/people/admin">管理员</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script>
// import { ref } from 'vue';
import { useRoute } from "vue-router";
export default {
  //一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props
  props: ["isClose"],
  //setup() 钩子是在组件中使用组合式 API 的入口
  setup() {
    //定义开关
    // const isCollapse = ref(false)
    //使用路由
    // const常量是块级范围的，非常类似用 let 语句定义的变量。
    const route = useRoute();
    console.log(route);
    return {
      // isCollapse,
      route,
    };
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}
</style>