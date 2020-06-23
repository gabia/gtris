<template>
  <div v-show="isActive" class="gt-tab-item" :class="customClass">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gt-tab-item",
  data() {
    return {
      tabItemName: this.name || `gt-tab-item-${Math.random().toString(36).substr(2, 8)}`  // props로 name을 지정하지 않은 경우 랜덤 생성
    }
  },
  props: {
    name: {type: [String, Number], required: false, default: null},
    label: {type: [String, Number], required: true},
    customClass: {type: String, required: false, default: null}
  },
  computed: {
    isActive() {
      return this.$parent.activeItem === this.tabItemName;
    }
  },
  updated() {
    this.$parent.$emit('gt::tab-nav-update');
  }
}
</script>