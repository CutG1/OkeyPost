<template>
  <HeaderMenuVue/>
  <router-view></router-view>
  <footer-content-vue></footer-content-vue>
</template>

<script>
import HeaderMenuVue from '@/components/HeaderMenu.vue';
import FooterContentVue from '@/components/FooterContent.vue';
export default {
    components: {
        HeaderMenuVue,
        FooterContentVue
    }
}
</script>

<style>

</style>