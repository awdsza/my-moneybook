<template>
  <li class="category__item" @click="fnOnClickCategory">
    {{ category.categoryName }}
  </li>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
  methods: {
    fnOnClickCategory() {
      this.$emit('itemClick', this.category.seq);
    },
  },
};
</script>

<style scoped>
.category__item {
  position: relative;
  flex-grow: 1;
  width: 100%;
  height: 3rem;
  margin: 7px 0;
  padding: 10px 20px;
  background: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>
