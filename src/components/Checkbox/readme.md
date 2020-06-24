<!--split:basic-->
[ { "componentName":"Checkbox_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" },{ "componentName":"Checkbox_2", "menuName":"checkall" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Checkbox_1:sourceCode-->

<gt-panel>
  <template #title>basic</template>
  <template #box>
    <gt-checkbox label="item" name="helloworld" @input="$_checkedItem" :checked='false' :disabled='false' > test </gt-checkbox>
  </template>
</gt-panel>

<!--split:Checkbox_1:prismEditor-->

<gt-checkbox label="item" name="helloworld" @input="$_checkedItem" :checked='false' :disabled='false' > test </gt-checkbox> 

<!--split:Checkbox_2:sourceCode-->

<gt-panel>
  <template #title>basic</template>
  <template #box>
    <gt-checkbox label="item1" name="helloworld1" :all='allFlag' @input="$_checkedItem"> helloworld1 </gt-checkbox>
    <gt-checkbox label="item2" name="helloworld2" :all='allFlag' @input="$_checkedItem"> helloworld2 </gt-checkbox>
    <gt-checkbox label="item3" name="helloworld3" :all='allFlag' @input="$_checkedItem"> helloworld3 </gt-checkbox>
    <div style="margin-top:30px">
      <gt-button indicator="danger"  @click="$_checkAll('A')" style="margin-right:20px">모두 체크</gt-button>
      <gt-button indicator="primary" @click="$_checkAll('N')">모두 해제</gt-button>
    </div>
  </template>
</gt-panel>

<!--split:Checkbox_2:prismEditor-->

<gt-checkbox label="item1" name="helloworld1" :all='allFlag' @input="$_checkedItem"> helloworld1 </gt-checkbox>
<gt-checkbox label="item2" name="helloworld2" :all='allFlag' @input="$_checkedItem"> helloworld2 </gt-checkbox>
<gt-checkbox label="item3" name="helloworld3" :all='allFlag' @input="$_checkedItem"> helloworld3 </gt-checkbox>
<div style="margin-top:30px">
  <gt-button indicator="danger"  @click="()=>{this.allFlag = 'A'}" style="margin-right:20px">모두 체크</gt-button>
  <gt-button indicator="primary" @click="()=>{this.allFlag = 'N'}">모두 해제</gt-button>
</div>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| label |  | null | checkbox의 value 입니다. |
| name | String | null | |
| disabled | Boolean | false | - |
| all | Boolean | false | 전체 체크 및 해제  |
| checked | Boolean | false | 생성과 동시에 체크되어 있어야 하는경우 사용  |
| input | Event |  | 체크시 label 값을 리턴  |
| checkStatus | Event |  | 체크 상태와 label 값을 리턴  |
