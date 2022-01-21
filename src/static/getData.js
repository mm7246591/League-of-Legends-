import { ref } from "vue";
const getData = () => {
    const champions = ref([]);
    const error = ref(null);
    const getChampion = async() => {
        try {
            let data = await fetch("http://localhost:3000/champions");
            if (!data) {
                throw Error("NO Data Available");
            }
            champions.value = await data.json();
        } catch (err) {
            error.value = err.message;
        }
    };
    return { champions, error, getChampion };
};

export default getData;