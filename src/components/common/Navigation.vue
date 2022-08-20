<template>
  <nav class="nav__section">
    <div class="nav__item active">
      <router-link to="/main/list"
        ><Icon :icon="'fa-solid fa-list'"
      /></router-link>
    </div>
    <div class="nav__item">
      <router-link to="/main/info"
        ><Icon :icon="'fa-solid fa-circle-info'"
      /></router-link>
    </div>
  </nav>
</template>

<script>
/* import the fontawesome core */
import Icon from '@/components/common/Icon.vue';
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.nav__section {
  position: fixed;
  border-top: 2px solid grey;
  left: 0;
  right: 0;
  bottom: 0;
  top: 96%;
  height: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  z-index: 9999;
}
.nav__section div {
  width: 50%;
  height: 3rem;
  box-sizing: border-box;
  line-height: 3rem;
  text-align: center;
}
.nav__item {
  width: 100%;
  background-color: #8d39a3;
}
.nav__item.active {
  background-color: azure;
}
.nav__item a {
  display: block;
}
</style>
