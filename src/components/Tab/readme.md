<!--split:basic-->
[ { "componentName":"Tab_1", "menuName":"Basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Tab_2", "menuName":"Activate" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Tab_3", "menuName":"Method" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Tab_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <gt-tab>
      <gt-tab-item label="사과"><div>🍏🍏🍏🍏🍏</div></gt-tab-item>
      <gt-tab-item label="복숭아"><div>🍑🍑🍑🍑🍑🍑</div></gt-tab-item>
      <gt-tab-item label="아보카도"><div>🥑🥑🥑🥑🥑🥑</div></gt-tab-item>
    </gt-tab>
  </template>
  <template #text>
    label의 값이 각 탭 아이템의 제목에 매칭됩니다.
  </template>
</gt-panel>

<!--split:Tab_1:prismEditor-->

<gt-tab>
  <gt-tab-item label="사과"><div>🍏🍏🍏🍏🍏</div></gt-tab-item>
  <gt-tab-item label="복숭아"><div>🍑🍑🍑🍑🍑🍑</div></gt-tab-item>
  <gt-tab-item label="아보카도"><div>🥑🥑🥑🥑🥑🥑</div></gt-tab-item>
</gt-tab>

<!--split:Tab_2:sourceCode-->

<gt-panel>
  <template #title>Activate</template>
  <template #box>
    <gt-tab init="peach">
      <gt-tab-item label="사과" name="apple"><div>🍏🍏🍏🍏🍏</div></gt-tab-item>
      <gt-tab-item label="복숭아" name="peach"><div>🍑🍑🍑🍑🍑🍑</div></gt-tab-item>
      <gt-tab-item label="아보카도" name="avocado"><div>🥑🥑🥑🥑🥑🥑</div></gt-tab-item>
    </gt-tab>
  </template>
  <template #text>
    각 탭 아이템에 이름을 지정하면, 특정 탭이 활성된 상태로 초기화할 수 있습니다.
  </template>
</gt-panel>

<!--split:Tab_2:prismEditor-->

<gt-button indicator="primary" @click="activateTabItem('avocado')">아보카도 보기</gt-button>
<gt-tab>
  <gt-tab-item label="사과" name="apple"><div>🍏🍏🍏🍏🍏</div></gt-tab-item>
  <gt-tab-item label="복숭아" name="peach"><div>🍑🍑🍑🍑🍑🍑</div></gt-tab-item>
  <gt-tab-item label="아보카도" name="avocado"><div>🥑🥑🥑🥑🥑🥑</div></gt-tab-item>
</gt-tab>

<!--split:Tab_3:sourceCode-->

<gt-panel>
  <template #title>Method</template>
  <template #box>
    <gt-button indicator="primary" @click="activateTabItem('avocado')">아보카도 보기</gt-button>
    <gt-tab>
      <gt-tab-item label="사과" name="apple"><div>🍏🍏🍏🍏🍏</div></gt-tab-item>
      <gt-tab-item label="복숭아" name="peach"><div>🍑🍑🍑🍑🍑🍑</div></gt-tab-item>
      <gt-tab-item label="아보카도" name="avocado"><div>🥑🥑🥑🥑🥑🥑</div></gt-tab-item>
    </gt-tab>
  </template>
  <template #text>
    activateTabItem(tabItemName) 내장함수로 다른 컴포넌트에서도 접근하여 특정 탭을 활성화 할 수 있습니다.
  </template>
</gt-panel>

<!--split:Tab_3:prismEditor-->

<gt-button indicator="primary" @click="activateTabItem('avocado')">아보카도 보기</gt-button>
<gt-tab>
  <gt-tab-item label="사과" name="apple"><div>🍏🍏🍏🍏🍏</div></gt-tab-item>
  <gt-tab-item label="복숭아" name="peach"><div>🍑🍑🍑🍑🍑🍑</div></gt-tab-item>
  <gt-tab-item label="아보카도" name="avocado"><div>🥑🥑🥑🥑🥑🥑</div></gt-tab-item>
</gt-tab>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| gt-tab ||||
| init | String | 첫번째 tab-item의 이름 | 각 tab-item에 정의된 이름들 중 초기에 활성화할 tab-item의 이름. |
| customClass | String | null | 사용자화를 위한 클래스명. |
| gt-tab-item ||||
| name | String, Number | gt-tab-item-${36진수로 구성된 난수} | 아이템의 이름. 중복되지 않는 유일한 값.|
| label | String, Number | 필수값 | 각 아이템에 매칭되는 nav의 이름.|
| customClass | String | null | 사용자화를 위한 클래스명. |

<!--split:methods-->

| NAME | DESCRIPTION |
|--|--|
| activateTabItem(tabItemName) | 호출 시 매개변수에 매칭되는 이름의 탭 아이템을 활성화 합니다. |