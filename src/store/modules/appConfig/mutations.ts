import { AppConfig } from "./index";

const setLanguage = (state: AppConfig, data: string) => (state.language = data);
export default {
  setLanguage
};
