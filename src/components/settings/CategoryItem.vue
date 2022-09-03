<template>
  <li class="category__item" :ref="'category__item' + category.seq">
    <a v-bind:class="`${handle}`">
      <Icon :icon="'fa-solid fa-sort'" />
    </a>
    <a @click="fnOnClickCategory">
      {{ category.categoryName }}
    </a>
    <a @click="fnOnClickDeleteCategory">
      <Icon :icon="'fa-solid fa-circle-minus'" />
    </a>
  </li>
</template>

<script>
import Icon from '@/components/common/Icon.vue';
export default {
  components: {
    Icon,
  },
  props: {
    category: {
      type: Object,
    },
    handle: {
      type: String,
    },
  },
  methods: {
    async fnOnClickDeleteCategory() {
      if (confirm('삭제하시겠습니까?')) {
        const result = await this.$store.dispatch('deleteCategory', {
          seq: this.category.seq,
        });
        if (!result.isSuccess) {
          alert('삭제에 실패하였습니다.');
          return;
        }
        alert('삭제가 완료되었습니다.');
        this.$emit('reload');
      }
    },
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
