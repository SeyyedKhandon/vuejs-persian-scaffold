import Vue from "vue";
import { i18n } from "@/locale/useLocale";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "vue-multiselect/dist/vue-multiselect.min.css";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
