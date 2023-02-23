import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const CountryDetails = () => import("../views/CountryDetails.vue");
const SearchResult = () => import("../views/SearchResult.vue");

export const routes: RouteRecordRaw[] = [
	{ path: "/", name: "Home", component: Home },
	{
		path: "/detalhes-nacao/:id",
		name: "CountryDetails",
		component: CountryDetails,
	},
	{ path: "/resultados", name: "SearchResult", component: SearchResult },
];
