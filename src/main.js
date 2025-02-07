import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "@/router/index.js";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.component("Icon", Icon);
app.use(router);

app.mount("#app");
