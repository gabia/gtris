<template>
  <input
    ref="input"
    class = "hw-input"
    :value="defaultValue"
    :placeholder = "placeholder"
    :class = "[customClass, size]"
    :style = "{width: width, height: height}"
    :autofocus = autofocus
    @keypress.enter="$_pressEnter"
    @keyup="$_keyup"
  >
</template>

<script>
export default {
  name: "gt-input",  
  watch: {
    defaultValue(newVal) {
      this.$refs.input.value = newVal;
    }
  },
  props: {
    defaultValue: {type: String, required: false, default: ''},
    placeholder: {type: String, required: false, default: ''},
    size: {type: String, required: false, default: ''},
    customClass: { type: String, required: false, default: '' },
    width: { type: String, required: false, default: '' },
    height: { type: String, required: false, default: '' },
    autofocus: { type: Boolean, required: false, default: false },
  },
  methods: {
    $_pressEnter(e) {
      this.$emit('pressEnter', e.target.value);
    },
    $_keyup(e) {
      this.$emit('keyup', e.target.value);
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.hw-input {
  display: inline-block;
  width: 100%;
  min-height: 34px;
  font-size: 14px;
  padding: 0 10px;
  border: 1px solid $input-border;
  transition-duration: .2s;
  box-sizing: border-box;
  &:hover {
    border-color: $input-border-hover;
  }
  &:focus {
    border-color: $input-border-active;
    outline: none;
  }
  &::placeholder {
    color: $input-placeholder;
  }
  &[disabled] {
    background: $input-disabled;
    border-color: $input-border;
    user-select: none;
  }
  &.sm {
    height: 30px;
    min-height: 30px;
  }
  &.lg {
    height: 40px;
  }
}
</style>
