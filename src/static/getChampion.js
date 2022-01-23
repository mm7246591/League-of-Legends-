import { ref } from "vue";
const champions = ref([]);
const error = ref(null);
const getChampion = () => {
    const getData = async() => {
        try {
            let data = await fetch("http://localhost:3000/champions/");
            if (!data.ok) {
                throw Error("NO Data Available");
            }
            champions.value = await data.json();
        } catch (err) {
            error.value = err.message;
        }
    };
    return { champions, error, getData };
};

export default getChampion;