<template>
  <div class="gt-tab" :class="customClass">
    <tab-nav :navData="navData">tab-nav</tab-nav>
    <slot/>
  </div>
</template>

<script>
import TabNav from './TabNav';
export default {
  name: "gt-tab",
  components: {
    TabNav
  },
  data() {
    return {
      activeItem: '',
      navData: []
    }
  },
  props: {
    init: {type: String, required: false, default: null},
    customClass: {type: String, required: false, default: null}
  },
  mounted() {
    this.$_setTabNav();

    // initialize
    this.activeItem = this.init && this.$_isValidateName(this.init) ? this.init : this.navData[0].name;

    // event handling
    this.$on('gt::selected::tab-nav', payload => {
      this.activeItem = payload;
    });
    this.$eventHub.$on('gt::activate::tab-item', payload => {
      this.activeItem = payload;
    });
    this.$on('gt::tab-item-update', this.$_setTabNav);
  },
  methods: {
    $_setTabNav() {
      if (this.$slots.default) {
        this.navData = [];
        this.$slots.default.forEach(tabItem => {
          if(tabItem.componentInstance) {
            this.navData.push({
              'label': tabItem.componentInstance.label,
              'name': tabItem.componentInstance.tabItemName
            });
          }
        });
      }
    },
    $_isValidateName(name) {
      return this.navData.find(nav => nav.name === name) ? true: false;
    }
  }
}
</script>