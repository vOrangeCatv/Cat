<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="box1"></div>
    </el-col>
    <el-col :span="6">
      <div class="box1"></div>
    </el-col>
    <el-col :span="6">
      <div class="box1"></div>
    </el-col>
    <el-col :span="6">
      <div class="box1"></div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="12">
      <div class="box2">
        <div>
    <div class="title">TodoList</div>
    <div class="content">
      <div class="input-content">
        <div class="input-conten-title">添加待办事件：</div>
        <input class="input" type="text" name="" id="" placeholder="请输入事件" v-model="mission" @keyup.enter="addList">
      </div>
      <div class="input-handle">
        <div class="left">
          {{unfinishedList.length}}个任务未完成
        </div>
        <div class="right">
          <div class="right-button" v-for="(item,index) in buttonList" :key='index' @click="tabClick(item,index)">
        <div :class="index===listShow?'right-button-border':''"> {{item.name}}</div>
    </div>
          <div class="right-button">
            {{missionList.length}}未完成
          </div>
          <div class="right-button">
            已完成
          </div>
        </div>
      </div>
      <div class="list-content">
    <div class="list-title">任务列表：</div>

    <div class="list-box" v-show="listShow===0">
        <div class="list-item" v-for="(item,index) in missionList" :key="index" @click="checkboxChange(item)">
            <span class="list-check-box">
                <span :class="item.check?'list-check-show':'list-check-hidden'">√</span>
            </span>
            <span :class="item.check?'list-check-decoration':''">
              {{item.title}}
            </span>
        </div>
    </div>
    
        <div class="list-box" v-show="listShow===1">
        <div class="list-item" v-for="(item,index) in unfinishedList" :key="index" @click="checkboxChange(item)">
            <span class="list-check-box">
                <span :class="item.check?'list-check-show':'list-check-hidden'">√</span>
            </span>
            <span :class="item.check?'list-check-decoration':''">
              {{item.title}}
            </span>
        </div>
    </div>
    
        <div class="list-box" v-show="listShow===2">
        <div class="list-item" v-for="(item,index) in finishedList" :key="index" @click="checkboxChange(item)">
            <span class="list-check-box">
                <span :class="item.check?'list-check-show':'list-check-hidden'">√</span>
            </span>
            <span :class="item.check?'list-check-decoration':''">
              {{item.title}}
            </span>
        </div>
    </div>

</div>
    </div>
  </div>
      </div>
    </el-col>
    <el-col :span="12"><div class="box2"></div> </el-col>
  </el-row>

</template>

<script>

export default {
  checkboxChange(item) {
    item.check = !item.check
},
  beforeCreate() {
  document
      .querySelector('body')
      .setAttribute('style', 'background-color:#F2F3F5')
},

//定义Todolist里的mission和placeholder
data() {
  return {

        missionList: [],// 已有数组
        finishedList: [],
        unfinishedList: [],
        listShow: 0,
        buttonList: [{
                name: '所有任务',
                value: 0
            },
            {
                name: '未完成的任务',
                value: 1
            },
            {
                name: '已完成的任务',
                value: 2
            }
        ],
    }
    },
    methods:{
      addList() {
        /* 
          用一个对象接收按下回车键传递过来的mission，
          并设置默认点击状态为false，
          然后用unshift插入missionList数组顺序的的第一位，
          最后将mission置空
        */
        const obj = {
          title: this.mission,
          check: false
        }
        this.missionList.unshift(obj)
        this.mission = ""
      },
      tabClick(item,index){
        this.listShow = index
        switch (item.value) {
          case 0:
            this.missionList = this.missionList
            break;
          case 1:
            this.unfinishedList = this.missionList.filter(item => item.check === false)
            break;
          case 2:
            this.finishedList = this.missionList.filter(item => item.check === true)
            break;
          default:
            break;
        }
    }
    }
    
  }


</script>

<style lang="less" scoped>
.home{
  background-color: #F2F3F5;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.box1 {
  border-radius: 4px;
  min-height: 150px;
  background: #fff;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 5%);
}
.box2 {
  border-radius: 4px;
  min-height: 400px;
  background: #fff;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 5%);
}

.title {
    background: rgb(250, 83, 83);
    text-align: center;
    color: white;
    line-height: 40px;
    height: 40px;
  }

  .content {
    width: 50%;
    margin: 0 auto;
  }

  .input-conten-title,
  .list-title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }

  .list-item {
    line-height: 40px;
    border-bottom: 1px solid #cccccc;
  }

  .list-check-box {
    height: 16px;
    padding: 0 5px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }

  .list-check-show {
    color: rgb(149, 189, 136);
  }

  .list-check-hidden {
    visibility: hidden;
  }

  .list-check-decoration {
    text-decoration: line-through;
    color: #cccccc;
  }

  .input {
    width: 100%;
    margin: 10px 0;
    height: 30px;
  }

  .input-handle {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .left {
    color: tomato;
  }

  .right {
    display: flex;
  }

  .right-button {
    margin: 0 5px;
    padding: 0 5px;
  }

  .right-button-border {
    border: 1px solid #cccccc;
    padding: 0 5px;

  }
</style>