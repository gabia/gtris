<template>
  <div v-show="isActive" class="gt-tab-item" :class="customClass">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gt-tab-item",
  props: {
    name: {type: [String, Number], required: true},
    label: {type: String, required: true},
    customClass: {type: String, required: false, default: null}
  },
  computed: {
    isActive() {
      return this.$parent.activeItem === this.name;
    }
  },
  updated() {
    this.$parent.$emit('gt::tab-nav-update');
  }
}
</script>