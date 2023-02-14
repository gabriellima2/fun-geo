import { createApp } from "vue";
import { PhGlobeHemisphereWest, PhHeart } from "phosphor-vue";

import App from "./App.vue";
import { router } from "./router";

import "./styles/globalStyles.scss";

createApp(App)
	.component("PhGlobeHemisphereWest", PhGlobeHemisphereWest)
	.component("PhHeart", PhHeart)
	.use(router)
	.mount("#app");
