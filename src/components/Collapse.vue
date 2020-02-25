<template>
  <div class="gt-collapse-item" :class="userCustomClassName">
    <div class="gt-collapse-head" :class="headActiveClass" @click="toggleShowing">{{title}}</div>
    <div v-show="isShowing" class="gt-collapse-body" v-html="content"></div>
  </div>
</template>

<script>
import Toggle from "./mixin/Toggle";

export default {
  name: "gt-collapse",
  mixins: [Toggle],
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    accordion: { type: Boolean, required: false, default: false },
    customClassName: {type: String, required: false, default: null },
    id: {type: String, required: false, default: null}
  },
  updated() {
      if(this.isShowing) {
        this.$emit(`collapse-opened`, this.id);
      } else {
        this.$emit(`collapse-closed`, this.id);
      }
    },
  computed: {
    userCustomClassName() {
      return this.customClassName || null;
    },
    headActiveClass() {
      return this.isShowing ? "collapse-active" : null;
    },
  }
};
</script>

<style lang="scss" scoped>
.gt-collapse-item {
  color: #333;
  line-height: 1.5;
  border: 1px solid #e5e5e5;
  & + .gt-collapse-item {
    border-top: 0;
  }
  
}

.gt-collapse-head,
.gt-collapse-body {
  padding: 1em;
}

.gt-collapse-head {
  background-color: #fff;
  cursor: pointer;
  &.collapse-active {
    background-color: #333;
    color: #fff;
    font-weight: bold;
  }
}

.gt-collapse-body {
  border-top: 0;
}
</style>
