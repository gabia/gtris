<!--split:basic-->
[ { "componentName":"Tooltip_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Tooltip_1:sourceCode-->

<gt-panel>
  <template #title>basic</template>
  <template #box>
    <gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }" style="margin-right:30px;" >
      <gt-button indicator="primary" >bottom</gt-button>
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }" style="margin-right:30px;"  >
      <gt-button indicator="secondary" >top</gt-button>
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'left', message: 'frontend',  type: 'warning' }" style="margin-right:30px;" >
        <gt-button indicator="danger" >left</gt-button>
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }" style="margin-right:30px;"  >
      <gt-button type="icon" icon="lock" />
    </gt-tooltip>
    <gt-tooltip v-bind="{ position: 'bottom', message: 'userStyle', type: 'info' , fontClass:'gt-font-dark'  }" style="margin-right:30px;"  >
      <span class="gt-btn red">userStyle</span>
    </gt-tooltip>
  </template>
</gt-panel>

<!--split:Tooltip_1:prismEditor-->

<gt-tooltip v-bind="{ position: 'bottom', message: 'gabia' }" style="margin-right:30px;" >
  <gt-button indicator="primary" >bottom</gt-button>
</gt-tooltip>
<gt-tooltip v-bind="{ position: 'top', message: 'hiworks', type: 'info' }" style="margin-right:30px;"  >
  <gt-button indicator="secondary" >top</gt-button>
</gt-tooltip>
<gt-tooltip v-bind="{ position: 'left', message: 'frontend',  type: 'warning' }" style="margin-right:30px;" >
    <gt-button indicator="danger" >left</gt-button>
</gt-tooltip>
<gt-tooltip v-bind="{ position: 'right', message: 'js', type: 'danger' }" style="margin-right:30px;"  >
  <gt-button type="icon" icon="lock" />
</gt-tooltip>
<gt-tooltip v-bind="{ position: 'bottom', message: 'userStyle', type: 'info' , fontClass:'gt-font-dark' }" style="margin-right:30px;"  >
  <span class="gt-btn red">userStyle</span>
</gt-tooltip>


<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| type | String | 'primary' | gtris에서 사용하는 타입을 사용할수 있습니다. |
| position | String | 'bottom' |'bottom' , 'left' , 'right' , 'top' |
| message | String | false | - |
| fontClass | String | false | gt-font-{타입} 클래스를 적용합니다.  |