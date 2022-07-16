<template>
  <CommonModal
    v-show="open"
    :containerWidth="`500px`"
    :containerHeight="`600px`"
  >
    <template #header>
      <h3>회원가입</h3>
    </template>
    <template #body>
      <SignupForm @close="closeModal"> </SignupForm>
    </template>
  </CommonModal>
</template>

<script>
import CommonModal from '@/components/common/CommonModal.vue';
import SignupForm from '@/components/login/SignupForm.vue';
export default {
  components: {
    CommonModal,
    SignupForm,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style></style>
