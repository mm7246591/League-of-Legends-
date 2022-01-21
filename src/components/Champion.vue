<template>
  <div class="championItems">
    <div class="box" v-for="champion of searchEvent" :key="champion.id">
      <div class="img">
        <a :href="champion.name"><img :src="`${champion.img}`" alt="" /></a>
      </div>
      <div class="text">
        <span>{{ champion.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "Champion",
  props: ["champions", "character", "input"],
  setup(props) {
    const searchEvent = computed(() => {
      // 判斷輸入的字
      if (props.input.length > 0) {
        return props.champions.filter((champion) =>
          champion.name.includes(props.input)
        );
      } //判斷是點擊什麼職業
      else if (props.character.length > 0) {
        if (props.character === "全部") {
          return props.champions;
        }
        return props.champions.filter((champion) =>
          champion.character.includes(props.character)
        );
      }
      return props.champions;
    });
    return { searchEvent };
  },
};
</script>

<style scoped>
.championItems {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.box {
  width: 280px;
  height: 334.5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.25s linear;
}
.box .img {
  width: 287px;
  height: 300px;
}
.img img {
  width: 287px;
  height: 300px;
}
.box .text {
  width: 287px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.box :hover.img img {
  transform: scale(1.1);
}
</style>
