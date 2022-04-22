<template>
  <div class="content" v-for="champion of champions" :key="champion.name">
    <div class="backgroundImg">
      <div
        class="blurImg"
        :style="{
          backgroundImage: `url(${champion.bigImg})`,
        }"
      ></div>
      <div
        class="img"
        :style="{
          backgroundImage: `url(${champion.bigImg})`,
        }"
      ></div>
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
  props: ["name"],
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
}
.backgroundImg {
  width: 100%;
  position: relative;
}
.backgroundImg .blurImg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.backgroundImg .blurImg::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  filter: blur(5px);
  z-index: 2;
}
.backgroundImg .img {
  position: relative;
  width: 1000px;
  height: 670px;
  margin: 15px auto;
  -webkit-mask-image: linear-gradient(#000 65%, transparent 98%);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
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
@media (max-width: 1030px) {
  .backgroundImg .img {
    max-width: 90%;
  }
  .content .origin {
    max-width: 90%;
  }
  .content .name {
    max-width: 90%;
  }
  .content .text {
    max-width: 90%;
  }
}
</style>
