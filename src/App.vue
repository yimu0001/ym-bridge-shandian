<!--
 * @Author: your name
 * @Date: 2020-10-26 10:11:21
 * @LastEditTime: 2020-10-26 11:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ym-bridge-shandian\src\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getTopices } from './api/data'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.getTopices()
  },
  methods: {
    getTopices() {
      getTopices('http://extraction.shandian.design', 'hellosadkllksdalkdasklsda那是嗲死哦按时灯笼裤').then(res => {
        console.log(res)
      }).catch (err => {
        console.log(err)
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
