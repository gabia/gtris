<!--split:basic-->
[ { "componentName":"Collapse_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Collapse_2", "menuName":"activate" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Collapse_3", "menuName":"accordion" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Collapse_4", "menuName":"event" , "sourceCode":"" , "prismEditor" : "" },{ "componentName":"Collapse_5", "menuName":"nestsed" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Collapse_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <gt-collapse>
      <gt-collapse-item>
        <template #head>Default Type Head 1</template>
        <template #content>Default Type Content 1</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>Default Type Head 2</template>
        <template #content>Default Type Content 2</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_1:prismEditor-->

<gt-collapse>
  <gt-collapse-item>
    <template #head>Default Type Head 1</template>
    <template #content>Default Type Content 1</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>Default Type Head 2</template>
    <template #content>Default Type Content 2</template>
  </gt-collapse-item>
</gt-collapse>


<!--split:Collapse_2:sourceCode-->

<gt-panel>
  <template #title>Activate</template>
  <template #box>
    <gt-collapse init="item1">
      <gt-collapse-item name="item1">
        <template #head>Activated Head</template>
        <template #content>Activated Content</template>
      </gt-collapse-item>
      <gt-collapse-item name="item2">
        <template #head>Head</template>
        <template #content>Content</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_2:prismEditor-->

<gt-collapse init="item1">
  <gt-collapse-item name="item1">
    <template #head>Activated Head</template>
    <template #content>Activated Content</template>
  </gt-collapse-item>
  <gt-collapse-item name="item2">
    <template #head>Head</template>
    <template #content>Content</template>
  </gt-collapse-item>
</gt-collapse>

<!--split:Collapse_3:sourceCode-->

<gt-panel>
  <template #title>Accordion</template>
  <template #box>
    <gt-collapse accordion>
      <gt-collapse-item>
        <template #head>Accordion Type Head 1</template>
        <template #content>Accordion Type Content 1</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>Accordion Type Head 2</template>
        <template #content>Accordion Type Content 2</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_3:prismEditor-->

<gt-collapse accordion>
  <gt-collapse-item>
    <template #head>Accordion Type Head 1</template>
    <template #content>Accordion Type Content 1</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>Accordion Type Head 2</template>
    <template #content>Accordion Type Content 2</template>
  </gt-collapse-item>
</gt-collapse>

<!--split:Collapse_4:sourceCode-->

<gt-panel>
  <template #title>Event</template>
  <template #box>
    <gt-collapse :opened="onOpend" :closed="onClosed">
      <gt-collapse-item name="item1">
        <template #head>Head 1</template>
        <template #content>Content 1</template>
      </gt-collapse-item>
      <gt-collapse-item name="item2">
        <template #head>Head 2</template>
        <template #content>Content 2</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_4:prismEditor-->

<gt-collapse :opened="onOpend" :closed="onClosed">
  <gt-collapse-item name="item1">
    <template #head>Head 1</template>
    <template #content>Content 1</template>
  </gt-collapse-item>
  <gt-collapse-item name="item2">
    <template #head>Head 2</template>
    <template #content>Content 2</template>
  </gt-collapse-item>
</gt-collapse>


<!--split:Collapse_5:sourceCode-->

<gt-panel>
  <template #title>Nestsed</template>
  <template #box>    
    <gt-collapse>
      <gt-collapse-item>
        <template #head>Parent Head 1</template>
        <template #content>
          You can add a child. <br><br>          
          <gt-collapse accordion>
            <gt-collapse-item>
              <template #head>Child Head 1-1</template>
              <template #content>Child Content 1-1</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>Child Head 1-2</template>
              <template #content>Child Content 1-2</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>Child Head 1-3</template>
              <template #content>Child Content 1-3</template>
            </gt-collapse-item>
          </gt-collapse>
        </template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>Parent Head 2</template>
        <template #content>         
          <gt-collapse>
            <gt-collapse-item>
              <template #head>Child Head 2-1</template>
              <template #content>Child Content 2-1</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>Child Head 2-2</template>
              <template #content>Child Content 2-2</template>
            </gt-collapse-item>
          </gt-collapse>
        </template>
      </gt-collapse-item> 
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_5:prismEditor-->

<gt-collapse>
  <!-- parent collapse -->
  <gt-collapse-item>
    <template #head>Parent Head 1</template>
    <template #content>
      You can add a child. <br><br>
      <!-- child collapse -->
      <gt-collapse accordion>
        <gt-collapse-item>
          <template #head>Child Head 1-1</template>
          <template #content>Child Content 1-1</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>Child Head 1-2</template>
          <template #content>Child Content 1-2</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>Child Head 1-3</template>
          <template #content>Child Content 1-3</template>
        </gt-collapse-item>
      </gt-collapse>
    </template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>Parent Head 2</template>
    <template #content>
      <!-- child collapse -->
      <gt-collapse>
        <gt-collapse-item>
          <template #head>Child Head 2-1</template>
          <template #content>Child Content 2-1</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>Child Head 2-2</template>
          <template #content>Child Content 2-2</template>
        </gt-collapse-item>
      </gt-collapse>
    </template>
  </gt-collapse-item> 
</gt-collapse>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| accordion | Boolean | false |   |
| init | String | null | |
| opened | Function | null | |
| closed | Function | null | |
| customClass | String | null | |
| (gt-collapse-item) name | String, Number | null | |