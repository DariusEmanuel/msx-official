import "./assets/main.css";
import "@vueform/vueform/dist/vueform.css";
import "@vueform/vueform/themes/vueform/css/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Vueform from "@vueform/vueform";
import vueformTheme from "@vueform/vueform/themes/vueform";
import en from "@vueform/vueform/locales/en";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(Vueform, {
    theme: vueformTheme,
    locales: { en },
    locale: "en",
});
app.use(router);

app.mount("#app");
