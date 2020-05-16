<template>
  <div id="app">
    <ChangeLanguage />
    <div id="nav">
      <router-link to="/">{{ $t("main_menu.home") }}</router-link> |
      <router-link to="/about">{{ $t("main_menu.about") }}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import ChangeLanguage from "@/locale/ChangeLanguage.vue";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage
  },
  setup() {
    return {};
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
