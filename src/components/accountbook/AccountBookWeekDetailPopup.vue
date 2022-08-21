<template>
  <CommonModal
    v-show="open"
    :containerWidth="`400px`"
    :containerHeight="`600px`"
  >
    <template #header>
      <h3>{{ paramDateRange }}</h3>
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
    paramDateRange: {
      type: String,
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
        const [searchStartDate, searchEndDate] = this.paramDateRange.split('-');
        const result = await this.$store.dispatch('getAccountBookList', {
          searchStartDate,
          searchEndDate,
        });
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
