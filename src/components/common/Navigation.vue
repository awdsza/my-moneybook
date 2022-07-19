<template>
  <nav class="nav__section">
    <ul class="nav__ul__section">
      <li>
        <router-link to="/main/list"
          ><FontAwesomeIcon icon="fa-solid fa-list"
        /></router-link>
      </li>
      <li>
        <router-link to="/main/write"
          ><FontAwesomeIcon icon="fa-solid fa-file-pen"
        /></router-link>
      </li>
      <li>
        <router-link to="/main/info"
          ><FontAwesomeIcon icon="fa-solid fa-circle-info"
        /></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faList,
  faFilePen,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faList, faFilePen, faCircleInfo);

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
}
.nav__ul__section li {
  float: left;
  width: 33%;
  height: 3rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
