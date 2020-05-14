<template>
  <div id="app">
    <!-- default -->
    <!-- <gt-collapse>
      <gt-collapse-item>
        <template #head>Default Type Head 1</template>
        <template #content>Default Type Content 1</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>Default Type Head 2</template>
        <template #content>Default Type Content 2</template>
      </gt-collapse-item>
    </gt-collapse>

    <br><br> -->

    <!-- Activated -->
    <!-- <gt-collapse customClass="bella" init="item1">
      <gt-collapse-item name="item1">
        <template #head>Activated Head</template>
        <template #content>Activated Content</template>
      </gt-collapse-item>
      <gt-collapse-item name="item2">
        <template #head>Head</template>
        <template #content>Content</template>
      </gt-collapse-item>
    </gt-collapse>

    <br><br> -->

    <!-- accordion -->
    <!-- <gt-collapse accordion>
      <gt-collapse-item>
        <template #head>Accordion Type Head 1</template>
        <template #content>Accordion Type Content 1</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>Accordion Type Head 2</template>
        <template #content>Accordion Type Content 2</template>
      </gt-collapse-item>
    </gt-collapse>

    <br><br> -->

    <!-- event -->
    <!-- <gt-collapse :opened="$_onCollapseOpend" :closed="$_onCollapseClosed">
      <gt-collapse-item>
        <template #head>head</template>
        <template #content>content1</template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>head</template>
        <template #content>content2</template>
      </gt-collapse-item>
    </gt-collapse>

    <br><br> -->

    <!-- nested -->
    <!-- <gt-collapse>
      <gt-collapse-item>
        <template #head>Parent Head 1</template>
        <template #content>
          e.g. Nested Collapse
          <gt-collapse accordion>
            <gt-collapse-item>
              <template #head>Child Head 1</template>
              <template #content>Child Content 1</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>Child Head 2</template>
              <template #content>Child Content 2</template>
            </gt-collapse-item>
            <gt-collapse-item>
              <template #head>Child Head 3</template>
              <template #content>Child Content 3</template>
            </gt-collapse-item>
          </gt-collapse>
        </template>
      </gt-collapse-item>
      <gt-collapse-item>
        <template #head>Parent Head 2</template>
        <template #content>Parent Content 2</template>
      </gt-collapse-item> 
    </gt-collapse> -->
    <!-- modal -->
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

    <!-- modal -->
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
  </div>
</template>

<script>
import gtbutton from './components/button.vue'
import gtModal from './components/Modal.vue'
// import gtCollapse from './components/Collapse/Collapse.vue'
// import gtCollapseItem from './components/Collapse/CollapseItem.vue'
export default {
  name: 'app2',
  components: {
    // gtCollapse,
    // gtCollapseItem
    gtbutton,
    gtModal
  },
  methods: {
    $_onCollapseOpend(payload) {
      console.log('collapse opened', payload);
    },
    $_onCollapseClosed(payload) {
      console.log('collapse closed', payload);
    },
    $_openModal(name) {
      this.$eventHub.$emit(`gt::opened::modal-${name}`, name); 
    },
    $_closeModal(name) {
      this.$eventHub.$emit(`gt::closed::modal-${name}`, name); 
    },
    $_submit(name, data = null) {
      window.alert(data);
      this.$_closeModal(name);
    }
  }
}
</script>
