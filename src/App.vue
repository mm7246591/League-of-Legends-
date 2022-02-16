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
      <el-menu-item index="2">
        <router-link :to="{ name: 'List' }">英雄列表</router-link>
      </el-menu-item>
      <el-menu-item index="3"
        ><router-link :to="{ name: 'Region' }">區域</router-link></el-menu-item
      >
    </el-menu>
    <div class="backgroundImg">
      <div class="img"></div>
    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped>
@import url(./assets/Normalize.css);
@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Sans+TC:wght@100&family=Noto+Serif+TC:wght@200&display=swap");
.el-menu {
  padding: 10px;
  font-family: "Monoton", cursive;
  font-family: "Noto Sans TC", sans-serif;
  font-family: "Noto Serif TC", serif;
  font-style: italic;
}
.el-sub-menu,
.el-menu-item {
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
  width: 100%;
  text-decoration: none;
  color: white;
}
.router-link-exact-active {
  color: yellow;
}
</style>
