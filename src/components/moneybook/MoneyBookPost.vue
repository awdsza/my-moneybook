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
    <button type="button" class="btn" @click="fnOnClickDelete">삭제</button>
  </li>
</template>

<script>
import * as format from 'date-format';
import { DELETE } from '@/api/index';
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
    async fnOnClickDelete() {
      if (confirm('삭제하시겠습니까?')) {
        const { isSuccess } = await DELETE(
          `/accountbook/${this.moneyBook.seq}`,
        );
        if (isSuccess) {
          alert('삭제 되었습니다');
        }
      }
    },
  },
};
</script>

<style></style>
