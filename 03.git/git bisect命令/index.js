import Vue from 'vue.js'
import VueRouter from "vue-router.js"//根据不同的hash值 往 组件的坑里放不同的组件内容
import App from './App.vue'

// 整合文件

// vue组件和路由的关系


new Vue({
  el:"#app",
  redner:c=>c(App)
})