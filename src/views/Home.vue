<template>
  <Champions :champions="champions" />
</template>

<script>
// @ is an alias to /src
import Champions from "@/components/Champions.vue";
import getData from "../static/getData";

export default {
  name: "Home",
  components: {
    Champions,
  },
  setup() {
    const { champions, error, getChampion } = getData();
    getChampion();
    return { champions, error };
  },
};
</script>
<style scoped></style>
