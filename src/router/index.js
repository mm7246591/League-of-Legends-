import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Top from "../views/Top.vue";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Top",
        name: "Top",
        component: Top,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;