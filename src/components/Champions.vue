<template>
  <div class="content">
    <div class="search">
      <el-input
        v-model="input"
        size="large"
        placeholder="搜尋英雄"
        :prefix-icon="Search"
      >
      </el-input>
      <span>全部</span>
      <span>射手</span>
      <span>鬥士</span>
      <span>坦克</span>
      <span>刺客</span>
      <span>輔助</span>
      <span>法師</span>
    </div>
    <Champion />
  </div>
</template>

<script>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import Champion from "./Champion.vue";
export default {
  name: "Champions",
  components: {
    Champion,
  },
  setup() {
    const input = ref("");
    return { input, Search };
  },
};
</script>

<style scoped>
.content {
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* background-color: lightgray; */
}
.search {
  width: 100%;
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
  color: white;
  cursor: pointer;
  position: relative;
}
.search span::after {
  content: " ";
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: -5px;
  border-bottom: 1px solid white;
  transition: 0.3s;
}
.search span:hover::after {
  right: 0%;
  left: 0%;
}
</style>
