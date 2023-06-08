import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faMagnifyingGlass, faSun, faAngleDown);

import '@/index.css';
import App from '@/App.vue';

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app');
