<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
    <HelloWorld :msg="$t('HelloWorld.title')" class="content-color" />
  </div>
</template>

<script>
import HelloWorld from "@/views/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
