<template>
  <div>
    <section class="search__section">
      <section class="search__date__section">
        <select v-model="searchYear" @change="fnOnChangeDate">
          <option v-for="year in yearArray" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
        <select v-model="searchMonth" @change="fnOnChangeDate">
          <option v-for="month in monthArray" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
      </section>
    </section>
    <section>
      <ul>
        <AccountBookWeekPost
          v-for="accountBook in accountBookWeekList"
          :key="accountBook.id"
          :accountBook="accountBook"
          @clickPost="fnOnClickPost"
        />
      </ul>
      <AccountBookWeekDetailPopup
        :open="isOpenModal"
        @close="isOpenModal = false"
        :paramDateRange="paramDateRange"
      />
    </section>
    <router-link to="/main/write" class="write__button">
      <Icon :icon="'fa-solid fa-plus'" />
    </router-link>
  </div>
</template>

<script>
import AccountBookWeekDetailPopup from '@/components/accountbook/AccountBookWeekDetailPopup.vue';
import AccountBookWeekPost from './AccountBookWeekPost.vue';
import Icon from '@/components/common/Icon.vue';
import { getSyncDateTimeFromCookie } from '@/utils/cookies';
import {
  parseFormatDateString,
  getFirstDate,
  getLastDate,
} from '@/utils/filter';
export default {
  components: {
    Icon,
    AccountBookWeekPost,
    AccountBookWeekDetailPopup,
  },
  data() {
    return {
      accountBookWeekList: [],
      yearArray: [],
      monthArray: [],
      searchYear: '',
      searchMonth: '',
      isOpenModal: false,
      paramDateRange: '',
    };
  },
  methods: {
    fnOnClickPost(bookDateRange) {
      this.paramDateRange = bookDateRange;
      this.isOpenModal = true;
    },
    async fnOnChangeDate() {
      const searchStartDate = parseFormatDateString(
        getFirstDate(new Date(this.searchYear, Number(this.searchMonth) - 1)),
        'yyyy-MM-dd',
      );
      const searchEndDate = parseFormatDateString(
        getLastDate(new Date(this.searchYear, Number(this.searchMonth) - 1)),
        'yyyy-MM-dd',
      );
      this.accountBookWeekList = await this.$store.dispatch(
        'getAccountBookWeekList',
        { searchStartDate, searchEndDate },
      );
    },
  },
  created() {
    const synsDateTime = Number(getSyncDateTimeFromCookie());
    const syncDateTimeYear = new Date(synsDateTime).getFullYear();
    const syncDateTimeMonth = new Date(synsDateTime).getMonth() + 1;
    for (let i = 50; i >= 0; i--) {
      this.yearArray = [...this.yearArray, syncDateTimeYear + i];
    }
    for (let i = 1; i < 50; i++) {
      this.yearArray = [...this.yearArray, syncDateTimeYear - i];
    }
    for (let i = 1; i <= 12; i++) {
      this.monthArray.push(`${i < 10 ? `0${i}` : i}`);
    }
    this.searchYear = syncDateTimeYear;
    this.searchMonth = `${
      syncDateTimeMonth < 10 ? `0${syncDateTimeMonth}` : syncDateTimeMonth
    }`;
    this.fnOnChangeDate();
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
</style>
