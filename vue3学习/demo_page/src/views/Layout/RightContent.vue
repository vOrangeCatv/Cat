<template>
<div class="header">
    <div class="icon">
        <!-- 
            v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。
            声明一个点击事件@click
        -->
        <el-icon v-if="isClose" @click="change"><ArrowRightBold /></el-icon>
        <!-- 
            一个 v-else 元素必须跟在一个 v-if 或者 v-else-if 元素后面，否则它将不会被识别。
            声明一个点击事件@click
        -->
        <el-icon v-else @click="change"><ArrowLeftBold /></el-icon>
        
        <div class="right">
            <!-- 返回登录界面 -->
            <div class="exit" @click="esc">
                <el-icon><SwitchButton /></el-icon>
            </div>

            
        </div>
    </div>   
</div>
<div class="wrapper">
    <router-view></router-view>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    //同样声明一个props
    props:['isClose'],
    //声明下面的自定事件
    emits:['change'],
    setup(props,{emit}){
        //路由
        const router = useRouter();

        const change=()=>{
            emit('change')
        }

        const esc=()=>{
            router.push('/login')
        }

        return{
            change,
            esc
        }
    }
}
</script>

<style lang ="less" scoped>
.header{
    height: 50px;
    line-height: 60px;
    background:  #337ecc;
}
.wrapper{
    margin: 10px;
}
.icon{
    font-size:24px;
    i{
        cursor: pointer;
    }
}
.right{
    float: right;
    padding-right: 20px;
}

</style>