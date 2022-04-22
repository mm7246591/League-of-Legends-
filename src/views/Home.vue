<template>
  <Champions :champions="champions" />
</template>

<script>
// @ is an alias to /src
import Champions from "@/components/Champions.vue";
import { ref, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    Champions,
  },
  setup() {
    const champions = ref([]);
    const getData = async () => {
      await fetch("data.json")
        .then((res) => res.json())
        .then(
          (data) => (
            (champions.value = data.champions),
            localStorage.setItem("champions", JSON.stringify(champions.value))
          )
        );
    };
    onMounted(async () => {
      await getData();
    });
    return { champions, onMounted };
  },
};
</script>
<style scoped></style>
