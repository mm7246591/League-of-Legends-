<template>
  <div class="content">
    <el-table
      :data="tableData"
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
      <el-table-column prop="version" label="Last Changed" sortable>
      </el-table-column>
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
import getChampionlist from "../static/getChampionlist";
export default {
  name: "Championlist",
  setup() {
    const { tableData, error, getData } = getChampionlist();
    getData();
    return { tableData, error };
  },
  methods: {
    sortblueEssence(obj1, obj2) {
      return obj1.blueEssence - obj2.blueEssence;
    },
    sortClasses(obj1, obj2) {
      return obj1.character - obj2.character;
    },
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

.el-table__row :hover > .el-table__cell {
  background-color: rgb(0, 0, 0) !important;
}
</style>
