<!--split:basic-->
[ { "componentName":"Tooltip_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Tooltip_1:sourceCode-->

<gt-panel>
  <template #title>basic</template>
  <template #box>
    <gt-tooltip content="안녕하세요" placement="bottom" style="margin-right:30px;" >
      <gt-button indicator="primary" >bottom</gt-button>
    </gt-tooltip>
    <gt-tooltip content="안녕하세요" placement="top"  style="margin-right:30px;"  >
      <gt-button indicator="primary" >top</gt-button>
    </gt-tooltip>
    <gt-tooltip content="안녕하세요" placement="left"  style="margin-right:30px;" >
        <gt-button indicator="primary" >left</gt-button>
    </gt-tooltip>
    <gt-tooltip content="안녕하세요" placement="right"   style="margin-right:30px;"  >
      <gt-button indicator="primary" >right</gt-button>
    </gt-tooltip>
    <gt-tooltip v-bind="{ placement: 'bottom', content: 'gtris color system에 정의된 색상을 이용해 사용자화 할 수 있습니다.' , gtrisColor:{color:'white', background:'warning'}  }" style="margin-right:30px;"  >
      <gt-button indicator="secondary" >customized</gt-button>
    </gt-tooltip> 
  </template>
</gt-panel>

<!--split:Tooltip_1:prismEditor-->

<gt-tooltip content="안녕하세요" placement="bottom" style="margin-right:30px;" >
  <gt-button indicator="primary" >bottom</gt-button>
</gt-tooltip>
<gt-tooltip content="안녕하세요" placement="top"  style="margin-right:30px;"  >
  <gt-button indicator="primary" >top</gt-button>
</gt-tooltip>
<gt-tooltip content="안녕하세요" placement="left"  style="margin-right:30px;" >
    <gt-button indicator="primary" >left</gt-button>
</gt-tooltip>
<gt-tooltip content="안녕하세요" placement="right"   style="margin-right:30px;"  >
  <gt-button indicator="primary" >right</gt-button>
</gt-tooltip>
<gt-tooltip v-bind="{ placement: 'bottom', content: 'gtris color system에 정의된 색상을 이용해 사용자화 할 수 있습니다.' , gtrisColor:{color:'white', background:'warning'}  }" style="margin-right:30px;"  >
  <gt-button indicator="secondary" >customized</gt-button>
</gt-tooltip>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| type | String | 'primary' | gtris에서 사용하는 타입을 사용할수 있습니다. |
| placement | String | 'bottom' |'bottom' , 'left' , 'right' , 'top' |
| content | String | false | - |
| gtrisColor | Object | false | {color:'{gtris color}' , background:'{gtris color}'} gtris color를 사용합니다.  |
| color | String | false | 글씨의 색상을 지정합니다. (gtrisColor가 우선순위)  |
| background | String | false | 툴팁의 배경을 지정합니다. (gtrisColor가 우선순위)  |
| fontSize | String | false | 글씨크기를 지정합니다.  |