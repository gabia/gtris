<!--split:basic-->
[ { "componentName":"Modal_1", "menuName":"Basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Modal_2", "menuName":"Untitled" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Modal_3", "menuName":"Nested" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Modal_4", "menuName":"ClickBackdrop" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Modal_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <gt-button @click="openModal('basicModal')" indicator="primary">모달 열기</gt-button>
    <gt-modal name="basicModal">
      <template #head>제목없음</template>
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
        언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
      </template>
      <template #foot>
        <gt-button @click="closeModal('basicModal')" indicator="primary">확인</gt-button>
      </template>
    </gt-modal>
  </template>
  <template #text>
    기본 형태의 모달입니다.<br>
    openModal(modalName) 내장함수로 다른 컴포넌트에서도 접근하여 모달을 열 수 있습니다.<br>
    closeModal(modalName) 내장함수로 다른 컴포넌트에서도 접근하여 모달을 닫을 수 있습니다.
  </template>
</gt-panel>

<!--split:Modal_1:prismEditor-->

<gt-button @click="openModal('basicModal')" indicator="primary">모달 열기</gt-button>
<gt-modal name="basicModal">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gt-button @click="closeModal('basicModal')" indicator="primary">확인</gt-button>
  </template>
</gt-modal>

<!--split:Modal_2:sourceCode-->

<gt-panel>
  <template #title>Untitled</template>
  <template #box>
    <gt-button @click="openModal('untitledModal')" indicator="primary">모달 열기</gt-button>
    <gt-modal name="untitledModal">
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
        언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
      </template>
      <template #foot>
        <gt-button @click="closeModal('untitledModal')" indicator="primary">확인</gt-button>
      </template>
    </gt-modal>
  </template>
  <template #text>
    제목이 없는 형태의 모달입니다. 단순히 제목 부분을 입력하지 않으면 제목 영역이 노출되지 않습니다.
  </template>
</gt-panel>

<!--split:Modal_2:prismEditor-->

<gt-button @click="openModal('untitledModal')" indicator="primary">모달 열기</gt-button>
<gt-modal name="untitledModal">
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gt-button @click="closeModal('untitledModal')" indicator="primary">확인</gt-button>
  </template>
</gt-modal>

<!--split:Modal_3:sourceCode-->

<gt-panel>
  <template #title>Nested</template>
  <template #box>
    <gt-button @click="openModal('outerModal')" indicator="primary">모달 열기</gt-button>
    <gt-modal name="outerModal">
      <template #head>제목없음</template>
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
        언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
      </template>
      <template #foot>
        <gt-button @click="closeModal('outerModal')" indicator="primary">확인</gt-button>
        <gt-button @click="openModal('innerModal')" indicator="primary" invert="true">모달 또 열기</gt-button>
      </template>
    </gt-modal>
    <gt-modal name="innerModal" width="400px"> 
      <template #body>
        못하다 만물은 살았으며, 물방아 그들의 때문이다. 끓는 같은 이것은 예가 커다란 교향악이다. 사랑의 인간에 그들에게 청춘 사람은 같은 인생을 구하기 말이다. 있음으로써 굳세게 아니더면, 것은 간에 그것을 황금시대의 것이다. 인간이 황금시대의 끝에 용기가 힘있다. 바이며, 보배를 놀이 너의 튼튼하며, 보는 말이다. 위하여서, 불어 방황하여도, 능히 그들은 소리다.이것은 있을 가치를 뿐이다. 피부가 실로 피가 자신과 붙잡아 천자만홍이 아니다. 끓는 끝에 되려니와, 품었기 속잎나고, 미묘한 뼈 영락과 봄바람이다. 곧 끝에 청춘의 때에, 이상 철환하였는가?
      </template>
      <template #foot>
        <gt-button @click="closeModal('innerModal')" indicator="primary">확인</gt-button>
      </template>
    </gt-modal>
  </template>
  <template #text>
    모달 내부에서도 다른 모달을 중첩하여 열 수 있습니다.
  </template>
</gt-panel>

<!--split:Modal_3:prismEditor-->

<gt-button @click="openModal('outerModal')" indicator="primary">모달 열기</gt-button>
<!-- outer modal -->
<gt-modal name="outerModal">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gt-button @click="closeModal('outerModal')" indicator="primary">확인</gt-button>
    <gt-button @click="openModal('innerModal')" indicator="primary" invert="true">모달 또 열기</gt-button>
  </template>
</gt-modal>
<!-- inner modal -->
<gt-modal name="innerModal">
  <template #head>nested modal</template>
  <template #body>
    못하다 만물은 살았으며, 물방아 그들의 때문이다. 끓는 같은 이것은 예가 커다란 교향악이다. 사랑의 인간에 그들에게 청춘 사람은 같은 인생을 구하기 말이다. 있음으로써 굳세게 아니더면, 것은 간에 그것을 황금시대의 것이다. 인간이 황금시대의 끝에 용기가 힘있다. 바이며, 보배를 놀이 너의 튼튼하며, 보는 말이다. 위하여서, 불어 방황하여도, 능히 그들은 소리다.이것은 있을 가치를 뿐이다. 피부가 실로 피가 자신과 붙잡아 천자만홍이 아니다. 끓는 끝에 되려니와, 품었기 속잎나고, 미묘한 뼈 영락과 봄바람이다. 곧 끝에 청춘의 때에, 이상 철환하였는가?
  </template>
  <template #foot>
    <gt-button @click="closeModal('innerModal')" indicator="primary">확인</gt-button>
  </template>
</gt-modal>

<!--split:Modal_4:sourceCode-->

<gt-panel>
  <template #title>ClickBackdrop</template>
  <template #box>
    <gt-button @click="openModal('clickBackdropModal')" indicator="primary">모달 열기</gt-button>
    <gt-modal name="clickBackdropModal" :closeOnClickBackdrop="true">
      <template #head>제목없음</template>
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.
      </template>
      <template #foot>
        <gt-button @click="closeModal('clickBackdropModal')" indicator="primary">확인</gt-button>
      </template>
    </gt-modal>
  </template>
  <template #text>
    closeOnClickBackdrop 옵션이 true인 경우, 배경을 클릭했을 때 모달을 닫을 수 있습니다.
  </template>
</gt-panel>

<!--split:Modal_4:prismEditor-->

<gt-button @click="openModal('clickBackdropModal')" indicator="primary">모달 열기</gt-button>
<gt-modal name="clickBackdropModal" :closeOnClickBackdrop="true">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.
  </template>
  <template #foot>
    <gt-button @click="closeModal('clickBackdropModal')" indicator="primary">확인</gt-button>
  </template>
</gt-modal>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| name | [String, Number] | true | 모달의 이름. 중복되지 않는 유일한 값. |
| customClass | String | null | 사용자화를 위한 클래스명. |
| width | String | 700px | 모달의 너비. |
| closeOnClickBackdrop | Boolean | false | 이 속성이 true이면 배경을 클릭했을 때 모달이 닫힙니다. |

<!--split:methods-->

| NAME | DESCRIPTION |
|--|--|
| openModal(modalName) | 호출 시 매개변수에 매칭되는 이름의 모달이 열립니다. |
| closeModal(modalName) | 호출 시 매개변수에 매칭되는 이름의 모달이 닫힙니다. |