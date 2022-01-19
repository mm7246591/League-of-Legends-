<template>
  <div class="content">
    <div class="search">
      <el-input
        v-model="input1"
        size="large"
        placeholder="搜尋英雄"
        :prefix-icon="Search"
      >
      </el-input>
      <span><a href="">全部</a></span>
      <span><a href="">射手</a></span>
      <span><a href="">鬥士</a></span>
      <span><a href="">坦克</a></span>
      <span><a href="">刺客</a></span>
      <span><a href="">輔助</a></span>
      <span><a href="">法師</a></span>
    </div>
    <ChampionsVue />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import ChampionsVue from "./Champions.vue";
const input1 = ref("");
</script>

<style scoped>
.content {
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* background-color: lightgray; */
}
.search {
  width: 80%;
  height: 80px;
  line-height: 80px;
  margin: 20px 0;
  text-align: center;
  background-color: black;
  background: linear-gradient(
        to left bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.4) 0
      )
      no-repeat 100% 0 / 1.4em 1.4em,
    linear-gradient(-135deg, transparent 1em, #58a 0);
}
.el-input {
  width: 300px;
  margin-right: 50px;
}

.search span {
  font-size: 20px;
  margin: 0 10px;
}
.search a:hover {
  color: white;
}
.search a {
  text-decoration: none;
  color: black;
}
</style>
