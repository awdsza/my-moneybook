<template>
  <FontAwesomeIcon :icon="icon" />
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faPlus,
  faList,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faPlus, faList, faCircleInfo);

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: String,
    },
  },
};
</script>

<style></style>
