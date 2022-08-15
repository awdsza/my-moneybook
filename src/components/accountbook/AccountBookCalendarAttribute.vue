<template>
  <p
    class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
    :class="attr.customData.class"
  >
    {{ attr.customData.title }}
  </p>
</template>

<script>
export default {
  props: {
    attr: {
      type: Object,
    },
  },
};
</script>

<style></style>
