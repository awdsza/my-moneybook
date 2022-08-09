<template>
  <li>
    {{ moneyBook.bookTitle }} | {{ moneyBook.amount }} |
    {{ moneyBook.inOut === 'income' ? '수입' : '지출' }} |
    {{
      moneyBook.inOut === 'income'
        ? moneyBook.inPurpose
        : moneyBook.outGoingPurposeText
    }}
    | {{ convertDate }}
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
};
</script>

<style></style>
