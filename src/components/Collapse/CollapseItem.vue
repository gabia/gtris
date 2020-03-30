<template>
  <div class="gt-collapse-item">
    <div class="gt-collapse-head" :class="headActiveClass" @click="toggleShowing">
      <slot/>
      <template v-if="true">
        <i v-show="isShowing" class="gi gi-short-arrow-up-alt"/>
        <i v-show="!isShowing" class="gi gi-short-arrow-down-alt"/>
      </template>
    </div>
    <div v-show="isShowing"  class="gt-collapse-body">
      <slot name="content"/>
      <!-- nested -->
      <!-- <slot v-if="Object.keys(this.$slots).length" name="collapse-body" v-html="content"></slot>
      <template v-else>{{content}}</template> -->
    </div>
  </div>
</template>

<script>
import Toggle from "@/components/mixin/Toggle";
export default {
  name: "gt-collapse-item",
  mixins: [Toggle],
  computed: {
    headActiveClass() {
      return this.isShowing ? "active" : null;
    },
  }
}
</script>

<style lang="scss" scoped>
.gt-collapse-item {
  color: #333;
  line-height: 1.5;
  border-top: 1px solid $collapse-border;
  border-bottom: 1px solid $collapse-border;
  & + .gt-collapse-item {
    border-top: 0;
  }
  
}

.gt-collapse-head,
.gt-collapse-body {
  padding: 1em;
}

.gt-collapse-head {
  background-color: $background-normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &.active {
    background-color: $background-active-gray;
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