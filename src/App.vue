<template>
  <header>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#111"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">首頁</router-link>
      </el-menu-item>
      <el-menu-item index="2"> 英雄 </el-menu-item>
      <el-menu-item index="4">區域</el-menu-item>
    </el-menu>
    <div class="backgroundImg">
      <div class="img"></div>
    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped>
@import url(./assets/Normalize.css);
.el-menu {
  padding: 10px;
}
.el-sub-menu,
.el-menu-item {
  text-align: center;
  --el-menu-item-font-size: var(--el-font-size-extra-large);
}
.backgroundImg {
  background: url("./assets/blurred2.jpg");
}
.img {
  width: 100%;
  height: 200px;
  background: url("./assets/defaultbanner.jpg") center no-repeat;
}
a {
  text-decoration: none;
  color: white;
}
.router-link-exact-active {
  color: yellow;
}
</style>
