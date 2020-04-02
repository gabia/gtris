<template>
  <div id="app">
    <div>

      <!-- gttooltip 예시 -->
      <!--
      <div style="position: absolute;left: 500px; top: 400px;">
        <table style="width: 500px;">
          <tr>
            <td>
              <gttooltip v-bind="{position:'bottom', message:'gabia' }" >
                <p style="background: red; padding:5px 10px;">bottom</p>
              </gttooltip>
            </td>
            <td>
              <gttooltip  v-bind="{position:'left' , message:'frontend' , type:'warning'}" >
                <p style="background: blue; padding:5px 10px;">left</p>
              </gttooltip>
            </td>
            <td>
              <gttooltip v-bind="{position:'right', message:'js', type:'danger'}" >
                <p style="background: yellow; padding:5px 10px;">right</p>
              </gttooltip>
            </td>
            <td>
              <gttooltip  v-bind="{position:'top', message:'hiworks' , type:'info'}" >
                <p style="background: green; padding:5px 10px;">top</p>
              </gttooltip>
            </td>                    
          </tr>
        </table>
      </div>
      -->

      <!-- gtinput 예시 -->
      
      <!-- <div style="position: absolute;left: 500px; top: 400px; width:600px; border:1px red solid;">

        <h2 class="anchor">Input</h2>
        <div class="ui-wrap">
          <gtinput placeholder="Basic usage" @pressEnter="$_pressEnter" @keyup="$_keyup" />
        </div>
        <div class="ui-wrap">
          <gtinput defaultValue="기본 값입니다." placeholder="Basic usage" />
        </div>
        <div class="ui-wrap">
          <gtinput size="sm" placeholder="small size" />
          <br><br>
          <gtinput placeholder="default size" />
          <br><br>
          <gtinput size="lg" placeholder="large size" />
        </div>
        <div class="ui-wrap">
          <gtinput custom-class="hiworks-input-custom-class" placeholder="Custom Class: !important를 붙여야 css가 적용됨^^;;" />
        </div>
        <div class="ui-wrap">
          <gtinput placeholder="width 값 조정" width="500px" />
        </div>
        <div class="ui-wrap">
          <gtinput placeholder="height 값 조정" height="100px" />
        </div>
        <div class="ui-wrap">
          <gtinput disabled placeholder="disabled" />
        </div>
      </div>       -->

      <!-- <gtbutton /> -->
      <!-- <gtbutton
        :type="`icon`"
        :icon="`trash`"
        @click="test"
      >
        test
      </gtbutton> -->
      <gtbutton
        :indicator="`primary`"
        :disabled="true">
        test
      </gtbutton>
    </div>
  </div>
</template>

<script>
import gtbutton from './components/button.vue'
//import gtCollapse from './components/Collapse.vue'
//import pagination from './components/Pagination.vue'
//import gttooltip from "./components/tooltip.vue"
//import gtinput from "./components/Input.vue"
export default {
  name: 'app',
  components: {
    gtbutton,
    //pagination,
    //gtCollapse
  },
  data() {
    return {
      items1: [
        { title: "title_01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "title_02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "title_03", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "title_04", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "title_05", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ],
      items2: [
        { title: "title_01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "title_02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
      items3: [
        { title: "title_01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "title_02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
      page : 1
    };
    //gtinput
    //,gttooltip
  },
  methods: {
    $_onCollapseOpened(payload) {
      console.log('opened', payload);
    },
    $_onCollapseClosed(payload) {
      console.log('closed', payload);
    }
  }
}
</script>
