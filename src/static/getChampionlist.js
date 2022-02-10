import { ref } from "vue";
const tableData = ref([]);
const error = ref(null);
const getChampionlist = () => {
    const getData = async() => {
        try {
            let data = await fetch("http://localhost:4000/championList/");
            if (!data.ok) {
                throw Error("NO Data Available");
            }
            tableData.value = await data.json();
        } catch (err) {
            error.value = err.message;
        }
    };
    return { tableData, error, getData };
};

export default getChampionlist;