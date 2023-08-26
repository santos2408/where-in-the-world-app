import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import App from "@/App.vue";

library.add(faMoon, faMagnifyingGlass, faSun, faAngleDown);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
