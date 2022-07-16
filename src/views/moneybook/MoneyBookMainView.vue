<template>
  <section>
    <AppHeader />
    <MoneyBookMain />
  </section>
</template>

<script>
import MoneyBookMain from '@/components/moneybook/MoneyBookMain.vue';
import AppHeader from '../../components/common/AppHeader.vue';
export default {
  components: {
    MoneyBookMain,
    AppHeader,
  },
};
</script>

<style></style>
