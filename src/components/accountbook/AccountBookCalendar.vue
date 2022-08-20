<template>
  <div>
    <vc-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      v-model="searchMonth"
      @update:from-page="fnOnClickMonth"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div
          class="flex flex-col h-full z-10 overflow-hidden w-full"
          @click="fnOnClickDay(day)"
        >
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <AccountBookCalendarAttribute
              v-for="attr in attributes"
              :key="attr.key"
              :attr="attr"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
            />
          </div>
        </div>
      </template>
    </vc-calendar>
    <AccountBookCalendarDetailPopup
      :open="isOpenModal"
      @close="isOpenModal = false"
      :paramDate="selectDate"
    />
    <router-link to="/main/write" class="write__button">
      <Icon :icon="'fa-solid fa-plus'" />
    </router-link>
  </div>
</template>

<script>
import AccountBookCalendarAttribute from '@/components/accountbook/AccountBookCalendarAttribute.vue';
import AccountBookCalendarDetailPopup from '@/components/accountbook/AccountBookCalendarDetailPopup.vue';
import Icon from '@/components/common/Icon.vue';
import {
  parseFormatDateString,
  getFirstDate,
  getLastDate,
} from '@/utils/filter';

export default {
  components: {
    AccountBookCalendarAttribute,
    Icon,
    AccountBookCalendarDetailPopup,
  },
  methods: {
    fnOnClickDay({ date }) {
      this.selectDate = date;
      this.isOpenModal = true;
    },
    fnOnClickMonth({ year, month }) {
      this.searchMonth = new Date(year, month - 1, 1);
      this.searchAccountBookList();
    },
    async searchAccountBookList() {
      const searchStartDate = parseFormatDateString(
        getFirstDate(new Date(this.searchMonth)),
        'yyyy-MM-dd',
      );

      const searchEndDate = parseFormatDateString(
        getLastDate(new Date(this.searchMonth)),
        'yyyy-MM-dd',
      );

      const result = await this.$store.dispatch('getAccountBookCalendarList', {
        token: this.$store.state.token,
        searchStartDate,
        searchEndDate,
      });

      if (result) {
        this.attributes = result.map(
          ({ bookDate, inOutType, amount }, key) => ({
            key,
            customData: {
              amount: `${inOutType === 'inCome' ? `+${amount}` : `-${amount}`}`,
              bookDate,
              inOutType,
              class: `${
                inOutType === 'inCome'
                  ? 'calendar__title__income'
                  : 'calendar__title__outgoing'
              }`,
            },
            popover: true,
            dates: new Date(bookDate),
          }),
        );
      }
    },
  },
  data() {
    return {
      searchMonth: new Date(),
      masks: {
        weekdays: 'WWW',
      },
      attributes: [],
      isOpenModal: false,
      selectDate: new Date(),
    };
  },
};
</script>

<style>
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
.scrollbar {
  width: 0px;
}
.scrollbar-track {
  display: none;
}
.custom-calendar.vc-container {
  border-radius: 0;
  width: 100%;
}
.custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
.custom-calendar.vc-container .vc-weeks {
  padding: 0;
}
.custom-calendar.vc-container .vc-weekday {
  background-color: #f8fafc;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  padding: 5px 0;
}
.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: 10vh;
  width: 100%;
  overflow: auto;
  background-color: white;
}
.custom-calendar.vc-container .vc-day.weekday-1,
.custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}
.custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1 {
  border-bottom: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}
.calendar__title__outgoing {
  background: #f15b4f;
}
.calendar__title__income {
  background: #816de4;
}
</style>
