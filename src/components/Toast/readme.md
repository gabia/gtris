<!--split:basic-->
[ { "componentName":"Toast_1", "menuName":"basic" , "sourceCode":""  , "prismEditor" : ""  }]

<!--split:Toast_1:sourceCode-->
<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <div style="padding:10px;">
      <gt-toast v-model="toast_payload" ></gt-toast>
      <gt-button indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })" style="margin-right:10px;">테스트(상단 중앙)</gt-button>
      <gt-button indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" style="margin-right:10px;" >테스트(하단 왼쪽)</gt-button>
      <gt-button indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })" style="margin-right:10px;">테스트(상단 왼쪽)</gt-button>
    </div>
  </template>
</gt-panel>

<!--split:Toast_1:prismEditor-->
<gt-toast v-model="toast_payload" />
<gt-button indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top' })">테스트(상단 중앙)</gt-button>
<gt-button indicator="secondary" @click="$_test({type:'warning', message:'hello world2', direction: 'left-bottom' })" >테스트(하단 왼쪽)</gt-button>
<gt-button indicator="danger" @click="$_test({type:'danger', message:'hello world3', direction: 'left-top' })">테스트(상단 왼쪽)</gt-button>
<gt-button indicator="primary" @click="$_test({type:'primary', message:'hello world', direction: 'center-top', gtColorClass:['gt-font-info','gt-border-error','gt-background-lightgray-1'] })">테스트(gtrisColor 적용)</gt-button>

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
| v-model| Object | false | 컴포넌트 내 v-model(Object)을 지정하고 해당 Object의 property를 설정합니다. | 
| type (property) | String | 'primary' | 'primary','info','warning','danger' |
| direction (property) | String | 'center-top' | 'right-top','left-top','right-bottom','left-bottom','center-top','center-bottom'  |
| message (property)| String | false |  |
| gtColorClass (property) | Array | false | Gtris Color 클래스를 사용합니다. |
