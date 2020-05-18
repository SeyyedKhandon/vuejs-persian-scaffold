<template>
  <multiselect
    v-model="currentLanguage"
    class="locale_multiselect"
    :options="languages"
    :close-on-select="true"
    :searchable="false"
    :show-labels="false"
    :allow-empty="false"
    @select="updateLanguage"
  >
  </multiselect>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Multiselect from "vue-multiselect";
import { useLocale } from "@/hooks/useLocale";

export default defineComponent({
  name: "ChangeLanguage",
  components: {
    Multiselect
  },
  setup(_props, context) {
    const { languages, currentLanguage, updateLanguage } = useLocale(context);
    return {
      languages,
      currentLanguage,
      updateLanguage
    };
  }
});
</script>
<style lang="scss">
/*@import "src/assets/styles/components/ChangeLanguage";*/
</style>
