import Vue from "vue";
import * as R from "ramda";
import store from "@/store";
import VueI18n from "vue-i18n";
import { onMounted, ref, SetupContext } from "@vue/composition-api";
import { Locales } from "@/types";
import supportedLocales from "@/api/mock_db/locale/supportedLocales.json";
import persian from "@/api/mock_db/locale/persian.json";
import english from "@/api/mock_db/locale/english.json";

Vue.use(VueI18n);

export const changeRTL = (rtl_state: boolean) =>
  rtl_state
    ? document.body.classList.add("rtl")
    : document.body.classList.remove("rtl");

export const getLanguagesTitles = (locale_json: Locales) =>
  R.map(R.prop("title"), locale_json.locales);
export const getLocaleInfo = R.curry(
  (requested_prop: string, condition_prop: string, condition_value: string) => {
    return R.pipe(
      R.find(R.propEq(condition_prop, condition_value)),
      // @ts-ignore
      R.prop(requested_prop)
    )(supportedLocales.locales);
  }
);
const getLocaleTitle = getLocaleInfo("title", "name");
const getLocaleName = getLocaleInfo("name", "title");
const getLocaleSlugByName = getLocaleInfo("slug", "name");
const getLocaleRTLBySlug = getLocaleInfo("rtl", "slug");
const getLocaleRTLByName = getLocaleInfo("rtl", "name");

export const useLocale = (context: SetupContext) => {
  const languages = ref(getLanguagesTitles(supportedLocales));
  const currentLanguage = ref(getLocaleTitle(store.getters.getLanguage));

  const updateLanguage = (title = "English") => {
    R.pipe(
      getLocaleName,
      R.tap((name: string) => store.commit("setLanguage", name)),
      R.tap(name => context.emit("change", name)),
      getLocaleSlugByName,
      R.tap(slug => (context.root.$i18n.locale = slug)),
      getLocaleRTLBySlug,
      changeRTL
    )(title);
  };
  onMounted(() => changeRTL(getLocaleRTLByName(store.getters.getLanguage)));
  return {
    languages,
    currentLanguage,
    updateLanguage
  };
};

export const i18n = new VueI18n({
  locale: getLocaleSlugByName(store.getters.getLanguage),
  messages: {
    persian,
    english
  }
});
