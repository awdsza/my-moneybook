<template>
  <div>
    <vc-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      v-model="searchMonth"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
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
  </div>
</template>

<script>
import AccountBookCalendarAttribute from '@/components/accountbook/AccountBookCalendarAttribute.vue';
import {
  parseFormatDateString,
  getFirstDate,
  getLastDate,
} from '@/utils/filter';

export default {
  components: {
    AccountBookCalendarAttribute,
  },
  created() {
    this.clickSearchDate();
  },
  methods: {
    async clickSearchDate() {
      const searchStartDate = parseFormatDateString(
        getFirstDate(new Date(this.searchMonth)),
        'yyyy-MM-dd',
      );

      const searchEndDate = parseFormatDateString(
        getLastDate(new Date(this.searchMonth)),
        'yyyy-MM-dd',
      );

      const result = await this.$store.dispatch('getAccountBookList', {
        token: this.$store.state.token,
        searchStartDate,
        searchEndDate,
      });

      if (result) {
        this.attributes = result.map(({ bookTitle: title, bookDate }, key) => ({
          key,
          customData: {
            title,
            class: 'calendar__title__outgoing calendar__title__text',
          },
          dates: parseFormatDateString(new Date(bookDate), 'yyyy.MM.dd'),
        }));
      }
    },
  },
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      searchMonth: new Date(),
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Lunch with mom.',
            class: 'calendar__title__outgoing calendar__title__text',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'calendar__title__outgoing calendar__title__text',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-blue-500 calendar__title__text',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'bg-indigo-500 calendar__title__text',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-teal-500 calendar__title__text',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-pink-500 calendar__title__text',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: 'bg-orange-500 calendar__title__text',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'bg-pink-500 calendar__title__text',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-red-600 calendar__title__text',
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
:root {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
}
.custom-calendar.vc-container {
  border-radius: 0;
  width: 100%;
}
.vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
.vc-weeks {
  padding: 0;
}
.vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}
.vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: var(--day-height);
  min-width: var(--day-width);
  background-color: white;
}
.custom-calendar.vc-container.vc-day.weekday-1,
.custom-calendar.vc-container.vc-day.weekday-7 {
  background-color: #eff8ff;
}
.custom-calendar.vc-container.vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);
}
.custom-calendar.vc-container.vc-day:not(.on-bottom).weekday-1 {
  border-bottom: var(--day-border-highlight);
}
.custom-calendar.vc-container.vc-day:not(.on-right) {
  border-right: var(--day-border);
}
.custom-calendar.vc-container.vc-day-dots {
  margin-bottom: 5px;
}
.calendar__title__outgoing {
  background: #e43123;
}
.calendar__title_income {
  color: #4e32db;
}
.calendar__title__text {
  color: #fff;
  font-weight: 600;
  font-size: 0.7rem;
}
</style>
