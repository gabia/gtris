let CollapseMixin = {
  methods: {
    closeAllItems(targetName) {
      this.$eventHub.$emit(`gt::closeAll::collapse-${targetName}`);
    },
    openAllItems(targetName) {
      this.$eventHub.$emit(`gt::openAll::collapse-${targetName}`);
    },
  }
}

export default CollapseMixin;