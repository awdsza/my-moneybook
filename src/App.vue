<template>
  <div class="app">
    <AppHeader v-if="isUserLogin" />
    <div class="app-contents">
      <AccountTypeNavigation v-if="isUserLogin && isMainMenu" />
      <Navigation v-if="isUserLogin" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '@/css/reset.css';
import '@/css/common.css';
import AccountTypeNavigation from '@/components/common/AccountTypeNavigation.vue';
import AppHeader from '@/components/common/AppHeader.vue';
import Navigation from '@/components/common/Navigation.vue';
export default {
  name: 'App',
  components: { AppHeader, Navigation, AccountTypeNavigation },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    isMainMenu() {
      return this.currentMenu.indexOf('main') > -1;
    },
  },
  data() {
    return {
      currentMenu: '',
    };
  },
  watch: {
    $route(to, from) {
      this.currentMenu = to.path;
    },
  },
};
</script>

<style></style>
