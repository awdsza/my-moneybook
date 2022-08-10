<template>
  <li class="accountbook__item" @click="fnOnClickDetailPage">
    <section>
      {{ convertDate }}
    </section>
    <section>
      {{
        moneyBook.inOut === 'income'
          ? moneyBook.inPurpose
          : moneyBook.outGoingPurposeText
      }}
    </section>
    <section class="post-title">
      {{ moneyBook.bookTitle }}
    </section>
    <section
      class=""
      :class="moneyBook.inOut === 'income' ? 'incomeColor' : 'outGoingColor'"
    >
      {{ moneyBook.amount }}
    </section>
  </li>
</template>

<script>
import * as format from 'date-format';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faTrash, faPlus);
export default {
  components: {
    FontAwesomeIcon,
  },
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

<style scoped>
.accountbook__item {
  position: relative;
  flex-grow: 1;
  width: 100%;
  height: 5rem;
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
