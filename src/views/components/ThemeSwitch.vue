<template>
  <i @click="themeUpdate(true)" class="theme-switch">🎨</i>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useThemeManager } from "../../hooks/hook_theme";

export default defineComponent({
  name: "themeSwitch",
  setup() {
    const { themeUpdate } = useThemeManager();
    return { themeUpdate };
  }
});
</script>

<style lang="scss" scoped>
.theme-switch {
  cursor: pointer;
}
</style>
