<template>
  <li>
    <a @click="fnOnClickDetailPage">
      {{ moneyBook.bookTitle }} | {{ moneyBook.amount }} |
      {{ moneyBook.inOut === 'income' ? '수입' : '지출' }} |
      {{
        moneyBook.inOut === 'income'
          ? moneyBook.inPurpose
          : moneyBook.outGoingPurposeText
      }}
      | {{ convertDate }}
    </a>
  </li>
</template>

<script>
import * as format from 'date-format';
export default {
  props: {
    moneyBook: {
      type: Object,
    },
  },
  computed: {
    convertDate() {
      const { bookDate } = this.moneyBook;

      return format('yyyy.MM.dd hh:mm', new Date(bookDate));
    },
  },
  methods: {
    fnOnClickDetailPage() {
      this.$router.push(`/main/${this.moneyBook.seq}`);
    },
  },
};
</script>

<style></style>
