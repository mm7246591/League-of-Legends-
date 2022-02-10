import { ref } from "vue";
const regions = ref([]);
const error = ref(null);
const getRegion = () => {
    const getData = async() => {
        try {
            let data = await fetch("http://localhost:5000/regions");
            if (!data.ok) {
                throw Error("NO Data Available");
            }
            regions.value = await data.json();
            localStorage.setItem("name", JSON.stringify(regions.value));
        } catch (err) {
            err.message = "NO Data Available";
            error.value = err.message;
        }
    };
    return { regions, error, getData };
};

export default getRegion;