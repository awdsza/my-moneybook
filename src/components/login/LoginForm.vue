<template>
  <div>
    <section class="contents">
      <section class="login__form__section">
        <form @submit.prevent="submitLoginForm">
          <section class="login__form__child__section">
            <input
              type="text"
              id="userId"
              v-model="userId"
              ref="userId"
              placeholder="ID를 입력하세요"
            />
          </section>
          <section class="login__form__child__section">
            <input
              type="password"
              id="password"
              v-model="password"
              ref="password"
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
    </section>
    <SignupFormView :open="isOpenModal" @close="closeModal" />
  </div>
</template>

<script>
import SignupFormView from '@/views/login/SignupFormView.vue';
import { validateEmail } from '@/utils/validation';
export default {
  components: {
    SignupFormView,
  },
  data() {
    return {
      userId: '',
      password: '',
      isOpenModal: false,
    };
  },
  methods: {
    closeModal() {
      this.isOpenModal = false;
    },
    async submitLoginForm() {
      if (!this.userId) {
        alert('ID를 입력하세요');
        this.$refs.userId.focus();
        return;
      } else if (!validateEmail(this.userId)) {
        alert('ID는 이메일 형식을 이용합니다. 이메일을 입력해주세요');
        this.$refs.userId.focus();
        return;
      } else if (!this.password) {
        alert('비밀번호를 입력하세요');
        this.$refs.password.focus();
        return;
      }
      const result = await this.$store.dispatch('loginUser', {
        userId: this.userId,
        password: this.password,
      });
      if (result.statusCode) {
        alert(result.message);
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
</style>
