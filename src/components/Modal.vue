<template>
  <div v-show="isShowing" ref="modalRoot">
    <div class="gt-modal-wrapper">
      <div class="gt-modal" :class="customClass" :style="{width: width}">
        <div class="gt-modal-head" v-if="hasTitle">
          <slot name="head"/>
        </div>
        <div class="gt-modal-body">
          <slot name="body"/>
        </div>
        <div class="gt-modal-foot">
          <slot name="foot"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-modal",
  data() {
    return {
      isShowing: false
    }
  },
  props: {
    name: {type: [String, Number], required: true},
    customClass: {type: String, required: false, default: null},
    width: {type: String, required: false, default: '700px'}
  },
  computed: {
    hasTitle() {
      return this.$slots.head;
    },
  },
  created() {
    this.$eventHub.$on(`gt::opened::modal-${this.name}`, this.$_open);
    this.$eventHub.$on(`gt::closed::modal-${this.name}`, this.$_close);
  },
  destroyed() {
    this.$eventHub.$off(`gt::opened::modal-${this.name}`, this.$_open);
    this.$eventHub.$off(`gt::closed::modal-${this.name}`, this.$_close);
  },
  methods: {
    $_open() {
      this.isShowing = true;
      this.$_createBackdrop();
    },
    $_close() {
      let backdrop = document.getElementById(`gt_modal_backdroup_${this.name}`);
      backdrop.parentNode.removeChild(backdrop);
      Object.assign(this.$data, this.$options.data());
    },
    $_createBackdrop() {
      let backdrop = document.createElement("div");
      backdrop.setAttribute("id", `gt_modal_backdroup_${this.name}`);
      backdrop.setAttribute("class", "gt-modal-backdrop");
      backdrop.setAttribute("style", "position: fixed; left: 0; top: 0; width: 100%; height: 100%; opacity: 0.5; background: #000; z-index: 5000;");
      backdrop.addEventListener('click', this.$_close, false);
      this.$refs.modalRoot.appendChild(backdrop);
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.gt-modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0;
  z-index: 5001;
  text-align: center;

  &:before {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
    width: 0;
  }
}
.gt-modal {
  display: inline-block;
  vertical-align: middle;
  margin: 5vh auto;
  padding: 1rem;
  border: 1px solid $modal-border;
  background: #fff;
  color: $modal-font;
  text-align: left;
}
.gt-modal-head {
  padding-bottom: 1em;
  border-bottom: 1px solid $modal-border;
}
.gt-modal-body {
  padding: 1em 0;
}
.gt-modal-foot {
  text-align: center;
  padding-bottom: 1em;
  .gt-btn + .gt-btn {
    margin-left: 10px;
  }
}
</style>