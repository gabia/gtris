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
      navData: [],
      tabName: this.name || `gt-tab-${Math.random().toString(36).substr(2, 8)}`  // props로 name을 지정하지 않은 경우 랜덤 생성
    }
  },
  props: {
    name: {type: [String, Number], required: false, default: null},
    init: {type: String, required: false, default: null},
    customClass: {type: String, required: false, default: null}
  },
  mounted() {
    this.$_setTabNav();

    // initialize
    if(this.init) {
      this.activeItem = this.init;
    }
    // event handling
    this.$on('gt::selected::tab-nav', (payload) => {
      this.activeItem = payload;
    });
    this.$on('gt::tab-nav-update', this.$_setTabNav);
  },
  methods: {
    $_setTabNav() {
      if (this.$slots.default) {
        this.navData = [];
        this.$slots.default.forEach(tabItem => {
          this.navData.push({
            'label': tabItem.componentInstance.label,
            'name': tabItem.componentInstance.name
          });
        });
      }
    },
  }
}
</script>