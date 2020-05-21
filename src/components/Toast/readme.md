<!--split:basic-->
[ { "componentName":"Toast_1", "menuName":"basic" , "sourceCode":""  , "prismEditor" : ""  }]

<!--split:Toast_1:sourceCode-->
<div style="padding:10px;">
  <gt-toast v-model="toast_payload" ></gt-toast>
  <gtbutton indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })" style="margin-right:10px;">테스트(상단 중앙)</gtbutton>
  <gtbutton indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" style="margin-right:10px;" >테스트(하단 왼쪽)</gtbutton>
  <gtbutton indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })" style="margin-right:10px;">테스트(상단 왼쪽)</gtbutton>
</div>

<!--split:Toast_1:prismEditor-->
<gt-toast v-model="toast_payload" />
<gtbutton indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })">테스트(상단 중앙)</gtbutton>
<gtbutton indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" >테스트(하단 왼쪽)</gtbutton>
<gtbutton indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })">테스트(상단 왼쪽)</gtbutton>

### vue-component script ###

export default {
  name: "tooltip-test",
  data() {
    return {
      toast_payload:{} 
    }
  },
  methods: {
    $_test(payload){
      this.toast_payload = payload
    },
  }
}    

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| type | String | 'primary' | 'primary','info','warning','danger'  |
| direction | String | 'center-top' | 'right-top','left-top','right-bottom','left-bottom','center-top','center-bottom'  |
| message | String | false | required : true  |

