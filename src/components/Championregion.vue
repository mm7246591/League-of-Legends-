<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div class="content" v-else>
    <div class="region" v-for="region of regions" :key="region.name">
      <div
        class="img"
        :style="{
          backgroundImage: `url(${region.backgroundImg})`,
        }"
      >
        <router-link
          :to="{
            name: 'Regiondetail',
            params: {
              name: region.name,
              backgroundImg: region.backgroundImg,
              icon: region.icon,
              text: region.text,
            },
          }"
        >
          <img :src="region.icon" alt="" />
        </router-link>
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
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 30px;
}
.region {
  width: 305px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-shadow: 5px 5px 10px black;
  background-color: #010a13;
}

.img {
  width: 305px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.5;
}
.region :hover.img {
  opacity: 100;
}
.img a {
  width: 100%;
  height: 100%;
}
.img img {
  width: 50px;
  height: 75px;
  font-size: 25px;
  transition: 0.5s ease-in-out;
  position: absolute;
  top: 70px;
  left: 130px;
  -webkit-filter: brightness(200%);
}
.region :hover.img img {
  opacity: 0;
}
.text {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #061e36;
  color: white;
  font-size: 25px;
  font-family: "Monoton", cursive;
  font-family: "Noto Sans TC", sans-serif;
  font-family: "Noto Serif TC", serif;
  font-style: italic;
}
.error {
  text-align: center;
  color: red;
  font-size: 2rem;
}
</style>
