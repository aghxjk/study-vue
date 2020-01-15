<template>
  <!-- 这个文件称为“根组件”，因为其它的组件又都包含在这个组件中。
   vue 文件是一种自定义文件类型，在结构上类似 html，一个 .vue 文件即是一个 vue 组件。-->
  <!-- 这个 id=app 只是跟下面的 css 对应 -->
  <div id="app">
    <img src="./assets/logo.png">
    <!-- outer-view 是一个容器，名字叫“路由视图”，意思是当前路由（ URL）指向的内容将显示在这个容器中。
    也就是说，其它的组件即使拥有自己的路由（URL，需要在 router 文件夹的 index.js 文件里定义），也只不
    过表面上是一个单独的页面，实际上只是在根组件 App.vue 中-->
    <router-view/>
  </div>
</template>

<!-- export default 是 ES6 的语法，意思是将这个组件整体导出，之后就可以使用 import 导入组件了 -->
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
