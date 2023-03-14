<template>
  <router-view />
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components:{

  },
 setup(){
  axios.get('http://jsonplaceholder.typicode.com/posts').then(res=>{
    console.log(res)
  })
 }
 }
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>

