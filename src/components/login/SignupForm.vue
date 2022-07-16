<template>
  <section>
    <form @submit.prevent="submitForm">
      <section>
        <input
          type="text"
          id="userID"
          v-model="userID"
          placeholder="ID를 입력하세요"
        />
      </section>
      <section>
        <input
          type="text"
          id="password"
          v-model="password"
          placeholder="비밀번호를 입력하세요"
        />
      </section>
      <section>
        <input
          type="text"
          id="rePassword"
          v-model="rePassword"
          placeholder="비밀번호를 한번더 입력하세요"
        />
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
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style></style>
