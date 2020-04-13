<template>
  <div class="gt-modal" :class="customClass" v-show="isShowing">
    <div class="gt-modal-head" v-if="hasTitle">
      <slot name="head"/>
    </div>
    <div class="gt-modal-body">
      <slot name="body"/>
    </div>
    <div class="gt-modal-foot">
      <slot name="foot">
        <gtbutton @click="$_close" indicator="secondary">취소</gtbutton>
        <gtbutton @click="$_close" indicator="primary">확인</gtbutton>
      </slot>
    </div>
  </div>
</template>

<script>
import gtbutton from './button.vue'
export default {
  name: "gt-modal",
  components: {
    gtbutton
  },
  data() {
    return {
      isShowing: true,
      id: this.name || `gt-modal-${Math.random().toString(36).substr(2, 8)}`
    }
  },
  props: {
    name: {type: [String, Number], required: false, default: null},
    customClass: {type: String, required: false, default: null}
  },
  computed: {
    hasTitle() {
      return this.$slots.head;
    },
  },
  methods: {
    $_open() {
      this.isShowing = true;
      this.$parent.$emit('gt::opened::modal', this.id);
    },
    $_close() {
      this.isShowing = false;
      this.$parent.$emit('gt::closed::modal', this.id);
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.gt-modal-head,
.gt-modal-body {
  padding: 1em;
}
.gt-modal-head {
  border-bottom: 1px solid $modal-border;
}
.gt-modal-body {

}
.gt-modal-foot {
  text-align: center;
  .gt-btn + .gt-btn {
    margin-left: 10px;
  }
}
</style>