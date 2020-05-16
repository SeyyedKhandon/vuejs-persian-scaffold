import Vue from "vue";
import store from "@/store";
import VueI18n from "vue-i18n";
import { ref, SetupContext } from "@vue/composition-api";
Vue.use(VueI18n);

import FA from "@/locale/fa.json";
import EN from "@/locale/en.json";

export const getLocale = () =>
  store.getters.getLanguage === "fa-IR" ? "FA" : "EN";

export const i18n = (() => {
  const locale = getLocale();
  if (locale === "FA") document.body.classList.add("rtl");

  return new VueI18n({
    locale,
    messages: {
      FA,
      EN
    }
  });
})();

export const useLocale = (context: SetupContext) => {
  const languages = ref(["FA", "EN"]);
  const currentLanguage = ref(getLocale());

  const updateLanguage = (SelectedLang = "EN") => {
    const locale: string = SelectedLang === "FA" ? "fa-IR" : "en-US";
    store.commit("setLanguage", locale);
    context.root.$i18n.locale = SelectedLang;
    context.emit("change", locale);
  };
  return {
    languages,
    currentLanguage,
    updateLanguage
  };
};
