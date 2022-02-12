<template>
  <div class="content" v-for="champion of champions" :key="champion.name">
    <div
      class="img"
      :style="{
        backgroundImage: `url(${champion.bigImg})`,
      }"
    >
      <img :src="champion.bigImg" alt="" />
    </div>
    <div class="origin">{{ champion.origin }}</div>
    <div class="name">{{ champion.name }}</div>
    <div class="text">{{ champion.text }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Championdetail",
  props: ["origin", "name", "text", "bigImg"],
  setup(props) {
    const champions = ref([]);
    // getItem and filter
    onMounted(() => {
      champions.value = JSON.parse(localStorage.getItem("champions"));
      champions.value = champions.value.filter((item) => {
        return item.name === props.name;
      });
    });
    return { champions, onMounted };
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: black;
  color: white;
}
.content .img {
  width: 100%;
  height: 700px;
  position: relative;
}
.content .img::before {
  content: "";
  background: linear-gradient(black 5%, transparent 10%) center center,
    linear-gradient(to top, black 2%, transparent 15%) center center;
  position: absolute;
  width: 100%;
  top: 0;
  height: 500px;
}
.content .img::after {
  content: "";
  width: 100%;
  height: 99%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  margin: auto;
  filter: blur(5px);
  z-index: 2;
}
.img img {
  width: 50%;
  height: 600px;
  position: absolute;
  top: 10%;
  left: 25%;
  z-index: 3;
}
</style>
