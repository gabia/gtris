<template>
  <div id="app">
    <div>
      <!-- Test -->
      <gt-button indicator="danger" invert="true">버튼(Primary)</gt-button>
    </div>
  </div>
</template>

<script>
import gtButton from './components/Button/button'
//import gtInfinite from './components/Pagination/PaginationInfinite'
//import pagination from './components/Pagination.vue'
//import gttooltip from "./components/tooltip.vue"
//import gtinput from "./components/Input.vue"
export default {
  name: 'app',
  components: {
    gtButton,
  },
  directives: {
      //infiniteScroll: gtInfinite
  },
  data() {
    return {
      page : 1,
      scrolling: false,
      height: 0
    };
    //gtinput
    //,gttooltip
  },
  methods: {
    doScroll: function() {
        var self = this;
        var scrollHeight = 100;
        self.scrolling = true;
        setTimeout(function () {
          var app = document.querySelector('#app_box');
          var elHeight = app.clientHeight;
          app.style.height = elHeight + scrollHeight + 'px';
          self.scrolling = false
          self.height = app.style.height
        }, 2000)
      }
  }
}
</script>
