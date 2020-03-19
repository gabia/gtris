<template>
  <button
    class="gt-btn"
    :type="type"
    :disabled="disabled"
    :class="[
      indicator? 'gt-btn-'+indicator: '',
      isIcon? 'gt-btn-icon': ''
    ]"
    @click="eventClick"
  >
    <i 
      v-if="type=='icon'"
      class="gis"
      :class="[icon? 'gis gi-'+icon: '']"
    ></i>
    <slot v-else></slot>
  </button>
</template>

<script>
//import common from '@/assets/js/common.js'

export default {
  name: 'gtbutton',
  data() {
    return {
      isOnComposition: false
    }
  },
  props: {    
    type: { type: String, required: false, default: null},
    text: { type: String, required: true },
    disabled: { type: Boolean, required: false, default: false },
    indicator: { type: String, required: false, default: null },
    icon: { type: String, required: false, default: null }/* ,
    pill: {type: String, required: false, default: null },
    float: {type: String, required: false, default: null },
    size: { type: String, required: false, default: null } */
  },
  computed: {
    isIcon() {
      return this.icon? true: false;
    }
  },
  methods: {
    eventClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss">
.gt-btn {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  color: #999;
  background: #fff;
  height: 40px;
  min-width: 50px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  border-radius: 0;
  font-weight: 400;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-sizing: border-box;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  outline: none;

  /* hover */
  &:hover,
  &:focus {
    color: #666;
    background: #f8f8f8;
  }

  /* disabled */
  &:disabled {
    cursor: default;
    opacity: .3;
    background: none;
  }
  &:hover[disabled] {
    color: #999;
  }

  /* outline button */
  &.gt-btn-outline {
    border-color: #ddd;

    &:hover, &:focus {
      border-color: #aaa;
      background-color: #fff;
    }

    &:hover[disabled], &:focus[disabled] {
      border-color: #ddd;
    }
  }

  /* primary */
  &.gt-btn-primary {
    background-color: #2985db;
    border-color: #2985db;
    color: #fff;

    &:hover, &:focus {
      background-color: #056ac9;
      border-color: #056ac9;
      color: #fff;
    }

    &:hover[disabled], &:focus[disabled] {
      background-color: #2985db;
      border-color: #2985db;
      color: #fff;
    }
  }

  /* secondary */
  &.gt-btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;

    &:hover, &:focus {
      background-color: #5a6268;
      border-color: #5a6268;
      color: #fff;
    }

    &:hover[disabled], &:focus[disabled] {
      background-color: #5a6268;
      border-color: #5a6268;
      color: #fff;
    }
  }

  /* danger */
  &.gt-btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;

    &:hover, &:focus {
      background-color: #c82333;
      border-color: #c82333;
      color: #fff;
    }

    &:hover[disabled], &:focus[disabled] {
      background-color: #dc3545;
      border-color: #dc3545;
      color: #fff;
    }
  }

  /* icon button */
  &.gt-btn-icon {
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}


</style>
