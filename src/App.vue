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
        :disabled="true"
        @click="test">
        test
      </gtbutton>
      <!-- default -->
      <!-- <gtCollapse
      :id="`collapse1-${index}`"
      :title="item.title"
      :content="item.content"
      v-for="(item, index) in items1"
      :key="`collapse1-${index}`"
      @collapse-opened="$_onCollapseOpened"
      @collapse-closed="$_onCollapseClosed" />

      <br><br> -->

      <!-- nested collapse -->
      <!-- <gtCollapse
      :id="`collapse2-${index}`"
      :title="item.title"
      :content="item.content"
      v-for="(item, index) in items2"
      :key="`collapse2-${index}`"
      @collapse-opened="$_onCollapseOpened"
      @collapse-closed="$_onCollapseClosed">
        <template slot="collapse-body">
          <gtCollapse
            :id="`collapse2-1-${childIndex}`"
            :title="childItem.title"
            :content="childItem.content"
            v-for="(childItem, childIndex) in items3"
            :key="`collapse2-1-${childIndex}`"
            @collapse-opened="$_onCollapseOpened"
            @collapse-closed="$_onCollapseClosed" />
        </template>
      </gtCollapse> -->
    </div>
  </div>
</template>

<script>
import gtbutton from './components/button.vue'
//import gtCollapse from './components/Collapse.vue'
//import gttooltip from "./components/tooltip.vue"
export default {
  name: 'app',
  components: {
    gtbutton
    //,gttooltip
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
      ]
    };
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
