<template>
  <section v-show="open">
    <SignupForm> </SignupForm>
  </section>
</template>

<script>
import SignupForm from '@/components/login/SignupForm.vue';
export default {
  components: {
    SignupForm,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
