<template>
  <div>
    <section>
      <vc-date-picker v-model="searchStartDate">
        <template v-slot="{ inputValue, togglePopover }">
          <input :value="inputValue" readonly @click="togglePopover()" />
        </template>
      </vc-date-picker>
      <vc-date-picker v-model="searchEndDate">
        <template v-slot="{ inputValue, togglePopover }">
          <input :value="inputValue" readonly @click="togglePopover()" />
        </template>
      </vc-date-picker>
      <button type="button" class="btn" @click="clickSearchMoneyBookList">
        검색
      </button>
    </section>
    <section class="moneybook__list__section">
      <ul>
        <li
          v-for="{
            bookTitle,
            id,
            amount,
            inOut,
            outGoingPurposeText,
            inPurpose,
          } in moneybookList"
          :key="id"
        >
          {{ bookTitle }} | {{ amount }} |
          {{ inOut === 'income' ? '수입' : '지출' }} |
          {{ inOut === 'income' ? inPurpose : outGoingPurposeText }}
        </li>
      </ul>
    </section>
    <router-link to="/main/write" class="write__button">
      <FontAwesomeIcon icon="fa-solid fa-plus" />
    </router-link>
  </div>
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faPlus);

import { getMoneyBookList } from '@/storage/index';
export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      moneybookList: [],
      searchEndDate: new Date(),
      searchStartDate: '',
    };
  },
  methods: {
    submitMoneyBookPost() {
      console.log('submit');
    },
    clickSearchMoneyBookList() {
      console.log();
      const _startDate = new Date(this.searchStartDate);
      const _endDate = new Date(this.searchEndDate);
      if (_startDate - _endDate > 0) {
        alert('종료일보다 시작일이 클수 없습니다');
        return;
      }
    },
  },
  created() {
    this.moneybookList = getMoneyBookList(this.$store.state.loginID);
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth();
    const date =
      today.getDate() + 1 < 10 ? `0${today.getDate()}` : today.getDate();

    const _today = `${year}-${month}-${date}`;
    this.searchStartDate = _today;
    this.searchEndDate = _today;
  },
};
</script>

<style scoped>
.content__section {
  flex-shrink: 2;
}
textarea {
  resize: none;
}
</style>
