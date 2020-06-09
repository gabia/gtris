<!--split:basic-->
[ { "componentName":"Collapse_1", "menuName":"Basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Collapse_2", "menuName":"Activate" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Collapse_3", "menuName":"Accordion" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Collapse_4", "menuName":"Event" , "sourceCode":"" , "prismEditor" : "" },{ "componentName":"Collapse_5", "menuName":"Nestsed" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Collapse_6", "menuName":"ArrowPosition" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Collapse_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <gt-collapse>
      <gt-collapse-item>
        <template #head>제목없음 1</template>
        <template #content>소학교 아침이 파란 새겨지는 경, 있습니다. 묻힌 라이너 마디씩 내 보고, 어머님, 버리었습니다.</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>제목없음 2</template>
        <template #content>겨울이 새워 봄이 시인의 지나고 계십니다. 겨울이 밤을 남은 밤이 북간도에 거외다.</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_1:prismEditor-->

<gt-collapse>
  <gt-collapse-item>
    <template #head>제목없음 1</template>
    <template #content>소학교 아침이 파란 새겨지는 경, 있습니다. 묻힌 라이너 마디씩 내 보고, 어머님, 버리었습니다.</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>제목없음 2</template>
    <template #content>겨울이 새워 봄이 시인의 지나고 계십니다. 겨울이 밤을 남은 밤이 북간도에 거외다.</template>
  </gt-collapse-item>
</gt-collapse>


<!--split:Collapse_2:sourceCode-->

<gt-panel>
  <template #title>Activate</template>
  <template #box>
    <gt-collapse init="item1">
      <gt-collapse-item name="item1">
        <template #head>제목없음 1</template>
        <template #content>소학교 언덕 경, 덮어 당신은 있습니다. 어머님, 프랑시스 이 있습니다. 나의 그러나 가을 추억과 벌레는 봅니다. 그리고 다 언덕 거외다.</template>
      </gt-collapse-item>
      <gt-collapse-item name="item2">
        <template #head>제목없음 2</template>
        <template #content>쓸쓸함과 멀리 어머님, 된 새워 지나고 언덕 까닭입니다. 지나고 나의 이름자 까닭이요, 하나의 차 남은 그러나 마리아 까닭입니다.</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_2:prismEditor-->

<gt-collapse init="item1">
  <gt-collapse-item name="item1">
    <template #head>제목없음 1</template>
    <template #content>소학교 언덕 경, 덮어 당신은 있습니다. 어머님, 프랑시스 이 있습니다. 나의 그러나 가을 추억과 벌레는 봅니다. 그리고 다 언덕 거외다.</template>
  </gt-collapse-item>
  <gt-collapse-item name="item2">
    <template #head>제목없음 2</template>
    <template #content>쓸쓸함과 멀리 어머님, 된 새워 지나고 언덕 까닭입니다. 지나고 나의 이름자 까닭이요, 하나의 차 남은 그러나 마리아 까닭입니다.</template>
  </gt-collapse-item>
</gt-collapse>

<!--split:Collapse_3:sourceCode-->

<gt-panel>
  <template #title>Accordion</template>
  <template #box>
    <gt-collapse accordion>
      <gt-collapse-item>
        <template #head>제목없음 1</template>
        <template #content>내린 불러 하나에 별 청춘이 위에도 봅니다. 그리워 별에도 벌써 계십니다. 보고, 나는 하나에 청춘이 다하지 그리워 까닭입니다.</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>제목없음 2</template>
        <template #content>오면 그리고 속의 불러 버리었습니다. 봄이 너무나 책상을 오면 있습니다. 벌써 차 아직 어머니 하나에 다 거외다.</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_3:prismEditor-->

<gt-collapse accordion>
  <gt-collapse-item>
    <template #head>제목없음 1</template>
    <template #content>내린 불러 하나에 별 청춘이 위에도 봅니다. 그리워 별에도 벌써 계십니다. 보고, 나는 하나에 청춘이 다하지 그리워 까닭입니다.</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>제목없음 2</template>
    <template #content>오면 그리고 속의 불러 버리었습니다. 봄이 너무나 책상을 오면 있습니다. 벌써 차 아직 어머니 하나에 다 거외다.</template>
  </gt-collapse-item>
</gt-collapse>

<!--split:Collapse_4:sourceCode-->

<gt-panel>
  <template #title>Event</template>
  <template #box>
    <gt-collapse :opened="onCollapseOpend" :closed="onCollapseClosed">
      <gt-collapse-item name="item1">
        <template #head>제목없음 1</template>
        <template #content>것은 가을로 아스라히 멀듯이, 말 어머니, 부끄러운 별이 까닭입니다. 속의 오는 된 봅니다.</template>
      </gt-collapse-item>
      <gt-collapse-item name="item2">
        <template #head>제목없음 2</template>
        <template #content>위에도 보고, 시와 까닭입니다. 책상을 이름자 하나에 불러 가득 까닭입니다. 별 같이 옥 않은 둘 노루, 봅니다.</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_4:prismEditor-->

<gt-collapse :opened="onCollapseOpend" :closed="onCollapseClosed">
  <gt-collapse-item name="item1">
    <template #head>제목없음 1</template>
    <template #content>것은 가을로 아스라히 멀듯이, 말 어머니, 부끄러운 별이 까닭입니다. 속의 오는 된 봅니다.</template>
  </gt-collapse-item>
  <gt-collapse-item name="item2">
    <template #head>제목없음 2</template>
    <template #content>위에도 보고, 시와 까닭입니다. 책상을 이름자 하나에 불러 가득 까닭입니다. 별 같이 옥 않은 둘 노루, 봅니다.</template>
  </gt-collapse-item>
</gt-collapse>


<!--split:Collapse_5:sourceCode-->

<gt-panel>
  <template #title>Nestsed</template>
  <template #box>    
    <gt-collapse>
      <gt-collapse-item>
        <template #head>부모 제목없음 1</template>
        <template #content>
          이네들은 나의 새겨지는 토끼, 있습니다. 이런 다하지 별 슬퍼하는 이제 거외다.<br><br>          
          <gt-collapse accordion>
            <gt-collapse-item>
              <template #head>자식 제목없음 1-1</template>
              <template #content>릴케 내린 까닭이요, 나는 별 불러 이국 헤일 위에 있습니다. 못 않은 가난한 하나에 자랑처럼 이 까닭이요, 이런 까닭입니다.</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>자식 제목없음 1-2</template>
              <template #content>봄이 내린 나의 강아지, 무성할 했던 별 말 다 있습니다. 이름과 내린 묻힌 가득 나의 하나에 하나에 버리었습니다.</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>자식 제목없음 1-3</template>
              <template #content>새워 무성할 아이들의 피어나듯이 하나에 나는 그러나 언덕 까닭입니다. 없이 추억과 까닭이요, 무덤 쓸쓸함과 까닭입니다.</template>
            </gt-collapse-item>
          </gt-collapse>
        </template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>부모 제목없음 2</template>
        <template #content>         
          <gt-collapse>
            <gt-collapse-item>
              <template #head>자식 제목없음 2-1</template>
              <template #content>흙으로 가난한 청춘이 속의 별빛이 아침이 옥 봅니다. 이름과 경, 이름과, 별이 않은 하나에 어머니 토끼, 비둘기, 봅니다. 하나에 지나고 같이 이제 동경과 별에도 가난한 까닭이요, 계십니다.</template>이름자 지나가는 아름다운 말 별 쓸쓸함과 언덕 것은 이제 봅니다. 애기 이름과, 아직 까닭입니다.
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>자식 제목없음 2-2</template>
              <template #content>하나에 하나에 마리아 부끄러운 그리고 멀리 듯합니다. 사랑과 이웃 별들을 못 있습니다.</template>
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
    <template #head>부모 제목없음 1</template>
    <template #content>
      You can add a child. <br><br>
      <!-- child collapse -->
      <gt-collapse accordion>
        <gt-collapse-item>
          <template #head>자식 제목없음 1-1</template>
          <template #content>릴케 내린 까닭이요, 나는 별 불러 이국 헤일 위에 있습니다. 못 않은 가난한 하나에 자랑처럼 이 까닭이요, 이런 까닭입니다.</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>자식 제목없음 1-2</template>
          <template #content>봄이 내린 나의 강아지, 무성할 했던 별 말 다 있습니다. 이름과 내린 묻힌 가득 나의 하나에 하나에 버리었습니다.</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>자식 제목없음 1-3</template>
          <template #content>새워 무성할 아이들의 피어나듯이 하나에 나는 그러나 언덕 까닭입니다. 없이 추억과 까닭이요, 무덤 쓸쓸함과 까닭입니다.</template>
        </gt-collapse-item>
      </gt-collapse>
    </template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>부모 제목없음 2</template>
    <template #content>
      <!-- child collapse -->
      <gt-collapse>
        <gt-collapse-item>
          <template #head>자식 제목없음 2-1</template>
          <template #content>흙으로 가난한 청춘이 속의 별빛이 아침이 옥 봅니다. 이름과 경, 이름과, 별이 않은 하나에 어머니 토끼, 비둘기, 봅니다. 하나에 지나고 같이 이제 동경과 별에도 가난한 까닭이요, 계십니다.</template>
        </gt-collapse-item>
        <gt-collapse-item>
          <template #head>자식 제목없음 2-2</template>
          <template #content>하나에 하나에 마리아 부끄러운 그리고 멀리 듯합니다. 사랑과 이웃 별들을 못 있습니다.</template>
        </gt-collapse-item>
      </gt-collapse>
    </template>
  </gt-collapse-item> 
</gt-collapse>

<!--split:Collapse_6:sourceCode-->

<gt-panel>
  <template #title>ArrowPosition</template>
  <template #box>
    <gt-collapse :arrowPositionLeft="true">
      <gt-collapse-item>
        <template  #head>제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1</template>
        <template #content>소학교 아침이 파란 새겨지는 경, 있습니다. 묻힌 라이너 마디씩 내 보고, 어머님, 버리었습니다.</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>제목없음 2</template>
        <template #content>겨울이 새워 봄이 시인의 지나고 계십니다. 겨울이 밤을 남은 밤이 북간도에 거외다.</template>
      </gt-collapse-item>
    </gt-collapse>
  </template>
</gt-panel>

<!--split:Collapse_6:prismEditor-->

<gt-collapse :arrowPositionLeft="true">
  <gt-collapse-item>
    <template  #head>제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1제목없음 1</template>
    <template #content>소학교 아침이 파란 새겨지는 경, 있습니다. 묻힌 라이너 마디씩 내 보고, 어머님, 버리었습니다.</template>
  </gt-collapse-item>
  <gt-collapse-item>
    <template #head>제목없음 2</template>
    <template #content>겨울이 새워 봄이 시인의 지나고 계십니다. 겨울이 밤을 남은 밤이 북간도에 거외다.</template>
  </gt-collapse-item>
</gt-collapse>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| gt-collapse ||||
| accordion | Boolean | false | 이 속성이 true이면 하나의 아이템을 클릭 시 나머지 아이템들은 모두 닫힙니다. |
| arrowPositionLeft | Boolean | false | 화살표 아이콘의 위치. 기본은 오른쪽입니다. |
| init | String | null | 각 아이템에 정의된 이름들 중 초기에 활성화 시킬 하나의 아이템의 이름. |
| opened | Function | null | 아이템이 열렸을 때 실행할 함수. |
| closed | Function | null | 아이템이 닫혔을 때 실행할 함수. |
| customClass | String | null | 사용자화를 위한 클래스명. |
| gt-collapse-item ||||
| name | String, Number | gt-collapse-item-${36진수로 구성된 난수} | 아이템의 이름. 중복되지 않는 유일한 값.|