<template>
  <div class="content">
    <div class="region" v-for="region of regions" :key="region.name">
      <div class="img">
        <img :src="region.icon" alt="" />
      </div>
      <div class="text">
        <span>{{ region.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getRegion from "../static/getRegion";
export default {
  name: "Championregion",
  setup() {
    const { regions, error, getData } = getRegion();
    getData();
    return { regions, error };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Sans+TC:wght@100&family=Noto+Serif+TC:wght@200&display=swap");
.content {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 30px;
}
.region {
  width: 280px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
.img {
  width: 280px;
  height: 240px;
}
.img img {
  width: 280px;
  height: 240px;
}
.text {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #061e36;
  color: white;
  font-size: 20px;
  font-family: "Monoton", cursive;
  font-family: "Noto Sans TC", sans-serif;
  font-family: "Noto Serif TC", serif;
  font-style: "italic";
}
</style>
