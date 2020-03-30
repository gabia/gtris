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
    </div>
  </div>
</template>

<script>
import gtbutton from './components/button.vue'
//import gttooltip from "./components/tooltip.vue"
export default {
  name: 'app',
  components: {
    gtbutton
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
