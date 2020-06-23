<template>
  <div class="tab-nav-list" :class="customClass">
    <button v-for="nav in navData" :key="`{gt-tab-nav-${nav.name}}`" type="button" @click="$_selectedNav(nav.name)" class="gt-tab-nav" :class="{'active': $_isActive(nav.name)}">{{nav.label}}</button>
  </div>
</template>

<script>
export default {
  name: "gt-tab-nav",
  data() {
    return {
      activeItem: null,
    }
  },
  props: {
    navData: {type: Array, required: true},
    customClass: {type: String, required: false, default: null}
  },
  methods: {
    $_isActive(navName) {
      return this.$parent.activeItem === navName;
    },
    $_selectedNav(navName) {
      this.$parent.$emit('gt::selected::tab-nav', navName);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/base/_reset.scss';
$TAB_BORDER_SIZE: 2px;
$TAB_HEIGHT: 40px;

.tab-nav-list {
  border-bottom: $TAB_BORDER_SIZE solid $tab-border;
}
.gt-tab-nav {
  font-size: 15px;
  color: $tab-font;
  background: $tab-bg;
  height: $TAB_HEIGHT;
  line-height: $TAB_HEIGHT - 2px;
  min-width: 110px;
  width: 110px;
  outline: none;
  position: relative;
  top: $TAB_BORDER_SIZE;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: $TAB_BORDER_SIZE;
    background-color: $tab-border;
  }
  &.active:after {
    background-color: $tab-border-active;
  }
  &:hover {
    color: $tab-font-active;
  }
}

</style>