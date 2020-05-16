import getters from "./getters";
import mutations from "./mutations";

export interface AppConfig {
  language: string;
}

const state = {
  language: "fa-IR"
};

export default {
  state,
  getters,
  mutations
};
