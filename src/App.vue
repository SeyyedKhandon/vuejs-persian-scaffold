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
import { defineComponent } from "@vue/composition-api";
import { useThemeInitialize } from "@/hooks/useApp";
import { useLoading } from "@/hooks/useLoading";
import { useAppVersionInfo } from "@/hooks/useAPPVersion";
export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage,
    ThemeSwitch,
    Loading
  },
  setup() {
    const { showVersion } = useAppVersionInfo();
    showVersion();
    useThemeInitialize();
    const { loadingState } = useLoading();
    return { loadingState };
  }
});
</script>
<style lang="scss">
@import "assets/styles";
</style>
