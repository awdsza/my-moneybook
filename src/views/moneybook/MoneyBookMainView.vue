<template>
  <section>
    <AppHeader />
    <main>
      <Navigation />
      <MoneyBookMain />
    </main>
  </section>
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
main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-content: center;
}
</style>
