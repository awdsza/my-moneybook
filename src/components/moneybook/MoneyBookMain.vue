<template>
  <div>
    <section>
      <!-- <DatePicker
        :language="ko"
        :format="`yyyy-MM-dd`"
        :value="`2022-07-01`"
        :calendar-button="true"
      />
      ~
      <DatePicker :language="ko" :format="`yyyy-MM-dd`" /> -->
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
    };
  },
  methods: {
    submitMoneyBookPost() {
      console.log('submit');
    },
  },
  created() {
    this.moneybookList = getMoneyBookList(this.$store.state.loginID);
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
