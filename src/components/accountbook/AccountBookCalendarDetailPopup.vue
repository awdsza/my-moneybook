<template>
  <CommonModal
    v-show="open"
    :containerWidth="`400px`"
    :containerHeight="`600px`"
  >
    <template #header>
      <h3>{{ selectedDate }}</h3>
      <div>
        <a @click="closeModal">닫기</a>
      </div>
    </template>
    <template #body>
      <ul>
        <AccountBookPost
          v-for="accountBook in accountBookList"
          :key="accountBook.id"
          :accountBook="accountBook"
        />
      </ul>
    </template>
  </CommonModal>
</template>

<script>
import AccountBookPost from '@/components/accountbook/AccountBookPost.vue';
import CommonModal from '@/components/common/CommonModal.vue';
import { parseFormatDateString } from '@/utils/filter';
export default {
  components: {
    CommonModal,
    AccountBookPost,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    paramDate: {
      type: Date,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
  watch: {
    async open(newValue, oldValue) {
      if (newValue) {
        this.selectedDate = parseFormatDateString(this.paramDate, 'yyyy.MM.dd');
        const result = await this.$store.dispatch(
          'getAccountBookCalendarDetail',
          {
            bookDate: parseFormatDateString(this.paramDate, 'yyyyMMdd'),
          },
        );
        this.accountBookList = result;
      }
    },
  },
  async created() {
    // const { bookDate, inOut } = this.calendarData;
  },
  data() {
    return {
      selectedDate: '',
      accountBookList: [],
    };
  },
};
</script>

<style></style>
