<!--split:basic-->
[ { "componentName":"Input_1", "menuName":"Basic" , "sourceCode":"" , "prismEditor" : "" }]


<!--split:Input_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <div style="padding:10px;">
      <div class="ui-wrap">
        <gt-input placeholder="Basic usage" />
      </div></br>
      <div class="ui-wrap">
        <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
      </div></br>
      <div class="ui-wrap">
        <gt-input size="sm" placeholder="small size" />
        </br>
        <gt-input placeholder="default size" />
        </br>
        <gt-input size="lg" placeholder="large size" />
      </div></br>
      <div class="ui-wrap">
        <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class:!important 필요" />        
      </div></br>
      <div class="ui-wrap">
        <gt-input placeholder="width 값 조정" width="500px" />
      </div></br>
      <div class="ui-wrap">
        <gt-input placeholder="height 값 조정" height="100px" />
      </div></br>
      <div class="ui-wrap">
        <gt-input disabled placeholder="disabled" />
      </div>
    </div>
  </template>
</gt-panel>

<!--split:Input_1:prismEditor-->

<div style="padding:10px;">
  <div class="ui-wrap">
    <gt-input placeholder="Basic usage" @pressEnter="$_pressEnter" @keyup="$_keyup" />
  </div>
  <div class="ui-wrap">
    <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
  </div>
  <div class="ui-wrap">
    <gt-input size="sm" placeholder="small size" />        
    <gt-input placeholder="default size" />        
    <gt-input size="lg" placeholder="large size" />
  </div>
  <div class="ui-wrap">
    <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class:!important 필요" />
  </div>
  <div class="ui-wrap">
    <gt-input placeholder="width 값 조정" width="500px" />
  </div>
  <div class="ui-wrap">
    <gt-input placeholder="height 값 조정" height="100px" />
  </div>
  <div class="ui-wrap">
    <gt-input disabled placeholder="disabled" />
  </div>
</div>


## CSS ## 
.hiworks-input-custom-class {
  border: 4px solid orangered !important;
}

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| defaultValue | String | '' | 기본 값 설정시 사용합니다.  |
| placeholder | String | false |  |
| size | String | false |  |
| width | String | false |  |
| height | String | false |  |
| customClass | String | false | 스타일 적용 시 !important 필요합니다. |
| pressEnter  | Event  |  |  |
| keyup  | Event |  |  |