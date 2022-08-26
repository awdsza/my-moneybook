<template>
  <section class="category__setting__container">
    <section class="category__setting__wrapper">
      <section class="category__header">
        <div></div>
        <h3 class="category__title">{{ getTitle }}</h3>
        <div>
          <a @click="fnOnClickMoveCategoryPage">
            <Icon :icon="'fa-solid fa-plus'" />
          </a>
        </div>
      </section>
      <ul class="category__setting">
        <li v-for="{ code, text } in categories" :key="code">
          <router-link to="/setting">{{ text }}</router-link>
        </li>
      </ul>
    </section>
    <CategoryWritePopupView
      :paramInOutType="inOutType"
      :open="isPopupOpen"
      @close="closeModal"
    />
  </section>
</template>

<script>
import Icon from '@/components/common/Icon.vue';
import CategoryWritePopupView from '@/views/settings/CategoryWritePopupView.vue';
export default {
  components: {
    Icon,
    CategoryWritePopupView,
  },
  methods: {
    async getCategory() {
      //TODO
      // this.categories = await this.$store.dispatch('getCategory', {
      //   inOutType: this.inOutType,
      // });
    },
    fnOnClickMoveCategoryPage() {
      this.isPopupOpen = true;
    },
    closeModal() {
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
