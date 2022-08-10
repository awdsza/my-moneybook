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
    <!-- <section class="post-time">
      <a >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </a>
      <a @click="fnOnClickDelete">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </a>
    </section> -->
  </li>
  <!-- <p class="read_todo active">${data}</p>
  <a class="delete_todo">삭제하기</a
  ><input class="update_todo" type="text" value="${data}" />`; -->
</template>

<script>
import * as format from 'date-format';
import { DELETE } from '@/api/index';
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
