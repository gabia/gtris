<template>
  <div id="app">
    <div>
      <!-- Test -->
      <gt-button indicator="danger" invert="true" @click="openAllItems('collapse1')">모두 열기</gt-button>
      <gt-button indicator="danger" invert="true" @click="closeAllItems('collapse1')">모두 닫기</gt-button>
      <br><br>
      <gt-collapse name="collapse1">
        <gt-collapse-item>
          <template #head>제목없음 1</template>
          <template #content>것은 가을로 아스라히 멀듯이, 말 어머니, 부끄러운 별이 까닭입니다. 속의 오는 된 봅니다.</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>제목없음 2</template>
          <template #content>위에도 보고, 시와 까닭입니다. 책상을 이름자 하나에 불러 가득 까닭입니다. 별 같이 옥 않은 둘 노루, 봅니다.</template>
        </gt-collapse-item>
      </gt-collapse>

      
      <gt-checkbox label="item" name="helloworld" @input="$_checkedItem" :checked='false' :disabled='false' > test </gt-checkbox>
      <br>

      <gt-checkbox label="item1" name="helloworld1" :all='allFlag' @input="$_checkedItem"> helloworld1 </gt-checkbox>
      <gt-checkbox label="item2" name="helloworld2" :all='allFlag' @input="$_checkedItem"> helloworld2 </gt-checkbox>
      <gt-checkbox label="item3" name="helloworld3" :all='allFlag' @input="$_checkedItem"> helloworld3 </gt-checkbox>
      <div style="margin-top:30px">
        <gt-button indicator="danger"  @click="()=>{this.allFlag = 'A'}" style="margin-right:20px">모두 체크</gt-button>
        <gt-button indicator="primary" @click="()=>{this.allFlag = 'N'}">모두 해제</gt-button>
      </div>

    </div>
  </div>
</template>

<script>
import gtButton from './components/Button/button'
import gtCollapse from './components/Collapse/Collapse'
import gtCollapseItem from './components/Collapse/CollapseItem'
import gtCheckbox from './components/CheckBox/Checkbox'
//import gtInfinite from './components/Pagination/PaginationInfinite'
//import pagination from './components/Pagination.vue'
//import gttooltip from "./components/tooltip.vue"
//import gtinput from "./components/Input.vue"
export default {
  name: 'app',
  components: {
    gtButton,
    gtCollapse,
    gtCollapseItem,
    gtCheckbox
  },
  directives: {
      //infiniteScroll: gtInfinite
  },
  data() {
    return {
      page : 1,
      scrolling: false,
      height: 0,
      allFlag:'N'
    };
    //gtinput
    //,gttooltip
  },
  methods: {
    $_checkedItem(val){
      console.log(val)
    },
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
