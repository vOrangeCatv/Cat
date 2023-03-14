<template>
  <div>
    <h3>SubItem组件</h3>
    <p>已知库存数: {{ count }}</p>
    <button @click="subFn">库存-1</button>
  </div>
</template>

<script>
// 方式2：辅助函数来映射
// 1. 从vuex包里导出辅助函数
import { mapState, mapMutations } from "vuex";
// 2. 调用辅助函数，传入要映射过来的state状态变量名
// let s = mapState(['count']) // eslint-disable-line no-unused-vars
// s是一个对象 { count： 内置函数}

export default {
  // 3.把映射过来的对象，展开放入到computed里(结构是对应的)
  computed: {
    ...mapState(["count"]),
    //运行后相当于count: function(){
    // return this.$store.state.count
    //}
  },
  methods: {
    ...mapMutations(["subCount"]),
    //等价于原地有了一个方法
    //subCount: function(){}
    //减1的点击事件
    subFn() {
      this.subCount(1); //调用映射过来的mutations里subCount方法并传入1的值给mutations里的形参value
    },
  },
};
</script>