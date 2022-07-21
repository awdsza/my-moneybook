<template>
  <div>
    <section>
      Hello Main
      <!-- <DatePicker
        :language="ko"
        :format="`yyyy-MM-dd`"
        :value="`2022-07-01`"
        :calendar-button="true"
      />
      ~
      <DatePicker :language="ko" :format="`yyyy-MM-dd`" /> -->
      <router-link to="/main/write" class="write__button">
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </router-link>
    </section>
    <section></section>
    <section></section>
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

export default {
  components: { FontAwesomeIcon },
  data() {
    return {};
  },
  methods: {
    submitMoneyBookPost() {
      console.log('submit');
    },
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
