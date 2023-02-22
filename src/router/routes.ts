import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const Country = () => import("../views/Country.vue");

export const routes: RouteRecordRaw[] = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/detalhes-nacao/:id", name: "Country", component: Country },
];
