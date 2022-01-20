<template>
  <Champions :champions="champions" />
</template>

<script>
// @ is an alias to /src
import Champions from "@/components/Champions.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    Champions,
  },
  setup() {
    const champions = ref([]);
    const error = ref(null);
    const getChampion = async () => {
      try {
        let data = await fetch("http://localhost:3000/champions");
        if (!data) {
          throw Error("NO Data Available");
        }
        champions.value = await data.json();
      } catch (err) {
        error.value = err.message;
      }
    };
    getChampion();
    return { champions, error, getChampion };
  },
};
</script>
<style scoped></style>
