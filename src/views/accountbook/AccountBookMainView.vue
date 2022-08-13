<template>
  <main>
    <AccountBookMain />
  </main>
</template>

<script>
import AccountBookMain from '@/components/accountbook/AccountBookMain.vue';
export default {
  components: {
    AccountBookMain,
  },
};
</script>

<style scoped>
.main__section {
  margin: 0 auto;
  width: 500px;
  height: 968px;
}
main {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
