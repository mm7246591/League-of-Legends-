<template>
  <div class="championItems">
    <div class="box" v-for="champion of champions" :key="champion.id">
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
export default {
  name: "Champion",
  props: ["champions"],
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
