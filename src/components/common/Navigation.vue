<template>
  <nav class="nav__section">
    <div class="nav__item">
      <router-link to="/main/list"
        ><FontAwesomeIcon icon="fa-solid fa-list"
      /></router-link>
    </div>
    <div class="nav__item">
      <router-link to="/main/info"
        ><FontAwesomeIcon icon="fa-solid fa-circle-info"
      /></router-link>
    </div>
  </nav>
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faList, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faList, faCircleInfo);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.nav__section {
  position: absolute;
  border-top: 2px solid grey;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100%;
  height: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
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
.nav__item .active {
  background-color: azure;
}
.nav__item a {
  display: block;
}
</style>
