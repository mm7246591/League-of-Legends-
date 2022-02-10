<template>
  <div>
    <Championlist />
  </div>
</template>

<script>
import Championlist from "../components/Championlist.vue";
export default {
  name: "List",
  components: {
    Championlist,
  },
};
</script>

<style scoped>
div {
  background-color: #060e1f;
}
</style>
