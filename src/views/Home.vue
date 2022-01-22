<template>
  <Champions :champions="champions" />
</template>

<script>
// @ is an alias to /src
import Champions from "@/components/Champions.vue";
import getChampion from "../static/getChampion";

export default {
  name: "Home",
  components: {
    Champions,
  },
  setup() {
    const { champions, error, getData } = getChampion();
    getData();
    return { champions, error };
  },
};
</script>
<style scoped></style>
