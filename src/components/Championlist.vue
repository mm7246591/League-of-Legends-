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
      <el-table-column prop="character" label="Classes" sortable>
      </el-table-column>
      <el-table-column prop="date" label="Date" sortable> </el-table-column>
      <el-table-column prop="version" label="Last changed" sortable>
      </el-table-column>
      <el-table-column prop="Blue Essence" label="Blue Essence" sortable>
      </el-table-column>
      <el-table-column prop="RP" label="RP" sortable> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Championlist",
  //   data() {
  //     return {
  //       tableData: [],
  //     };
  //   },
  //   mounted() {
  //     fetch("http://localhost:4000/championList")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         this.tableData = data;
  //       });
  //   },
  setup() {
    const tableData = ref([]);
    const error = ref(null);
    const getChampionlist = async () => {
      try {
        let data = await fetch("http://localhost:4000/championList");
        if (!data.ok) {
          throw Error("NO Data Available");
        }
        tableData.value = await data.json();
      } catch (err) {
        error.value = err.message;
      }
    };
    getChampionlist();
    return { tableData, error };
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
