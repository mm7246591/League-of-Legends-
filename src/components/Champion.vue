<template>
  <div class="championItems">
    <div class="box" v-for="champion of searchEvent" :key="champion.id">
      <div class="img">
        <router-link
          :to="{
            name: 'Championdetail',
            params: {
              name: champion.name,
            },
          }"
        >
          <img :src="champion.img" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>{{ champion.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Champion",
  props: ["champions", "character", "input"],
  setup(props) {
    const searchEvent = computed(() => {
      // check input value
      if (props.input.length > 0) {
        return props.champions.filter((champion) => champion.name.includes(props.input));
      } // check character
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
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 350px;
  gap: 10px;
  justify-items: center;
}
.box {
  width: 250px;
  height: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;
}
.box .img {
  width: 250px;
  height: 300px;
  overflow: hidden;
}
.img img {
  width: 250px;
  height: 300px;
}
.box .text {
  width: 100%;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  overflow: hidden;
  transition: 0.1s linear;
  font-family: sans-serif;
}
.box :hover.img img {
  transform: scale(1.1);
}
.box:hover .text {
  background-color: #006680;
}
.el-pagination {
  text-align: center;
  --el-pagination-font-size: 20px;
  --el-pagination-button-height: 20px;
}
</style>
