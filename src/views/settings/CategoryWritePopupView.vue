<template>
  <CommonModal
    v-show="open"
    :containerWidth="`300px`"
    :containerHeight="`200px`"
  >
    <template #header>
      <h3>등록</h3>
      <a @click="closeModal">닫기</a>
    </template>
    <template #body>
      <CategoryWriteForm :paramInOutType="paramInOutType" @close="closeModal">
      </CategoryWriteForm>
    </template>
  </CommonModal>
</template>

<script>
import CommonModal from '@/components/common/CommonModal.vue';
import CategoryWriteForm from '@/components/settings/CategoryWriteForm.vue';
export default {
  components: {
    CommonModal,
    CategoryWriteForm,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    paramInOutType: {
      type: String,
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
