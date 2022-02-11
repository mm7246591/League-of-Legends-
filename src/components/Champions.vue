<template>
  <div class="content">
    <div class="search">
      <el-input v-model="input" size="large" placeholder="搜尋英雄" :prefix-icon="Search">
      </el-input>
      <span @click="all">全部</span>
      <span @click="Marksmen">射手</span>
      <span @click="Fighters">鬥士</span>
      <span @click="Tanks">坦克</span>
      <span @click="Assassins">刺客</span>
      <span @click="Support">輔助</span>
      <span @click="Mages">法師</span>
    </div>
    <Champion :champions="champions" :character="character" :input="input" />
  </div>
</template>

<script>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import Champion from "./Champion.vue";
export default {
  name: "Champions",
  props: ["champions"],
  components: {
    Champion,
  },
  setup() {
    const input = ref("");
    const character = ref("");
    const isSort = ref(false);
    const all = () => {
      character.value = "全部";
    };
    const Marksmen = () => {
      character.value = "射手";
    };
    const Fighters = () => {
      character.value = "鬥士";
    };
    const Tanks = () => {
      character.value = "坦克";
    };
    const Assassins = () => {
      character.value = "刺客";
    };
    const Support = () => {
      character.value = "輔助";
    };
    const Mages = () => {
      character.value = "法師";
    };
    return {
      input,
      character,
      isSort,
      all,
      Marksmen,
      Fighters,
      Tanks,
      Assassins,
      Support,
      Mages,
      Search,
    };
  },
};
</script>

<style scoped>
.content {
  width: 1300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
.search {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, 0.4) 0)
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
  bottom: 25px;
  border-bottom: 1px solid white;
  transition: 0.3s;
}
.search span:hover::after {
  right: 0%;
  left: 0%;
}
.icon {
  width: 40px;
  height: 20px;
  line-height: 20px;
  color: white;
  cursor: pointer;
}
</style>
