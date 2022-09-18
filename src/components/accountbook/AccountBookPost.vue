<template>
  <li class="accountbook__item" @click="fnOnClickDetailPage">
    <section v-show="accountBook.bookDate" class="accountbook__item__date">
      {{ convertDate }}
    </section>
    <section class="accountbook__item__title">
      {{ accountBook.bookTitle }}
      <br />
      <span class="accountbook__item__category">{{
        accountBook.categoryName
      }}</span>
    </section>
    <section
      class="accountbook__item__amount"
      :class="
        accountBook.inOutType.toLowerCase() === 'income'
          ? 'incomeColor'
          : 'outGoingColor'
      "
    >
      {{ accountBook.amount }}
    </section>
  </li>
</template>

<script>
import * as format from 'date-format';

export default {
  props: {
    accountBook: {
      type: Object,
    },
  },
  computed: {
    convertDate() {
      const { bookDate } = this.accountBook;

      return format('yyyy.MM.dd', new Date(bookDate));
    },
  },
  methods: {
    fnOnClickDetailPage() {
      this.$router.push(`/main/${this.accountBook.seq}`);
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
  font-size: 1rem;
}
.accountbook__item__date {
  width: 7rem;
  margin-right: 0.75rem;
}
.accountbook__item__category {
  font-size: 0.75rem;
}
.accountbook__item__title {
  width: 15rem;
  margin-right: 0.75rem;
}
.accountbook__item__amount {
  width: 3rem;
}
.incomeColor {
  color: #4e32db;
}
.outGoingColor {
  color: #e43123;
}
</style>
