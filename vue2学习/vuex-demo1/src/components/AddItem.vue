<template>
    <div>
        <h3>AddItem组件</h3>
        <p>已知库存数: {{ $store.state.count }}</p>
        <button @click="addFn">库存+1</button>
    </div>
</template>

<script>
// 直接使用
// 语法：this.$store.state.变量名 （作用：取值）
export default{
        methods:{
            addFn(){
                this.$store.commit('addCount',1)
                
            }
        }
}
</script>