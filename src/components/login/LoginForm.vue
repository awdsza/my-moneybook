<template>
  <section class="login__form__section">
    <form @submit.prevent="submitLoginForm">
      <section class="login__form__id__section">
        <label for="userID">ID: </label>
        <input type="text" id="userID" v-model="userID" />
      </section>
      <section class="login__form__password__section">
        <label for="password">PW: </label>
        <input type="text" id="password" v-model="password" />
      </section>
      <section class="login__form__signup__section">
        <button type="submit">로그인</button>
        <button type="button">회원가입</button>
      </section>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
      password: '',
    };
  },
  methods: {
    submitLoginForm() {
      if (!(this.userID || this.password)) {
        return;
      }
      //로그인처리
      this.$store.state.isLogin = true;
      this.$router.push('/main/list');
    },
  },
};
</script>

<style styled>
.login__form__section {
  text-align: center;
  margin: 10px 0;
}
</style>
