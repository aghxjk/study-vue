// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
axios.defaults.baseURL = 'http://localhost:8443/api'

// 作用是阻止vue 在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  // el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 对象的挂载目标
  // 即：index.html 中id=myApp的div元素
  el: '#myApp',
  // router 代表该对象包含 Vue Router，并使用项目中定义的路由
  router,
  // components 表示该对象包含的 Vue 组件
  components: {App},
  // template 是用一个字符串模板作为 Vue 实例的标识使用
  template: '<App/>'
})
