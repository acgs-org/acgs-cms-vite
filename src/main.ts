import { createApp } from "vue";
import App from "./App.vue";

import { DatePicker } from "ant-design-vue";
import axios from "axios";
import VueAxios from "vue-axios";

import { router } from "./route";

createApp(App)
.use(DatePicker)
.use(router)
.use(VueAxios, axios)
.mount("#app");
