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
          @dayclick="clickSearchDate"
        >
          <template v-slot="{ inputValue, togglePopover }">
            <input
              :value="inputValue"
              @click="togglePopover()"
              type="text"
              class="input__calendar"
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
          @dayclick="clickSearchDate"
        >
          <template v-slot="{ inputValue, togglePopover }">
            <input
              :value="inputValue"
              @click="togglePopover()"
              type="text"
              class="input__calendar"
            />
          </template>
        </vc-date-picker>
      </section>
    </section>
    <section class="moneybook__list__section">
      <ul>
        <MoneyBookPost
          v-for="moneyBook in moneybookList"
          :key="moneyBook.id"
          :moneyBook="moneyBook"
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
import MoneyBookPost from '@/components/moneybook/MoneyBookPost.vue';
import * as format from 'date-format';
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
    async clickSearchDate() {
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
        this.accountBookList = result;
      }
    },
  },
  async created() {
    this.searchStartDate = format('yyyy.MM.dd', new Date());
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
