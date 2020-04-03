<template>
  <div class="gt-collapse-item" :class="{'active': isShowing}">
    <div class="gt-collapse-head" @click="$_toggle">
      <slot name="head"/>
      <i v-show="isShowing" class="gi gi-short-arrow-up-alt"/>
      <i v-show="!isShowing" class="gi gi-short-arrow-down-alt"/>
    </div>
    <div v-show="isShowing" class="gt-collapse-body">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-collapse-item",
  data() {
    return {
      id: this.name || `gt-collapse-item-${Math.random().toString(36).substr(2, 8)}`
    }
  },
  props: {
    name: {type: [String, Number], required: false, default: null}
  },
  computed: {
    isShowing() {
      return this.activeItems.indexOf(this.id) !== -1;
    },
    parent() {
      return this.$parent;
    },
    activeItems() {
      return this.parent.activeItems;
    },
  },
  methods: {
    $_toggle() {
      const index = this.activeItems.indexOf(this.id);
      // accordion
      if(this.parent.accordion) {
        if(index !== -1) {
          this.activeItems.splice(index, 1);
        } else {
          this.activeItems.splice(index, 1, this.id);
        }
      }
      // default
      else {
        if(index !== -1) {
          this.activeItems.splice(index, 1);
        } else {
          this.activeItems.push(this.id);
        }
      }
      
    }
  },
  watch: {
    isShowing(newValue, oldValue) {
      if(newValue != oldValue) {
        if(this.isShowing) {
          this.parent.$emit('gt::opened::collapse', this.id);
        }
        else {
          this.parent.$emit('gt::closed::collapse', this.id);
        }
      }
    }
    
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

  &.active > .gt-collapse-head {
    background-color: $background-active-gray;
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