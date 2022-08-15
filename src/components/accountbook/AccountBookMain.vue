<template>
  <div>
    <section class="search__section">
      <section class="search__date__section">
        <vc-date-picker
          v-model="searchStartDate"
          :model-config="{
            type: 'string',
            mask: 'YYYY.MM.DD', // Uses 'iso' if missing
          }"
          @dayclick="clickSearchDate('searchStartDate')"
        >
          <template v-slot="{ inputValue, togglePopover }">
            <input
              :value="inputValue"
              @click="togglePopover()"
              type="text"
              class="input__calendar"
              ref="searchStartDate"
            />
          </template>
        </vc-date-picker>
        <span class="hyphen"></span>
        <vc-date-picker
          v-model="searchEndDate"
          :model-config="{
            type: 'string',
            mask: 'YYYY.MM.DD', // Uses 'iso' if missing
          }"
          @dayclick="clickSearchDate('searchEndDate')"
        >
          <template v-slot="{ inputValue, togglePopover }">
            <input
              :value="inputValue"
              @click="togglePopover()"
              type="text"
              class="input__calendar"
              ref="searchEndDate"
            />
          </template>
        </vc-date-picker>
      </section>
    </section>
    <section class="moneybook__list__section">
      <ul>
        <AccountBookPost
          v-for="accountBook in accountBookList"
          :key="accountBook.id"
          :accountBook="accountBook"
        />
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
import AccountBookPost from '@/components/accountbook/AccountBookPost.vue';
import * as format from 'date-format';
export default {
  components: { FontAwesomeIcon, AccountBookPost },
  data() {
    return {
      accountBookList: [],
      searchEndDate: '',
      searchStartDate: '',
    };
  },
  methods: {
    submitAccountBookPost() {
      console.log('submit');
    },
    async clickSearchDate(ref) {
      const diffDay =
        new Date(this.searchStartDate) - new Date(this.searchEndDate);
      if (diffDay > 0) {
        const targetDate = new Date(this.searchStartDate);
        const changeDate = new Date(targetDate);

        changeDate.setDate(targetDate.getDate() + 30);
        this.searchEndDate = format(
          'yyyy.MM.dd',
          new Date(
            changeDate.getFullYear(),
            changeDate.getMonth(),
            changeDate.getDate(),
          ),
        );
      }
      //검색일자 기준이 30일 초과시 선택한 일자 기준으로 최대 30일 이내로 맞춘다.
      if (Math.abs(diffDay / (1000 * 60 * 60 * 24)) > 30) {
        const targetDate = new Date(this[ref]);
        const changeDate = new Date(targetDate);

        if (ref === 'searchStartDate') {
          changeDate.setDate(targetDate.getDate() + 30);
        } else {
          changeDate.setDate(targetDate.getDate() - 30);
        }
        this[ref === 'searchStartDate' ? 'searchEndDate' : 'searchStartDate'] =
          format(
            'yyyy.MM.dd',
            new Date(
              changeDate.getFullYear(),
              changeDate.getMonth(),
              changeDate.getDate(),
            ),
          );
      }
      const result = await this.$store.dispatch('getAccountBookList', {
        token: this.$store.state.token,
        searchStartDate: this.searchStartDate.replace(/\./gi, '-'),
        searchEndDate: this.searchEndDate.replace(/\./gi, '-'),
      });
      if (result) {
        this.accountBookList = result;
      }
    },
  },
  async created() {
    const startDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1,
    );
    this.searchStartDate = format('yyyy.MM.dd', startDate);
    this.searchEndDate = format('yyyy.MM.dd', new Date());
    this.clickSearchDate();
  },
};
</script>

<style scoped>
.search__section {
  padding: 10px 20px;
}
.search__date__section {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  max-height: 3rem;
}
.hyphen {
  display: block;
  width: 2rem;
  height: 0.3rem;
  background: #898989;
  margin: 0 1rem;
}
.content__section {
  flex-shrink: 2;
}
.moneybook__list__section > ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
