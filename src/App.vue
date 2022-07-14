<template>
  <div id="app">
    <div class="app-contents">
      <router-view></router-view>
      <BottomMenu v-if="$store.state.isLogin" />
    </div>
  </div>
</template>

<script>
import '@/css/reset.css';
import '@/css/common.css';
import BottomMenu from '@/components/bottom/BottomMenu.vue';
export default {
  name: 'App',
  components: {
    BottomMenu,
  },
};
</script>

<style></style>
