<template>
  <div id="app">
    <HeaderMenu />
    <router-view />
    <FooterContent />
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterContent from "@/components/FooterContent.vue";
export default {
  name: "App",
  components: {
    HeaderMenu,
    FooterContent,
  },
};
</script>

<style>
</style>
