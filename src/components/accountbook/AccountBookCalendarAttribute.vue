<template>
  <p class="calendar__memo" :class="attr.customData.class">
    {{ attr.customData.amount }}
  </p>
</template>

<script>
export default {
  props: {
    attr: {
      type: Object,
    },
  },

  methods: {
    fnOnClickAttribute() {},
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
  color: #fff;
  font-weight: 600;
  font-size: 0.7rem;
}
.calendar__memo:nth-child(1) {
  margin-top: 0.25rem;
}
</style>
