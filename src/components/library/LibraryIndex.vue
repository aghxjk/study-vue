<template>
  <el-container style="margin-left:0px">
    <el-aside style="width:200px; margin-top:20px">
      <!-- <switch></switch> -->
      <SideMenu></SideMenu>
    </el-aside>
    <el-main>
      <Books></Books>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import Books from './Books'
export default {
    name: 'AppLibrary',
    components: {SideMenu, Books}
}
</script>

<style scoped>

</style>
