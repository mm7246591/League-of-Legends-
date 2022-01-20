<template>
  <div class="championItems">
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
    <div class="box">
      <div class="img">
        <a href=""><img src="https://picsum.photos/280/300" alt="" /></a>
      </div>
      <div class="text"><span>123</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Champion",
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
.box .text {
  width: 100%;
  color: white;
  background-color: black;
  text-align: center;
  font-size: 30px;
}
</style>
