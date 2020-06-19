<template>
  <div :class="customClass">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gt-collapse",
  data() {
    return {
      activeItems: [],
      collapseName: this.name || `gt-collapse-${Math.random().toString(36).substr(2, 8)}`  // props로 name을 지정하지 않은 경우 랜덤 생성
    }
  },
  props: {
    name: {type: [String, Number], required: false, default: null},
    accordion: {type: Boolean, required: false, default: false},
    arrowPositionLeft: { type: Boolean, default: false },
    init: {type: String, required: false, default: null},
    opened: {type: Function, required: false, default: null},
    closed: {type: Function, required: false, default: null},
    customClass: {type: String, required: false, default: null}
  },
  mounted() {
    // initialize child
    if(this.init) {
      this.activeItems.push(this.init);
    }
    // event handling
    this.$on('gt::opened::collapse-item', (payload) => {
      this.opened && this.opened(payload);
    });
    this.$on('gt::closed::collapse-item', (payload) => {
      this.closed && this.closed(payload);
    });
    this.$eventHub.$on(`gt::closeAll::collapse-${this.collapseName}`, () => {
      this.activeItems = [];
    })
    this.$eventHub.$on(`gt::openAll::collapse-${this.collapseName}`, () => {
      this.$children.forEach(child => {
        if(this.activeItems.indexOf(child.itemName) === -1) {
          this.activeItems.push(child.itemName);
        }
      })
    })
  }
};
</script>
