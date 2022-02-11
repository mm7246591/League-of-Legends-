<template>
  <div class="content" v-for="champion of champions" :key="champion.name">
    <div class="img">
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
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
