<template>
  <section>
    <form @submit.prevent="submitForm">
      <section class="signup__form__section">
        <input
          type="text"
          ref="categoryName"
          placeholder="카테고리 명을 입력하세요"
        />
      </section>
      <section class="button__section">
        <button type="submit" class="btn">등록</button>
      </section>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    paramInOutType: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    async submitForm() {},
  },
};
</script>

<style scoped>
.button__section {
  text-align: center;
}
.signup__form__section {
  text-align: center;
  margin: 10px 0;
}
</style>
