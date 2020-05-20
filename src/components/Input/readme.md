<!--split:basic-->
[ { "componentName":"Input_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }]


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

<gt-panel>
  <template #title>Basic</template>
  <template #body>
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
  </template>
</gt-panel>

## CSS ## 
.hiworks-input-custom-class {
  border: 4px solid orangered !important;
}

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| defaultValue | String | '' | required : false  |
| placeholder | String | false | required : false |
| size | String | false | required : false |
| width | String | false | required : false |
| height | String | false | required : false |
| customClass | String | false | required : false |
| (event) pressEnter  |  |  |  |
| (event) keyup  |  |  |  |