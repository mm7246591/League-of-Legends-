<template>
  <div class="content">
    <el-table
      :data="championlist"
      :header-cell-style="{
        'background-color': '#092949',
        color: 'white',
        'font-weight': '400',
        'font-size': '20px',
        'font-family': 'Monoton, cursive',
        'font-family': 'Noto Sans TC, sans-serif',
        'font-family': 'Noto Serif TC, serif',
        'font-style': 'italic',
      }"
      :row-style="{
        'background-color': '#061e36',
        color: '#c9aa71',
        'font-weight': '400',
        'font-size': '20px',
      }"
    >
      <el-table-column prop="img" width="50px">
        <template v-slot="scope">
          <img :src="scope.row.img" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Champion" width="300px" sortable>
      </el-table-column>
      <el-table-column
        prop="character"
        label="Classes"
        sortable
        :sort-method="sortClasses"
      >
      </el-table-column>
      <el-table-column prop="date" label="Date" sortable> </el-table-column>
      <el-table-column prop="version" label="Last Changed" sortable> </el-table-column>
      <el-table-column
        prop="blueEssence"
        label="Blue Essence"
        sortable
        :sort-method="sortblueEssence"
      >
      </el-table-column>
      <el-table-column prop="RP" label="RP" sortable> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import db from "../firebase/firebase";
import { ref as dref, onValue } from "firebase/database";
import { ref, onMounted } from "vue";
export default {
  name: "Championlist",
  setup() {
    const championlist = ref([]);
    onMounted(() => {
      const getData = dref(db, "championList");
      onValue(getData, (data) => {
        championlist.value = data.val();
      });
    });
    // sort
    const sortblueEssence = (obj1, obj2) => {
      return obj1.blueEssence - obj2.blueEssence;
    };
    // sort
    const sortClasses = (obj1, obj2) => {
      return obj1.character.slice(0, 1) - obj2.character.slice(0, 1);
    };
    return { championlist, sortblueEssence, sortClasses };
  },
  mounted() {
    // remove hoverEvent
    setTimeout(() => {
      const obj = document.getElementsByClassName("el-table--enable-row-hover")[0];
      let clz = obj.getAttribute("class");
      clz = clz.replace("el-table--enable-row-hover", "");
      obj.setAttribute("class", clz);
    }, 1);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Sans+TC:wght@100&family=Noto+Serif+TC:wght@200&display=swap");
.content {
  width: 1300px;
  margin: auto;
  padding-top: 30px;
}
</style>
