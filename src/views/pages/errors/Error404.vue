<template>
  <div class="error-404">
    <div class="text__error" data-text="404 page not found">
      {{ $t("data.errorPages.error404.title") }}
    </div>
    <div class="text__link">
      <a href="/" data-text="click here to go home">{{
        $t("data.errorPages.error404.hint")
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>

<style scoped></style>
