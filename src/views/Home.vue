<template>
  <Champions />
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
    const data = ref([]);

    return { data };
  },
};
</script>
<style scoped></style>
