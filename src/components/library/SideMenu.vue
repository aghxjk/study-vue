<template>
  <el-menu
    class="categories"
    :default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item v-for="(item, id) in kindList" :key="id" :index="id">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
    </el-menu-item>
    <!-- <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">文学</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">流行</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">文化</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">生活</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">经管</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">科技</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
    name: 'SideMenu',
    data () {
        return {
            kindList: [
                {name: '全部', id: 0},
                {name: '文学', id: 1},
                {name: '流行', id: 2},
                {name: '文化', id: 3},
                {name: '生活', id: 4},
                {name: '经管', id: 5},
                {name: '科技', id: 6}
            ]
        }
    }
}
</script>

<style scoped>
  .categories {
    position: fixed;
    /* margin-left: 50%; */
    /* left: -600px; */
    top: 75px;
    width: 150px;
  }
</style>
