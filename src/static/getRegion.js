import { ref } from "vue";
const regions = ref([]);
const error = ref(null);
const getRegion = () => {
    const getData = async() => {
        try {
            let data = await fetch("http://localhost:5000/regions");
            regions.value = await data.json();
            localStorage.setItem("regions", JSON.stringify(regions.value));
        } catch (err) {
            err.message = "NO Data Available";
            error.value = err.message;
        }
    };
    return { regions, error, getData };
};

export default getRegion;