<template>
  <section>
    <form @submit.prevent="submitForm">
      <section class="signup__form__section">
        <input
          type="text"
          ref="userID"
          v-model="userID"
          placeholder="ID를 입력하세요"
        />
      </section>
      <section class="signup__form__section">
        <input
          type="password"
          ref="password"
          v-model="password"
          placeholder="비밀번호를 입력하세요"
        />
      </section>
      <section class="signup__form__section">
        <input
          type="password"
          ref="rePassword"
          v-model="rePassword"
          placeholder="비밀번호를 한번더 입력하세요"
        />
      </section>
      <section class="button__section">
        <button type="submit" class="btn">회원가입</button>
        <button type="reset" class="btn" ref="resetBtn">초기화</button>
        <button type="button" class="btn" @click="closeModal">닫기</button>
      </section>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      userID: '',
      password: '',
      rePassword: '',
    };
  },
  methods: {
    submitForm() {
      if (!this.userID) {
        alert('ID를 입력해주세요');
        this.$refs.userID.focus();
        return;
      }
      if (!this.password || !this.rePassword) {
        alert('비밀번호를 입력해주세요');
        return;
      }
      if (this.password !== this.rePassword) {
        alert('비밀번호가 일치하지않습니다');
        this.$refs.rePassword.focus();
        return;
      }
      alert('회원가입이 완료되었습니다');
      this.$refs.resetBtn.click();
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
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
