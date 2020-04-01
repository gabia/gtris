<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gt-collapse",
  data() {
    return {
      activeItems: []
    }
  },
  props: {
    accordion: {type: Boolean, required: false, default: false},
    init: {type: String, required: false, default: null},
    opened: {type: Function, required: false, default: null},
    closed: {type: Function, required: false, default: null}
  },
  mounted() {
    // initialize activate child
    if(this.init) {
      this.activeItems.push(this.init);
    }
    // event handling
    this.$on('gt::opend::collapse', (payload) => {
      this.opened && this.opened(payload);
    });
    this.$on('gt::closed::collapse', (payload) => {
      this.closed && this.closed(payload);
    });
  }
};
</script>
