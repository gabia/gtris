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
        :disabled="true"
        @click="test">
        test
      </gtbutton>
    </div>
  </div>
</template>

<script>
import gtbutton from './components/button.vue'
//import gttooltip from "./components/tooltip.vue"
//import gtinput from "./components/Input.vue"
export default {
  name: 'app',
  components: {
    gtbutton,
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
