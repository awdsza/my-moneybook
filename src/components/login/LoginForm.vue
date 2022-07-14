<template>
  <form @submit.prevent="submitLoginForm">
    <label for="userID">ID: </label>
    <input type="text" id="userID" v-model="userID" />
    <label for="password">PW: </label>
    <input type="text" id="password" v-model="password" />
    <button type="submit">로그인</button>
  </form>
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

<style></style>
