<template>
  <div id="app">
    <router-view />
    <BottomMenu v-if="$store.state.isLogin" />
  </div>
</template>

<script>
import '@/css/common.css';
import '@/css/reset.css';
import BottomMenu from '@/components/bottom/BottomMenu.vue';
export default {
  name: 'App',
  components: {
    BottomMenu,
  },
};
</script>

<style scoped>
body {
  background: rgb(45, 159, 222);
}
</style>
