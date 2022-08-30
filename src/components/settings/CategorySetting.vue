<template>
  <section class="category__setting__container">
    <section class="category__setting__wrapper">
      <section class="category__header">
        <div></div>
        <h3 class="category__title">{{ getTitle }}</h3>
        <div>
          <a @click="fnOnClickCeateCategoryPage">
            <Icon :icon="'fa-solid fa-plus'" />
          </a>
        </div>
      </section>
      <ul class="category__setting">
        <CategoryItem
          v-for="paramCategory in categories"
          :key="paramCategory.seq"
          :category="paramCategory"
          @itemClick="fnOnClickMoveCategoryPage"
          @reload="getCategory"
        />
      </ul>
    </section>
    <CategoryWritePopupView
      :paramInOutType="inOutType"
      :paramCategorySeq="selectSeq"
      :open="isPopupOpen"
      @close="closeModal"
    />
  </section>
</template>

<script>
import Icon from '@/components/common/Icon.vue';
import CategoryWritePopupView from '@/views/settings/CategoryWritePopupView.vue';
import CategoryItem from '@/components/settings/CategoryItem.vue';
export default {
  components: {
    Icon,
    CategoryWritePopupView,
    CategoryItem,
  },
  methods: {
    async getCategory() {
      //TODO
      this.categories = await this.$store.dispatch('getCategories', {
        inOutType: this.inOutType,
      });
    },
    fnOnClickCeateCategoryPage() {
      this.selectSeq = 0;
      this.isPopupOpen = true;
    },
    fnOnClickMoveCategoryPage(seq) {
      this.selectSeq = seq;
      this.isPopupOpen = true;
    },
    closeModal(payload) {
      if (payload && payload.reload) {
        this.getCategory();
      }
      this.isPopupOpen = false;
    },
  },
  computed: {
    getTitle() {
      return this.inOutType === 'income' ? '수입' : '지출';
    },
  },
  data() {
    return {
      inOutType: '',
      selectSeq: 0,
      categories: [],
      isPopupOpen: false,
    };
  },
  created() {
    this.inOutType = this.$route.params['inouttype'];
    this.getCategory();
  },
};
</script>

<style scoped>
.category__header {
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #8d39a3;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}
.category__title {
  display: block;
}
</style>
