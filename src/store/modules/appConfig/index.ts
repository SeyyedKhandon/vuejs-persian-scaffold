import getters from "./getters";
import mutations from "./mutations";

export interface AppConfig {
  language: string;
}

const state = {
  language: "en-US"
};

export default {
  state,
  getters,
  mutations
};
