import Vue from "vue";
import Vuex from "vuex";
import appConfig from "./modules/appConfig";
import appLoading from "./modules/loading";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import securityOptions from "@/store/securityOptions";

const ls = new SecureLS(securityOptions);
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    appConfig,
    appLoading
  },
  plugins: [
    createPersistedState({
      paths: ["appConfig"],
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
});
