<template>
  <main>
    <MoneyBookMain />
  </main>
</template>

<script>
import MoneyBookMain from '@/components/moneybook/MoneyBookMain.vue';
import Navigation from '@/components/common/Navigation.vue';
import AppHeader from '@/components/common/AppHeader.vue';
export default {
  components: {
    MoneyBookMain,
    Navigation,
    AppHeader,
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
  display: flex;
  align-content: center;
}
</style>
