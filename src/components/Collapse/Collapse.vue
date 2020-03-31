<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gt-collapse",
  props: {
    activeIndex: {type: Number, required: false, default: null},
  }
};
</script>

<style lang="scss" scoped>
</style>
