<template>
  <div class="gt-collapse-item" :class="userCustomClassName">
    <div class="gt-collapse-head" :class="headActiveClass" @click="toggleShowing">
      <p class="title">{{title}}</p>
      <i v-show="isShowing" class="gi gi-short-arrow-down-alt"/>
      <i v-show="!isShowing" class="gi gi-short-arrow-up-alt"/>
    </div>
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
      return this.isShowing ? "active" : null;
    },
  }
};
</script>

<style lang="scss" scoped>
.gt-collapse-item {
  color: #333;
  line-height: 1.5;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .title {
    flex: 1 1 0;
    -ms-flex: 1 1 auto;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.gt-collapse-body {
  border-top: 0;
}
</style>
