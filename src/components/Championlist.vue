<template>
  <div class="content">
    <el-table
      :data="pageData"
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
      <el-table-column prop="name" width="300px" label="Champion" sortable>
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
        id="icon"
      >
      </el-table-column>
      <el-table-column prop="RP" label="RP" sortable> </el-table-column>
    </el-table>
    <el-pagination
      :page-zize="pageSize"
      :pager-count="11"
      layout="prev,pager,next"
      :total="championlist.length"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
export default {
  name: "Championlist",
  setup() {
    const championlist = ref([]);
    const page = ref(1);
    const pageSize = ref(10);
    const getData = async () => {
      await fetch("data.json")
        .then((res) => res.json())
        .then((data) => (championlist.value = data.championList));
    };
    onMounted(() => {
      getData();
    });
    const pageData = computed(() => {
      return championlist.value.slice(
        pageSize.value * page.value - pageSize.value,
        pageSize.value * page.value
      );
    });
    const setPage = (val) => {
      page.value = val;
    };
    // sort
    const sortblueEssence = (obj1, obj2) => {
      return obj1.blueEssence - obj2.blueEssence;
    };
    // sort
    const sortClasses = (obj1, obj2) => {
      return obj1.character.slice(0, 1) - obj2.character.slice(0, 1);
    };
    // remove hoverEvent
    setTimeout(() => {
      const obj = document.getElementsByClassName("el-table--enable-row-hover")[0];
      let clz = obj.getAttribute("class");
      clz = clz.replace("el-table--enable-row-hover", "");
      obj.setAttribute("class", clz);
    }, 1);
    return {
      page,
      pageSize,
      championlist,
      pageData,
      setPage,
      sortblueEssence,
      sortClasses,
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Noto+Sans+TC:wght@100&family=Noto+Serif+TC:wght@200&display=swap");
.content {
  min-height: 100vh;
  max-width: 1300px;
  margin: auto;
  padding-top: 30px;
  overflow: hidden;
}
.el-pagination {
  text-align: center;
  --el-pagination-font-size: 20px;
  --el-pagination-text-color: white;
  --el-pagination-bg-color: #060e1f;
  --el-pagination-button-disabled-bg-color: #060e1f;
  --el-pagination-button-color: white;
  --el-pagination-button-disabled-color: white;
  color: white;
  margin-top: 30px;
  height: 80px;
}
</style>
