<template>
  <CommonModal
    v-show="open"
    :containerWidth="`300px`"
    :containerHeight="`200px`"
  >
    <template #header>
      <h3>{{ paramCategorySeq ? '카테고리 수정' : '카테고리 등록' }}</h3>
      <a @click="closeModal">닫기</a>
    </template>
    <template #body>
      <CategoryForm
        :paramInOutType="paramInOutType"
        :paramCategorySeq="paramCategorySeq"
        @close="closeModal"
      >
      </CategoryForm>
    </template>
  </CommonModal>
</template>

<script>
import CommonModal from '@/components/common/CommonModal.vue';
import CategoryForm from '@/components/settings/CategoryForm.vue';
export default {
  components: {
    CommonModal,
    CategoryForm,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    paramInOutType: {
      type: String,
    },
    paramCategorySeq: {
      type: Number,
    },
  },
  methods: {
    closeModal(payload) {
      this.$emit('close', payload);
    },
  },
};
</script>

<style></style>
