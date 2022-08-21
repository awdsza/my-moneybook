<template>
  <li class="accountbook__item" @click="fnOnClickItem">
    <section>
      {{ accountBook.bookDateRange }}
    </section>
    <section class="incomeColor">+{{ accountBook.inComeAmount }}</section>
    <section class="outGoingColor">-{{ accountBook.outGoingAmount }}</section>
  </li>
</template>

<script>
export default {
  props: {
    accountBook: {
      type: Object,
    },
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    fnOnClickItem() {
      this.$emit('clickPost', this.accountBook.bookDateRange);
    },
  },
};
</script>

<style scoped>
.accountbook__item {
  position: relative;
  flex-grow: 1;
  width: 100%;
  height: 3rem;
  margin: 7px 0;
  padding: 10px 20px;
  background: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.incomeColor {
  color: #4e32db;
}
.outGoingColor {
  color: #e43123;
}
</style>
