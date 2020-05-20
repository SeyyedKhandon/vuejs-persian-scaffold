<template>
  <div class="about">
    <h3 class="title-color">{{ $t("About.github_users") }}</h3>
    <ol class="github-users">
      <li v-for="username in usernames" :key="username" v-cloak>
        {{ username }}
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "@vue/composition-api";
import { getItem } from "@/api/api_helper/base_apis/base_api";
import { useLoading } from "@/hooks/useLoading";
import { GithubUser } from "@/types/github_users";
export default defineComponent({
  name: "GithubUsers",
  setup() {
    const usernames: Ref<string[]> = ref([]);
    const { showLoading, hideLoading } = useLoading();
    showLoading();
    getItem("https://api.github.com/users")
      .then((result: GithubUser[]) => {
        usernames.value = result.map((user: GithubUser) => user.login);
        hideLoading();
      })
      .catch(hideLoading);
    return { usernames };
  }
});
</script>
<style lang="scss"></style>
