<template>
  <div>{{ backgroundImg }}</div>
</template>

<script>
export default {
  name: "Regiondetail",
  props: ["name", "backgroundImg", "icon", "text"],
  data() {
    return {
      Name: null,
      Img: null,
      Icon: null,
      Text: null,
      getPost: null,
    };
  },
};
</script>

<style></style>
