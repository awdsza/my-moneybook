<template>
  <div id="app">
    <router-view />
    <BottomMenu v-if="$store.state.isLogin" />
  </div>
</template>

<script>
import '@/style/reset.css';
import BottomMenu from '@/components/bottom/BottomMenu.vue';
export default {
  name: 'App',
  components: {
    BottomMenu,
  },
};
</script>

<style></style>
