<template>
  <div id="app">
    <ChangeLanguage />
    <ThemeSwitch />
    <Loading v-if="loadingState" />
    <vue-snotify />
    <div id="nav">
      <router-link to="/">{{ $t("main_menu.home") }}</router-link> |
      <router-link to="/about">{{ $t("main_menu.about") }}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import ChangeLanguage from "@/views/components/ChangeLanguage.vue";
import ThemeSwitch from "@/views/components/ThemeSwitch.vue";
import Loading from "@/views/components/Loading.vue";
import { defineComponent, onMounted } from "@vue/composition-api";
import { useThemeInitialize } from "@/hooks/useApp";
import { useLoading } from "@/hooks/useLoading";
import { showErrorToast, showSuccessToast } from "@/hooks/useToastMessages";
import { getItem } from "@/api/api_helper/base_apis/base_api";
export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage,
    ThemeSwitch,
    Loading
  },
  setup() {
    useThemeInitialize();
    const { loadingState, hideLoading } = useLoading();
    onMounted(() => {
      setTimeout(hideLoading, 1000);
      getItem("https://api.github.com/users").then((result: any) => {
        console.log(result);
      });
    });
    return { loadingState };
  }
});
</script>
<style lang="scss">
@import "assets/styles/main";
</style>
