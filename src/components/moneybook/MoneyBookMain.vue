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
    </section>
    <section></section>
    <section></section>
  </div>
</template>

<script>
export default {
  components: {},
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
