<template>
  <div id="app" :key="$store.getters.getLanguage">
    <ChangeLanguage />
    <ThemeSwitch />
    <Loading v-if="loadingState" />
    <vue-snotify />
    <div id="nav">
      <button @click="logout" v-if="$store.getters.getFakeLogin.accessToken">
        {{ $t("data.logout.button") }}
      </button>
      <template v-for="route in routes()">
        <router-link
          :key="route.path"
          :to="route.path"
          v-if="!(route.meta ? route.meta.hidden : true)"
        >
          {{ route.meta.title }}
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
import { useLogin } from "@/hooks/accessControl/useLogin";
import { routes } from "@/router/routes/index.ts";

export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage,
    ThemeSwitch,
    Loading
  },
  setup(_props, context) {
    useThemeInitialize();
    const { showVersion } = useAppVersionInfo();
    showVersion();
    const { loadingState } = useLoading();
    const { logout } = useLogin(context);
    return { loadingState, routes, logout };
  }
});
</script>
<style lang="scss">
@import "assets/styles";
</style>
