import { createApp } from "vue";
import { PhGlobeHemisphereWest, PhHeart, PhList, PhX } from "phosphor-vue";

import App from "./App.vue";
import { router } from "./router";

import "./styles/globalStyles.scss";

createApp(App)
	.component("PhGlobeHemisphereWest", PhGlobeHemisphereWest)
	.component("PhHeart", PhHeart)
	.component("PhList", PhList)
	.component("PhX", PhX)
	.use(router)
	.mount("#app");
