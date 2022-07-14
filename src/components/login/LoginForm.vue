<template>
  <section class="contents">
    <section class="login__form__section">
      <form @submit.prevent="submitLoginForm">
        <section class="login__form__child__section">
          <input
            type="text"
            id="userID"
            v-model="userID"
            placeholder="ID를 입력하세요"
          />
        </section>
        <section class="login__form__child__section">
          <input
            type="text"
            id="password"
            v-model="password"
            placeholder="비밀번호를 입력하세요"
          />
        </section>
        <section class="login__form__child__section button__section">
          <button type="submit" class="btn">로그인</button>
          <button type="button" class="btn" @click="isOpenModal = true">
            회원가입
          </button>
        </section>
      </form>
    </section>
    <SignupFormView :open="isOpenModal" />
  </section>
</template>

<script>
import SignupFormView from '@/views/login/SignupFormView.vue';
export default {
  components: {
    SignupFormView,
  },
  data() {
    return {
      userID: '',
      password: '',
      isOpenModal: false,
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
.login__form__child__section:nth-last-child(n + 1) {
  margin-bottom: 10px;
}
.button__section button:nth-child(n + 1) {
  margin-left: 5px;
}
</style>
