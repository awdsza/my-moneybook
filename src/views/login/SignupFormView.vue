<template>
  <CommonModal v-show="open">
    <template #header>
      <h3>회원가입</h3>
    </template>
    <template #body>
      <SignupForm @close="closeModal"> </SignupForm>
    </template>
    <template #footer>
      <section class="button__section">
        <button type="button" class="btn">회원가입</button>
        <button type="button" class="btn">초기화</button>
        <button type="button" class="btn" @click="closeModal">닫기</button>
      </section>
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
