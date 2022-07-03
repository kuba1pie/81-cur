import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";
import TheHomeVue from "./views/TheHome.vue";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: TheHomeVue },
    { path: "/:pathMatch(.*)*", component: TheHomeVue },
  ],
});

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount("#app");
