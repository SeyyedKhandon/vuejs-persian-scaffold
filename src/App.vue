<template>
  <div id="app">
    <ChangeLanguage />
    <ThemeSwitch />
    <Loading v-if="loadingState" />
    <vue-snotify />
    <div id="nav">
      <template v-for="route in routes()">
        <router-link :key="route.path" :to="route.path" v-if="route.meta">
          {{ route.name }}
        </router-link>
        |
      </template>
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
import { useAppVersionInfo } from "@/hooks/useAppVersion";
import { routes } from "@/router/routes";

export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage,
    ThemeSwitch,
    Loading
  },
  setup() {
    useThemeInitialize();
    const { showVersion } = useAppVersionInfo();
    showVersion();
    const { loadingState } = useLoading();
    return { loadingState, routes };
  }
});
</script>
<style lang="scss">
@import "assets/styles";
</style>
