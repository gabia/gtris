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
  },
  mounted() {
    if(this.init) {
      this.activeItems.push(this.init);
    }
  }
};
</script>
