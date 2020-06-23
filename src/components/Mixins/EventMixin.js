let EventMixin = {
  methods: {
    closeAllCollapseItems(targetName) {
      this.$eventHub.$emit(`gt::closeAll::collapse-${targetName}`);
    },
    openAllCollapseItems(targetName) {
      this.$eventHub.$emit(`gt::openAll::collapse-${targetName}`);
    },
    activateTabItem(targetName) {
      this.$eventHub.$emit('gt::activate::tab-item', targetName);
    }
  }
}

export default EventMixin;