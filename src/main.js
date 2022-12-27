import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import globalVariable from "./global/global";

const options = {
  color: "#221f3c",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "bottom",
  position: "absolute",
  inverse: false,
};
const app = createApp(App);

app.use(router);
app.use(VueProgressBar, options);

globalVariable(app.config.globalProperties);

app.mount("#fv-site");
