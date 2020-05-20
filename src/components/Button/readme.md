<!--split:basic-->
[ { "componentName":"Button_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Button_2", "menuName":"Colored" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Button_3", "menuName":"Icon" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Button_1:sourceCode-->

<gt-panel>
  <template #title>basic</template>
  <template #box>
    <gtbutton>버튼(default)</gtbutton>
    <gtbutton :disabled="true">버튼(disabled)</gtbutton>
  </template>
</gt-panel>

<!--split:Button_1:prismEditor-->

<gtbutton>버튼(default)</gtbutton>
<gtbutton :disabled="true">버튼(disabled)</gtbutton>


<!--split:Button_2:sourceCode-->

<gt-panel>
  <template #title>Colored</template>
  <template #box>
    <gtbutton indicator="primary" style="margin-right:10px;">버튼(Primary)</gtbutton>
    <gtbutton indicator="secondary" style="margin-right:10px;">버튼(Secondary)</gtbutton>
    <gtbutton indicator="danger" style="margin-right:10px;">버튼(Danger)</gtbutton>
    <gtbutton indicator="primary" style="margin-right:10px;" :disabled="true">
      버튼(Primary)
    </gtbutton>
    <gtbutton indicator="secondary" style="margin-right:10px;" :disabled="true">
      버튼(Secondary)
    </gtbutton>
    <gtbutton indicator="danger" style="margin-right:10px;" :disabled="true">
      버튼(Danger)
    </gtbutton>
  </template>
</gt-panel>

<!--split:Button_2:prismEditor-->

<gtbutton indicator="primary">버튼(Primary)</gtbutton>
<gtbutton indicator="secondary">버튼(Secondary)</gtbutton>
<gtbutton indicator="danger">버튼(Danger)</gtbutton>
<gtbutton indicator="primary" :disabled="true">
  버튼(Primary)
</gtbutton>
<gtbutton indicator="secondary" :disabled="true">
  버튼(Secondary)
</gtbutton>
<gtbutton indicator="danger" :disabled="true">
  버튼(Danger)
</gtbutton>

<!--split:Button_3:sourceCode-->

<gt-panel>
  <template #title>Colored</template>
  <template #box>
    <gtbutton type="icon" icon="trash" ></gtbutton>
    <gtbutton type="icon" icon="check" ></gtbutton>
    <gtbutton type="icon" icon="heart" ></gtbutton>
    <gtbutton type="icon" icon="cog" ></gtbutton>
    <gtbutton type="icon" icon="label" ></gtbutton>
    <gtbutton type="icon" icon="mail" ></gtbutton>
    <gtbutton type="icon" icon="memo" ></gtbutton>
    <gtbutton type="icon" icon="message" ></gtbutton>
    <gtbutton type="icon" icon="plus" ></gtbutton>
    <gtbutton type="icon" icon="minus" ></gtbutton>
    <gtbutton type="icon" icon="bell" ></gtbutton>
    <gtbutton type="icon" icon="lock" ></gtbutton>
    <gtbutton type="icon" icon="paperclip" ></gtbutton>
    <gtbutton type="icon" icon="search" ></gtbutton>
    <gtbutton type="icon" icon="star" ></gtbutton>
    <gtbutton type="icon" icon="star-cancel" ></gtbutton>
    <gtbutton type="icon" icon="user" ></gtbutton>
    <gtbutton type="icon" icon="print" ></gtbutton>
 </template>
</gt-panel>    

<!--split:Button_3:prismEditor-->

<gtbutton type="icon" icon="trash" />
<gtbutton type="icon" icon="check" />
<gtbutton type="icon" icon="heart" />
<gtbutton type="icon" icon="cog" />
<gtbutton type="icon" icon="label" />
<gtbutton type="icon" icon="mail" />
<gtbutton type="icon" icon="memo" />
<gtbutton type="icon" icon="message" />
<gtbutton type="icon" icon="plus" />
<gtbutton type="icon" icon="minus" />
<gtbutton type="icon" icon="bell" />
<gtbutton type="icon" icon="lock" />
<gtbutton type="icon" icon="paperclip" />
<gtbutton type="icon" icon="search" />
<gtbutton type="icon" icon="star" />
<gtbutton type="icon" icon="star-cancel" />
<gtbutton type="icon" icon="user" />
<gtbutton type="icon" icon="print" />

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| indicator | String | 'primary' | 'primary' , 'secondary' , 'danger'  |
| type | String | false |'icon' |
| type='icon' icon="{type}" | String | false | trash , star , bell ... |
| disabled | Boolean | false |  |