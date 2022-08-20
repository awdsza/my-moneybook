<template>
  <p
    class="calendar__memo calendar__title__text"
    :class="attr.customData.class"
  >
    {{ attr.customData.amount }}
  </p>
</template>

<script>
export default {
  components: {},
  props: {
    attr: {
      type: Object,
    },
  },

  methods: {
    closeModal() {
      this.isOpenModal = false;
    },
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
};
</script>

<style scoped>
.calendar__memo {
  padding: 0.25rem;
  margin: 0 0 0.25rem 0;
  font-size: 0.5rem;
  border-radius: 0.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
.calendar__title__text {
  display: inline-block;
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 0.7rem;
}
.calendar__memo:nth-child(1) {
  margin-top: 0.25rem;
}
</style>
