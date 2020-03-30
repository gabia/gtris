<template>
  <div class="gt-collapse-item" :class="customClassName">
    <slot/>
  </div>
</template>

<script>
import Toggle from "@/components/mixin/Toggle";
// import gtCollapseItem from "./CollapseItem";

export default {
  name: "gt-collapse",
  mixins: [Toggle],
  props: {
    accordion: { type: Boolean, required: false, default: false },
    customClassName: {type: String, required: false, default: null },
  }
  // components: {
  //   gtCollapseItem
  // }
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
  &.active {
    background-color: #eee;
  }

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
