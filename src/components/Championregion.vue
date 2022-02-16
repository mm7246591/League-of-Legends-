<template>
  <div class="content">
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
import db from "../firebase/firebase";
import { ref as dref, onValue } from "firebase/database";
import { ref, onMounted } from "vue";
export default {
  name: "Championregion",
  setup() {
    const regions = ref([]);
    onMounted(() => {
      const getData = dref(db, "regions");
      onValue(getData, (data) => {
        regions.value = data.val();
      });
    });
    return { regions, onMounted };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Sans+TC:wght@100&family=Noto+Serif+TC:wght@200&display=swap");
.content {
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: auto;
  justify-items: center;
  gap: 20px;
  padding-top: 30px;
}
.region {
  width: 100%;
  height: 250px;
  margin: 10px;
  box-shadow: 5px 5px 10px black;
  background-color: #010a13;
}

.img {
  width: 100%;
  height: 200px;
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
  display: inline-block;
  width: 100%;
  height: 100%;
}
.img img {
  width: 60px;
  height: 75px;
  font-size: 25px;
  transition: 0.5s ease-in-out;
  position: absolute;
  top: 30%;
  left: 43%;
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
@media (max-width: 1260px) {
  .content {
    margin: 0 10px;
  }
  .img img {
    top: 35%;
    left: 45%;
  }
}
</style>
