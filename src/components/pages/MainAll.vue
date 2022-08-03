<template>
  <div>
    <HeaderMenuVue />
    <router-view></router-view>
    <FooterContentVue />
  </div>
</template>

<script>
import HeaderMenuVue from "@/components/HeaderMenu.vue";
import FooterContentVue from "@/components/FooterContent.vue";
export default {
  components: {
    HeaderMenuVue,
    FooterContentVue,
  },
};
</script>

<style>
</style>