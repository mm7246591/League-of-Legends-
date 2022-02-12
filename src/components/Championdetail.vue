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
    <div class="text">
      <p>{{ champion.text }}</p>
    </div>
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
@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Sans+TC:wght@100&family=Noto+Serif+TC:wght@200&display=swap");
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: black;
}
.content .img {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.content .img::before {
  content: "";
  background: linear-gradient(black 5%, transparent 10%) center center,
    linear-gradient(to top, black 10%, transparent 15%) center center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.content .img::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  margin: auto;
  filter: blur(5px);
  z-index: 1;
}
.img img {
  width: 1000px;
  height: 550px;
  -webkit-mask-image: linear-gradient(#000 65%, transparent 98%);
  z-index: 2;
}
.content .origin {
  width: 1000px;
  color: #918f94;
  font-size: 1.3rem;
  text-align: center;
  line-height: 50px;
  z-index: 3;
  margin-bottom: 10px;
}
.content .name {
  width: 1000px;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  z-index: 3;
}
.content .text {
  width: 1000px;
  line-height: 1.5;
  font-size: 1.3rem;
  font-family: "Monoton", cursive;
  font-family: "Noto Sans TC", sans-serif;
  font-family: "Noto Serif TC", serif;
  color: white;
  z-index: 3;
  border-bottom: 1px solid #323943;
  border-right: 1px solid #323943;
  border-left: 1px solid #323943;
  margin-bottom: 10px;
}
.text p {
  padding: 0 50px;
  margin-bottom: 10px;
}
</style>
