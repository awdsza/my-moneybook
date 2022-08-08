<template>
  <div>
    <section>
      <vc-date-picker
        v-model="searchStartDate"
        :model-config="{
          type: 'string',
          mask: 'YYYY.MM.DD', // Uses 'iso' if missing
        }"
      >
        <template v-slot="{ inputValue, togglePopover }">
          <input :value="inputValue" @click="togglePopover()" type="text" />
        </template>
      </vc-date-picker>
      <vc-date-picker
        v-model="searchEndDate"
        :model-config="{
          type: 'string',
          mask: 'YYYY.MM.DD', // Uses 'iso' if missing
        }"
      >
        <template v-slot="{ inputValue, togglePopover }">
          <input :value="inputValue" @click="togglePopover()" type="text" />
        </template>
      </vc-date-picker>
      <button type="button" class="btn" @click="clickSearchMoneyBookList">
        검색
      </button>
    </section>
    <section class="moneybook__list__section">
      <ul>
        <li v-for="moneyBook in moneybookList" :key="moneyBook.id">
          <MoneyBookPost :moneyBook="moneyBook" />
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
import MoneyBookPost from '@/components/moneybook/MoneyBookPost.vue';
export default {
  components: { FontAwesomeIcon, MoneyBookPost },
  data() {
    return {
      moneybookList: [],
      searchEndDate: '',
      searchStartDate: '',
    };
  },
  methods: {
    submitMoneyBookPost() {
      console.log('submit');
    },
    async clickSearchMoneyBookList() {
      if (new Date(this.searchStartDate) - new Date(this.searchEndDate) > 0) {
        alert('종료일보다 시작일이 클수 없습니다');
        return;
      }
      const result = await this.$store.dispatch('getAccountBookList', {
        token: this.$store.state.token,
        searchStartDate: this.searchStartDate.replace(/\./gi, '-'),
        searchEndDate: this.searchEndDate.replace(/\./gi, '-'),
      });
      if (result) {
        this.moneybookList = result;
      }
    },
  },
  async created() {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth();
    const date =
      today.getDate() + 1 < 10 ? `0${today.getDate()}` : today.getDate();
    const _today = `${year}.${month}.${date}`;
    this.searchStartDate = _today;
    this.searchEndDate = _today;
    this.clickSearchMoneyBookList();
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
