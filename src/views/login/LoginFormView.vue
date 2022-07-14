<template>
  <section class="login__section">
    <section class="title__section">
      <h1 class="login__title">My Money Book</h1>
    </section>
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.title__section {
  padding: 5% 0;
}
.login__section {
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
  padding: 5% 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #f7f6f9;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}
</style>
