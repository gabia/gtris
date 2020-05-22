<!--split:basic-->
[ { "componentName":"Modal_1", "menuName":"basic" , "sourceCode":"" , "prismEditor" : "" }, { "componentName":"Modal_2", "menuName":"Untitled" , "sourceCode":"" , "prismEditor" : "" } ,{ "componentName":"Modal_3", "menuName":"Nested" , "sourceCode":"" , "prismEditor" : "" }]

<!--split:Modal_1:sourceCode-->

<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <gtbutton @click="$_openModal('basicModal')" indicator="primary">Open Modal</gtbutton>
    <gt-modal name="basicModal">
      <template #head>제목없음</template>
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
        언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
      </template>
      <template #foot>
        <gtbutton @click="$_closeModal('basicModal')" indicator="secondary">취소</gtbutton>
        <gtbutton @click="$_submit('basicModal', 'data')" indicator="primary">확인</gtbutton>
      </template>
    </gt-modal>
  </template>
</gt-panel>

<!--split:Modal_1:prismEditor-->

<gtbutton @click="$_openModal('basicModal')" indicator="primary">Open Modal</gtbutton>
<gt-modal name="basicModal">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('basicModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('basicModal', 'data')" indicator="primary">확인</gtbutton>
  </template>
</gt-modal>

<!--split:Modal_2:sourceCode-->

<gt-panel>
  <template #title>Untitled</template>
  <template #box>
    <gtbutton @click="$_openModal('untitledModal')" indicator="primary">Open Modal</gtbutton>
    <gt-modal name="untitledModal">
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
        언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
      </template>
      <template #foot>
        <gtbutton @click="$_closeModal('untitledModal')" indicator="secondary">취소</gtbutton>
        <gtbutton @click="$_submit('untitledModal', 'data')" indicator="primary">확인</gtbutton>
      </template>
    </gt-modal>
  </template>
</gt-panel>

<!--split:Modal_2:prismEditor-->

<gtbutton @click="$_openModal('untitledModal')" indicator="primary">Open Modal</gtbutton>
<gt-modal name="untitledModal">
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('untitledModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('untitledModal', 'data')" indicator="primary">확인</gtbutton>
  </template>
</gt-modal>

<!--split:Modal_3:sourceCode-->

<gt-panel>
  <template #title>Nested</template>
  <template #box>
    <gtbutton @click="$_openModal('outerModal')" indicator="primary">Open Modal</gtbutton>
    <gt-modal name="outerModal">
      <template #head>제목없음</template>
      <template #body>
        청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
        언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
      </template>
      <template #foot>
        <gtbutton @click="$_closeModal('outerModal')" indicator="secondary">취소</gtbutton>
        <gtbutton @click="$_submit('outerModal', 'data')" indicator="primary">확인</gtbutton>
        <gtbutton @click="$_openModal('innerModal')" indicator="primary">Open innerModal</gtbutton>
      </template>
    </gt-modal>
    <gt-modal name="innerModal" width="400px"> 
      <template #body>
        못하다 만물은 살았으며, 물방아 그들의 때문이다. 끓는 같은 이것은 예가 커다란 교향악이다. 사랑의 인간에 그들에게 청춘 사람은 같은 인생을 구하기 말이다. 있음으로써 굳세게 아니더면, 것은 간에 그것을 황금시대의 것이다. 인간이 황금시대의 끝에 용기가 힘있다. 바이며, 보배를 놀이 너의 튼튼하며, 보는 말이다. 위하여서, 불어 방황하여도, 능히 그들은 소리다.이것은 있을 가치를 뿐이다. 피부가 실로 피가 자신과 붙잡아 천자만홍이 아니다. 끓는 끝에 되려니와, 품었기 속잎나고, 미묘한 뼈 영락과 봄바람이다. 곧 끝에 청춘의 때에, 이상 철환하였는가?
      </template>
      <template #foot>
        <gtbutton @click="$_closeModal('innerModal')" indicator="secondary">취소</gtbutton>
        <gtbutton @click="$_submit('innerModal', 'data')" indicator="primary">확인</gtbutton>
      </template>
    </gt-modal>
  </template>
</gt-panel>

<!--split:Modal_3:prismEditor-->

<gtbutton @click="$_openModal('outerModal')" indicator="primary">Open Modal</gtbutton>
<!-- outer modal -->
<gt-modal name="outerModal">
  <template #head>제목없음</template>
  <template #body>
    청춘이 이름자를 시와 같이 피어나듯이 그러나 시인의 없이 있습니다. 새겨지는 풀이 애기 묻힌 우는 같이 까닭입니다. 덮어 그리워 묻힌 듯합니다. 아침이 이름자를 사람들의 별빛이 경, 내 파란 아무 있습니다. 하나에 풀이 패, 거외다. 하나에 내 않은 하나의 무엇인지 시인의 북간도에 이름과, 봅니다. 어머님, 하나에 헤일 까닭입니다. 그리워 나의 프랑시스 없이 나는 시와 있습니다. 남은 가난한 마리아 동경과 이제 까닭입니다. 별빛이 파란 이런 별에도 때 한 있습니다.<br>
    언덕 말 별들을 새겨지는 계십니다. 하나에 쉬이 사랑과 봅니다. 불러 패, 보고, 오면 속의 까닭입니다. 별이 다 이국 가슴속에 흙으로 한 북간도에 애기 있습니다. 쉬이 위에 내일 이름과, 듯합니다. 애기 이네들은 봄이 무성할 헤는 듯합니다. 하나에 남은 이름자를 청춘이 위에도 추억과 봅니다. 한 이름자 딴은 어머니 어머니, 있습니다. 못 그리고 애기 나는 이름과, 북간도에 같이 위에 내린 까닭입니다. 내린 가슴속에 이런 북간도에 이웃 별들을 듯합니다.
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('outerModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('outerModal', 'data')" indicator="primary">확인</gtbutton>
    <gtbutton @click="$_openModal('innerModal')" indicator="primary">Open innerModal</gtbutton>
  </template>
</gt-modal>
<!-- inner modal -->
<gt-modal name="innerModal">
  <template #head>nested modal</template>
  <template #body>
    못하다 만물은 살았으며, 물방아 그들의 때문이다. 끓는 같은 이것은 예가 커다란 교향악이다. 사랑의 인간에 그들에게 청춘 사람은 같은 인생을 구하기 말이다. 있음으로써 굳세게 아니더면, 것은 간에 그것을 황금시대의 것이다. 인간이 황금시대의 끝에 용기가 힘있다. 바이며, 보배를 놀이 너의 튼튼하며, 보는 말이다. 위하여서, 불어 방황하여도, 능히 그들은 소리다.이것은 있을 가치를 뿐이다. 피부가 실로 피가 자신과 붙잡아 천자만홍이 아니다. 끓는 끝에 되려니와, 품었기 속잎나고, 미묘한 뼈 영락과 봄바람이다. 곧 끝에 청춘의 때에, 이상 철환하였는가?
  </template>
  <template #foot>
    <gtbutton @click="$_closeModal('innerModal')" indicator="secondary">취소</gtbutton>
    <gtbutton @click="$_submit('innerModal', 'data')" indicator="primary">확인</gtbutton>
  </template>
</gt-modal>

<!--split:props-->

| OPTION | TYPE | DEFAULT | DESCRIPTION |
|--|--|--|----| 
| name | [String, Number] | true | - |
| customClass | String | false | null |
| width | String | false | default: 700px |