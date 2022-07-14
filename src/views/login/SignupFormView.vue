<template><SignupForm v-show="open"></SignupForm></template>

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
