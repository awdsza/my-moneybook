<template>
  <section class="income__setting__container">
    <section class="income__setting__wrapper">
      <ul class="income__setting">
        <li v-for="{ code, text } in categories" :key="code">
          <router-link to="/setting">{{ text }}</router-link>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  methods: {
    async getInComeCategory() {
      //TODO
    },
  },
  data() {
    return {
      inouttype: this.$route.params['inouttype'],
      categories: [
        { code: '001', text: '월급' },
        { code: '002', text: '부수입' },
        { code: '003', text: '용돈' },
        { code: '004', text: '금융소득' },
        { code: '005', text: '용돈' },
      ],
    };
  },
  created() {
    this.getInComeCategory();
  },
};
</script>

<style></style>
