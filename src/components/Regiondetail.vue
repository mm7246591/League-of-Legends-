<template>
  <article class="title">
    <img src="../assets/伊克斯塔爾.png" alt />
    <span class="text">{{ name }}</span>
    <img class="imgBar" src="../assets/t1HeaderDivider.png" alt="" />
  </article>
  <section>
    <p>
      以擅長元素魔法而聞名的伊克斯塔爾，是首批加入蘇瑞瑪帝國的獨立國家之一。事實上，伊克斯塔爾的文化淵源更為久遠：當年那次向西的大遷徙，造就了包含伊克斯塔爾在內的諸多文明，如布爾魯、規模龐大的希利亞、奉行苦修的巨石峰等。這些文明很有可能與史上第一批至高戰士的誕生息息相關。伊克斯塔爾的法師曾先後在虛空、冥血族的侵襲下生還，靠的是對近鄰敬而遠之，以周遭的蠻荒之地為屏障。雖然已經失去了不少東西，他們仍奮力保存碩果僅存的文明……如今，在此隱匿叢林深處、與世隔絕上千年的城市「伊克薩奧肯」，已經擁有發展成熟的生態村落，而且一直以來幾乎不受外界影響。伊克斯塔爾人從遠方見證了天堂島的毀滅，以及隨之而來的符文聖戰。因此，他們視符文大地的其他陣營為新興勢力和覬覦權勢者，並運用自身強大法力來使外敵無法靠近。
    </p>
  </section>
</template>

<script>
export default {
  name: "Regiondetail",
  props: ["name", "backgroundImg", "icon", "text"],
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../assets/伊克斯塔爾.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.title::after {
  content: "";
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 65%,
    rgba(10, 10, 12, 0.1) 70%,
    #0a0a0c 90%
  );
  position: absolute;
  bottom: 0;
}
.title img {
  width: 200px;
  height: 200px;
}
.title .text {
  margin: 20px 0;
  background: -webkit-linear-gradient(rgb(103, 71, 31), rgb(203, 172, 98));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 104px;
  font-weight: 700;
  position: absolute;
  bottom: 5%;
  z-index: 2;
}
.title .imgBar {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  z-index: 2;
}
section {
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
}
section p {
  width: 1000px;
  margin: 30px 0;
  font-family: Beaufort for LOL, Arial, sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #c4b998;
  line-height: 1.6;
}
section p::first-letter {
  font-size: 4rem;
  border-bottom: 3px solid rgb(203, 172, 98);
}
</style>
