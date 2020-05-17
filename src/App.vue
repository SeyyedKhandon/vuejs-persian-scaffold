<template>
  <div id="app">
    <ChangeLanguage />
    <ThemeSwitch />
    <div id="nav">
      <router-link to="/">{{ $t("main_menu.home") }}</router-link> |
      <router-link to="/about">{{ $t("main_menu.about") }}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import ChangeLanguage from "@/locale/ChangeLanguage.vue";
import ThemeSwitch from "@/views/components/ThemeSwitch.vue";
import { defineComponent } from "@vue/composition-api";
import { useThemeInitialize } from "@/hooks/hook_app";
export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage,
    ThemeSwitch
  },
  setup() {
    useThemeInitialize();
    return {};
  }
});
</script>
<style lang="scss">
@import "assets/styles/main";
</style>
