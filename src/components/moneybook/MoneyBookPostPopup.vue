<template>
  <section v-if="open">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
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
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitMoneyBookPost() {
      this.$emit('onMoneyBookPostSubmit');
    },
  },
};
</script>

<style></style>
