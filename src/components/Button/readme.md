<!--split:basic-->
[ { "componentName":"Button_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Button_2", "menuName":"Colored" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Button_3", "menuName":"Icon" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Button_1:sourceCode-->

<gt-panel>
  <template #title>Default</template>
  <template #box>
    <gt-button>버튼(default)</gt-button>
    <gt-button :disabled="true">버튼(disabled)</gt-button>
  </template>
</gt-panel>

<!--split:Button_1:prismEditor-->

<gt-button>버튼(default)</gt-button>
<gt-button :disabled="true">버튼(disabled)</gt-button>


<!--split:Button_2:sourceCode-->

<gt-panel>
  <template #title>Colored</template>
  <template #box>
    <gt-button indicator="primary" style="margin-right:10px;">버튼(Primary)</gt-button>
    <gt-button indicator="secondary" style="margin-right:10px;">버튼(Secondary)</gt-button>
    <gt-button indicator="danger" style="margin-right:10px;">버튼(Danger)</gt-button>
    <gt-button indicator="primary" style="margin-right:10px;" :disabled="true">
      버튼(Primary)
    </gt-button>
    <gt-button indicator="secondary" style="margin-right:10px;" :disabled="true">
      버튼(Secondary)
    </gt-button>
    <gt-button indicator="danger" style="margin-right:10px;" :disabled="true">
      버튼(Danger)
    </gt-button>
    <gt-button indicator="primary" invert="true" style="margin-right:10px;">버튼(Primary)</gt-button>
    <gt-button indicator="secondary" invert="true" style="margin-right:10px;">버튼(Secondary)</gt-button>
    <gt-button indicator="danger" invert="true" style="margin-right:10px;">버튼(Danger)</gt-button>
  </template>
</gt-panel>

<!--split:Button_2:prismEditor-->

<gt-button indicator="primary">Primary</gt-button>
<gt-button indicator="secondary">Secondary</gt-button>
<gt-button indicator="danger">Danger</gt-button>
<gt-button indicator="primary" :disabled="true">
  Primary
</gt-button>
<gt-button indicator="secondary" :disabled="true">
  Secondary
</gt-button>
<gt-button indicator="danger" :disabled="true">
  Danger
</gt-button>

<!--split:Button_3:sourceCode-->

<gt-panel>
  <template #title>아이콘 버튼</template>
  <template #box>
    <gt-button type="icon" icon="trash" ></gt-button>
    <gt-button type="icon" icon="check" ></gt-button>
    <gt-button type="icon" icon="heart" ></gt-button>
    <gt-button type="icon" icon="cog" ></gt-button>
    <gt-button type="icon" icon="label" ></gt-button>
    <gt-button type="icon" icon="mail" ></gt-button>
    <gt-button type="icon" icon="memo" ></gt-button>
    <gt-button type="icon" icon="message" ></gt-button>
    <gt-button type="icon" icon="plus" ></gt-button>
    <gt-button type="icon" icon="minus" ></gt-button>
    <gt-button type="icon" icon="bell" ></gt-button>
    <gt-button type="icon" icon="lock" ></gt-button>
    <gt-button type="icon" icon="paperclip" ></gt-button>
    <gt-button type="icon" icon="search" ></gt-button>
    <gt-button type="icon" icon="star" ></gt-button>
    <gt-button type="icon" icon="star-cancel" ></gt-button>
    <gt-button type="icon" icon="user" ></gt-button>
    <gt-button type="icon" icon="print" ></gt-button>
 </template>
</gt-panel>    

<!--split:Button_3:prismEditor-->

<gt-button type="icon" icon="trash" />
<gt-button type="icon" icon="check" />
<gt-button type="icon" icon="heart" />
<gt-button type="icon" icon="cog" />
<gt-button type="icon" icon="label" />
<gt-button type="icon" icon="mail" />
<gt-button type="icon" icon="memo" />
<gt-button type="icon" icon="message" />
<gt-button type="icon" icon="plus" />
<gt-button type="icon" icon="minus" />
<gt-button type="icon" icon="bell" />
<gt-button type="icon" icon="lock" />
<gt-button type="icon" icon="paperclip" />
<gt-button type="icon" icon="search" />
<gt-button type="icon" icon="star" />
<gt-button type="icon" icon="star-cancel" />
<gt-button type="icon" icon="user" />
<gt-button type="icon" icon="print" />

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| indicator | String | 'primary' | 'primary' , 'secondary' , 'danger'  |
| type | String | false |'icon' |
| type='icon' icon="{type}" | String | false | trash , star , bell ... |
| disabled | Boolean | false |  |