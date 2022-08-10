<template>
  <main>
    <MoneyBookMain />
  </main>
</template>

<script>
import MoneyBookMain from '@/components/moneybook/MoneyBookMain.vue';
export default {
  components: {
    MoneyBookMain,
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
