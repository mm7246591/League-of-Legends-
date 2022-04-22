<template>
  <div v-for="region of regions" :key="region.name">
    <article
      class="title"
      :style="{
        backgroundImage: `url(/${region.backgroundImg})`,
      }"
    >
      <img :src="`/${region.icon}`" alt />
      <span class="text">{{ region.name }}</span>
      <img class="imgBar" src="../assets/t1HeaderDivider.png" alt="" />
    </article>
    <section>
      <p>
        {{ region.text }}
      </p>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Regiondetail",
  props: ["name"],
  setup(props) {
    const regions = ref([]);
    // getItem and filter
    onMounted(() => {
      regions.value = JSON.parse(localStorage.getItem("regions"));
      regions.value = regions.value.filter((item) => {
        return item.name === props.name;
      });
    });
    return { regions, onMounted };
  },
};
</script>

<style scoped>
.title {
  max-width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.title::after {
  content: "";
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 65%,
    rgba(10, 10, 12, 0.1) 70%,
    #0a0a0c 90%
  );
  position: absolute;
  bottom: 0;
}
.title img {
  width: 200px;
  height: 200px;
}
.title .text {
  margin: 20px 0;
  background: -webkit-linear-gradient(rgb(103, 71, 31), rgb(203, 172, 98));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 104px;
  font-weight: 700;
  position: absolute;
  bottom: 5%;
  z-index: 2;
}
.title .imgBar {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  z-index: 2;
}
section {
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
}
section p {
  width: 1000px;
  margin: 30px 0;
  padding: 0 15px;
  font-weight: 400;
  font-size: 20px;
  color: #c4b998;
  line-height: 1.6;
}
section p::first-letter {
  font-size: 4rem;
  border-bottom: 3px solid rgb(203, 172, 98);
}
@media (max-width: 530px) {
  .title img {
    width: 150px;
    height: 150px;
  }
  .title .text {
    font-size: 70px;
  }
}
</style>
