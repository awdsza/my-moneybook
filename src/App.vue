<template>
  <div class="app">
    <AppHeader v-show="$store.state.isLogin" />
    <div class="app-contents">
      <AppHeader v-show="$store.state.isLogin" />
      <Navigation v-show="$store.state.isLogin" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '@/css/reset.css';
import '@/css/common.css';
import AppHeader from '@/components/common/AppHeader.vue';
import Navigation from '@/components/common/Navigation.vue';
export default {
  name: 'App',
  components: { AppHeader, Navigation },
};
</script>

<style></style>
