import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Region from "../views/Region.vue";
import Ixtal from "../components/regions/Ixtal.vue";
import Zaun from "../components/regions/Zaun.vue";
import Mounttargon from "../components/regions/Mounttargon.vue";
import Freljord from "../components/regions/Freljord.vue";
import Ionia from "../components/regions/Ionia.vue";
import Bilgewater from "../components/regions/Bilgewater.vue";
import Bandlecity from "../components/regions/Bandlecity.vue";
import Piltover from "../components/regions/Piltover.vue";
import Demacia from "../components/regions/Demacia.vue";
import Shurima from "../components/regions/Shurima.vue";
import Void from "../components/regions/Void.vue";
import Noxus from "../components/regions/Noxus.vue";
import Shadowisles from "../components/regions/Shadowisles.vue";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list",
        name: "List",
        component: List,
    },
    {
        path: "/regions",
        name: "Region",
        component: Region,
        children: [{
                path: "Ixtal",
                name: "伊克斯塔爾",
                component: Ixtal,
                props: true,
            },
            {
                path: "zaun",
                name: "佐恩",
                component: Zaun,
                props: true,
            },
            {
                path: "mount-targon",
                name: "巨石峰",
                component: Mounttargon,
                props: true,
            },
            {
                path: "freljord",
                name: "弗雷爾卓德",
                component: Freljord,
                props: true,
            },
            {
                path: "ionia",
                name: "愛歐尼亞",
                component: Ionia,
                props: true,
            },
            {
                path: "bilgewater",
                name: "比爾吉沃特",
                component: Bilgewater,
                props: true,
            },
            {
                path: "bandle-city",
                name: "班德爾城",
                component: Bandlecity,
                props: true,
            },
            {
                path: "piltover",
                name: "皮爾托福",
                component: Piltover,
                props: true,
            },
            {
                path: "demacia",
                name: "蒂瑪西亞",
                component: Demacia,
                props: true,
            },
            {
                path: "shurima",
                name: "蘇瑞瑪",
                component: Shurima,
                props: true,
            },
            {
                path: "void",
                name: "虛空",
                component: Void,
                props: true,
            },
            {
                path: "noxus",
                name: "諾克薩斯",
                component: Noxus,
                props: true,
            },
            {
                path: "shadow-isles",
                name: "闇影島",
                component: Shadowisles,
                props: true,
            },
        ],
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;