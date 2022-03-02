<template>
  <Champions :champions="champions" />
</template>

<script>
// @ is an alias to /src
import Champions from "@/components/Champions.vue";
import db from "../firebase/firebase";
import { ref as dref, onValue } from "firebase/database";
import { ref, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    Champions,
  },
  setup() {
    const champions = ref([]);

    onMounted(() => {
      const getData = dref(db, "champions");
      onValue(getData, (data) => {
        champions.value = data.val();
        localStorage.setItem("champions", JSON.stringify(champions.value));
      });
    });
    return { champions, onMounted };
  },
};
</script>
<style scoped></style>
