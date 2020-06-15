<template>
  <div class="d-inline-block" @mouseenter="makeTT" @mouseleave="removeTT">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gt-tooltip",
  props: {
    content: {
      type: String,
      required: true
    },
    placement: {
      Type: String,
      required: false,
      default: "top"
    },
    background: {
      Type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    gtrisColor:{
      type:Object,
      required: false
    },
    fontSize: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      gtrisColorClassFlag:{
        'primary': '#2985db',
        'secondary': '#ebebeb',        
        'info' :'#909090',        
        'warning': '#ea6923',        
        'danger': '#C70909',        
        'error': '#D50000',        
        'importance': '#FDC036',
        'white': '#fff'        
      }
    }
  },  
  methods: {
    makeTT(event) {
      let ttBtn = event.currentTarget;
      /* 툴팁 Division 생성 */
      let tt = document.createElement("div");
      tt.classList.add("gt-tooltip");
      tt.innerHTML = this.content; //ttBtn.getAttribute("data-tooltip");

      if (document.querySelector(".gt-tooltip")) {
        document.body.removeChild(document.querySelector(".gt-tooltip"));
      }

      /* 툴팁 Append */
      document.body.appendChild(tt);
      tt.classList.add("gt-tooltip-show");

      /* Caret(꼬다리) Division 생성 */
      let caret = document.createElement("div");
      caret.classList.add("gt-tooltip-caret");
      tt.appendChild(caret);

      /* 툴팁 위치 */
      this.setPosition(ttBtn, tt);
    },
    /* 방향에 따라 툴팁 위치 변경 */
    setPosition: function(ttBtn, tt) {
      let placement;
      let bg;
      let fontColor;
      let fontSize;
      let ttBtnW;
      let ttBtnH;
      let ttBtnL;
      let ttBtnT;
      let ttW;
      let ttH;
      let caret;
      let caretW;
      let caretH;
      let offset = 10;

      /* 툴팁 방향 가져오기 */
      placement = this.placement; //ttBtn.getAttribute("data-tooltip-placement");

      /* 툴팁 배경 컬러 변경 */
      bg = this.background; //ttBtn.getAttribute('data-tooltip-background');
      if (bg === null || bg === undefined) bg = "#575757";

      /* gtris class 가 우선순위가 높음 */
      if(this.gtrisColor !== undefined && this.gtrisColor.background !== undefined ){
        bg = this.gtrisColorClassFlag[this.gtrisColor.background];
      }

      tt.style.background = bg;

      /* Caret(꼬다리) */
      caret = this.makeCaret(
        tt.querySelector(".gt-tooltip-caret"),
        placement,
        bg
      );

      /* 툴팁 폰트 컬러 변경 */
      fontColor = this.color; //ttBtn.getAttribute('data-tooltip-color');
      tt.style.color = fontColor;

      /* gtris class 가 우선순위가 높음 */
      if(this.gtrisColor !== undefined && this.gtrisColor.color !== undefined ){
        tt.style.color = this.gtrisColorClassFlag[this.gtrisColor.color];
      }


      /* 툴팁 폰트 크기 변경 */
      fontSize = this.fontSize; //ttBtn.getAttribute('data-tooltip-fontSize');
      tt.style.fontSize = fontSize;

      /* 툴팁 요소: 너비, 높이, 좌표 */
      ttBtnW = Math.ceil(ttBtn.offsetWidth);
      ttBtnH = Math.ceil(ttBtn.offsetHeight);
      ttBtnL = Math.ceil(ttBtn.getBoundingClientRect().left);
      ttBtnT = Math.ceil(
        window.pageYOffset + ttBtn.getBoundingClientRect().top
      );
      ttW = Math.ceil(tt.offsetWidth);
      ttH = Math.ceil(tt.offsetHeight);
      // ttL = Math.ceil(tt.getBoundingClientRect().left);
      // ttT = Math.ceil(tt.getBoundingClientRect().top);
      caretW = Math.ceil(caret.offsetWidth);
      caretH = Math.ceil(caret.offsetHeight);

      /* 방향에 따른 툴팁 위치 조정 */
      switch (placement) {
        case "left":
          tt.style.left = ttBtnL - ttW - offset + "px";
          tt.style.top = ttBtnT + (ttBtnH - ttH) / 2 + "px";
          caret.style.left = ttW + "px";
          caret.style.top = ttH / 2 - caretH / 2 + "px";
          tt.classList.add("gt-transform-origin-center-right"); // The transform-origin CSS property sets the origin for an element's transformations.(https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
          break;

        case "right":
          tt.style.left = ttBtnL + ttBtnW + offset + "px";
          tt.style.top = ttBtnT + (ttBtnH - ttH) / 2 + "px";
          caret.style.left = -caretW + "px";
          caret.style.top = ttH / 2 - caretH / 2 + "px";
          tt.classList.add("gt-transform-origin-center-left");
          break;

        case "bottom":
          tt.style.left = ttBtnL + (ttBtnW - ttW) / 2 + "px";
          tt.style.top = ttBtnT + ttBtnH + offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = -caretH + "px";
          tt.classList.add("gt-transform-origin-top-center");
          break;

        case "top-left":
          tt.style.left = ttBtnL + "px";
          tt.style.top = ttBtnT - ttH - offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = ttH + "px";
          tt.classList.add("gt-transform-origin-bottom-left");
          break;

        case "top-right":
          tt.style.left = ttBtnL + Math.abs(ttBtnW - ttW) + "px";
          tt.style.top = ttBtnT - ttH - offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = ttH + "px";
          tt.classList.add("gt-transform-origin-bottom-right");
          break;

        case "bottom-left":
          tt.style.left = ttBtnL + "px";
          tt.style.top = ttBtnT + ttBtnH + offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = -caretH + "px";
          tt.classList.add("gt-transform-origin-top-left");
          break;

        case "bottom-right":
          tt.style.left = ttBtnL + Math.abs(ttBtnW - ttW) + "px";
          tt.style.top = ttBtnT + ttBtnH + offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = -caretH + "px";
          tt.classList.add("gt-transform-origin-top-right");
          break;

        case "top":
          tt.style.left = ttBtnL + (ttBtnW - ttW) / 2 + "px";
          tt.style.top = ttBtnT - ttH - offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = ttH + "px";
          tt.classList.add("gt-transform-origin-bottom-center");
          break;

        default:
          tt.style.left = ttBtnL + (ttBtnW - ttW) / 2 + "px";
          tt.style.top = ttBtnT - ttH - offset + "px";
          caret.style.left = ttW / 2 - caretW / 2 + "px";
          caret.style.top = ttH + "px";
          tt.classList.add("gt-transform-origin-bottom-center");
          break;
      }
    },

    /* 방향에 따른 꼬다리 스타일링 */
    makeCaret: function(caret, placement, bgColor) {
      switch (placement) {
        case "left":
          caret.style.borderWidth = "6px 0px 6px 6px";
          caret.style.borderLeftColor = bgColor;
          break;

        case "right":
          caret.style.borderWidth = "6px 6px 6px 0px";
          caret.style.borderRightColor = bgColor;
          break;

        case "top":
          caret.style.borderWidth = "6px 6px 0px 6px";
          caret.style.borderTopColor = bgColor;
          break;

        case "top-left":
          caret.style.borderWidth = "6px 6px 0px 6px";
          caret.style.borderTopColor = bgColor;
          break;

        case "top-right":
          caret.style.borderWidth = "6px 6px 0px 6px";
          caret.style.borderTopColor = bgColor;
          break;

        case "bottom":
          caret.style.borderWidth = "0px 6px 6px 6px";
          caret.style.borderBottomColor = bgColor;
          break;

        case "bottom-left":
          caret.style.borderWidth = "0px 6px 6px 6px";
          caret.style.borderBottomColor = bgColor;
          break;

        case "bottom-right":
          caret.style.borderWidth = "0px 6px 6px 6px";
          caret.style.borderBottomColor = bgColor;
          break;

        default:
          caret.style.borderWidth = "6px 6px 0px 6px";
          caret.style.borderTopColor = bgColor;
          break;
      }
      return caret;
    },
    /* Remove Tooltip */
    removeTT: function() {
      if (document.querySelector(".gt-tooltip")) {
        let tt = document.body.querySelector(".gt-tooltip");
        tt.classList.add("gt-tooltip-hide");
        tt.addEventListener("animationend", () => {
          document.body.removeChild(document.body.querySelector(".gt-tooltip"));
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.d-inline-block {
  display: inline-block;
}
/* Tooltip */
.gt-tooltip {
  z-index: 1030;
  position: absolute;
  top: -1000px;
  left: -1000px;
  padding: 6px 8px;
  font-size: 12px;
  color: #fff;
  background: #575757;
  border-radius: 4px;
  text-align: center;
  user-select: none;
  font-family: malgun gothic, dotum;
  cursor: default;
  .gt-tooltip-caret {
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    border-color: transparent;
  }
  &.gt-tooltip-show {
    animation: aniTooltipVisible 0.1s forwards;
  }
}

@keyframes aniTooltipVisible {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.gt-tooltip.gt-tooltip-hide {
  animation: aniTooltipIvisible 0.1s forwards;
}

@keyframes aniTooltipIvisible {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}

/* Animate(zoom) */
@keyframes animatezoom {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Transform-Origin */
.gt-transform-origin-top-center {
  transform-origin: 50% 0;
}

.gt-transform-origin-bottom-center {
  transform-origin: 50% 100%;
}

.gt-transform-origin-center-right {
  transform-origin: 100% 50%;
}

.gt-transform-origin-center-left {
  transform-origin: 0 50%;
}

.gt-transform-origin-bottom-left {
  transform-origin: 0 100%;
}

.gt-transform-origin-bottom-right {
  transform-origin: 100% 100%;
}

.gt-transform-origin-top-left {
  transform-origin: 0 0;
}

.gt-transform-origin-top-right {
  transform-origin: 100% 0;
}
</style>
