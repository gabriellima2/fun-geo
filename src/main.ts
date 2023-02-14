import { createApp } from "vue";
import { PhGlobeHemisphereWest, PhHeart } from "phosphor-vue";

import App from "./App.vue";
import "./styles/globalStyles.scss";

createApp(App)
	.component("PhGlobeHemisphereWest", PhGlobeHemisphereWest)
	.component("PhHeart", PhHeart)
	.mount("#app");
