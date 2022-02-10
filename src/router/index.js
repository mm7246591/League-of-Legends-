import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Region from "../views/Region.vue";
import Regiondetail from "../components/Regiondetail.vue";
const routes = [
  {
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
  },
  {
    path: "/regions/:name",
    name: "Regiondetail",
    component: Regiondetail,
    props: true,
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
