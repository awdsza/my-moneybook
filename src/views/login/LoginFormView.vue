<template>
  <section class="login__section">
    <h1 class="login__title">My Money Book</h1>
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
.login__section {
  margin: 0 auto;
  width: 50%;
  border: 1px solid #0e0e0e;
  padding: 1% 10px 10px 1%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
