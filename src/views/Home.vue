<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./../assets/logo.png" alt="" />
          <span>平成租车后台管理系统</span>
        </div>
        <el-button type="info">重置</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #373d41;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 0.5rem;
    }
    span {
      color: #fff;
      font-size: 0.2rem;
    }
  }
}
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background: rgb(84, 92, 100);
}
</style>
