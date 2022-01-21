<template>
  <div class="championItems">
    <div class="box" v-for="champion of searchEvent" :key="champion.id">
      <div class="img">
        <a :href="champion.name"><img :src="champion.img" alt="" /></a>
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
      if (props.input.length > 0) {
        return props.champions.filter((champion) =>
          champion.name.includes(props.input)
        );
      } else if (props.character.length > 0) {
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
  justify-content: center;
  flex-wrap: wrap;
}
.box {
  width: 280px;
  height: 350px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img img {
  width: 287px;
  height: 300px;
}
.box .text {
  width: 100%;
  color: white;
  background-color: black;
  text-align: center;
  font-size: 30px;
}
</style>
