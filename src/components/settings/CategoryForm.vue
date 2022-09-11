<template>
  <section>
    <form @submit.prevent="submitForm">
      <section class="signup__form__section">
        <input
          type="text"
          ref="categoryName"
          v-model="categoryName"
          placeholder="카테고리 명을 입력하세요"
        />
      </section>
      <section class="button__section">
        <button type="submit" class="btn">
          {{ popupTitle }}
        </button>
      </section>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    paramInOutType: {
      type: String,
    },
    paramCategorySeq: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      popupTitle: '등록',
      categoryName: '',
    };
  },
  watch: {
    async paramCategorySeq(newValue, oldValue) {
      if (newValue !== oldValue) {
        const result = await this.$store.dispatch('getCategory', {
          paramCategorySeq: this.paramCategorySeq,
        });
        if (result.categoryName) {
          this.categoryName = result.categoryName;
          this.popupTitle = '수정';
        }
      }
    },
  },
  methods: {
    async submitForm() {
      if (!this.categoryName.trim()) {
        alert('카테고리를 입력하세요');
        return;
      }
      let payload = {
        inOutType: this.paramInOutType,
        categoryName: this.categoryName,
      };
      let actionType = 'saveCategory';
      if (this.paramCategorySeq) {
        actionType = 'updateCategory';
        payload = { ...payload, seq: this.paramCategorySeq };
      }
      const result = await this.$store.dispatch(actionType, payload);
      if (result.isSuccess) {
        alert('성공적으로 완료되었습니다');
        this.$emit('close', { reload: true });
      }
    },
  },
};
</script>

<style scoped>
.button__section {
  text-align: center;
}
.signup__form__section {
  text-align: center;
  margin: 10px 0;
}
</style>
