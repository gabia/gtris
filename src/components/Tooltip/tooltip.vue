<template>
  <div class="gt-tooltip" ref="gt-tooltip" :class="[`gt-tooltip-${type}`]"  :data-placement="position" @mouseover="$_mouseover" @mouseleave="$_mouseleave">
    <slot></slot>
    <div class="gt-tt-content"  :class="[`gt-tooltip-${cursor}`]"   ref="gt-content" :style="ct_style" v-show="isVisible" >
      <span class="gt-triangle" :style="tr_style" ref="gt-triangle" ></span>
      <p class="gt-tiny" :class="fontClass" >{{message}}</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: "gt-tooltip",  
  data() {
    return {
      user_style:{ color:'' , fontSize:'' },
      cursor:'show',
      isVisible: false,
      ct_style :{background: 'transparent', color:'transparent', "border-color":'transparent'},
      tr_style :{background: 'transparent', color:'transparent', "border-color":'transparent'}
    }
  },
  props: {
    userStyle:{ type: Object,  required: false },
    type:{ type: String, default : 'primary', required: false  },
    position:{ type: String, default : 'bottom', required: false},
    message: { type: String, default : 'message' },
    fontClass:{ type: String, default : 'gt-font-white', required: false},
  },
  mounted(){ 
    this.user_style.color = (this.userStyle !== undefined && this.userStyle.color !== undefined) ? this.userStyle.color : '#fff' ;
    this.user_style.fontSize = (this.userStyle !== undefined  && this.userStyle.fontSize !== undefined) ? this.userStyle.fontSize : '12px' ;
    this.isVisible = true;     
    setTimeout(() => {
      this.$_setPosition()   
    }, 1);     
  },
  methods:{
    $_mouseover(){
      this.cursor = 'show'
      this.isVisible = true;
    },
    $_mouseleave(){ 
      this.cursor = 'hide'
      this.isVisible = false;
    },
    $_setPosition() {        
      var btn_width =  this.$refs['gt-tooltip'].offsetWidth;
      var btn_height = this.$refs['gt-tooltip'].offsetHeight;
      var cnt_width = this.$refs['gt-content'].offsetWidth;
      var cnt_height = this.$refs['gt-content'].offsetHeight;
      var triangle_width = this.$refs['gt-triangle'].offsetWidth
      var triangle_height = this.$refs['gt-triangle'].offsetHeight      
  
      if(this.position == 'right'){
        this.ct_style = {left: `${btn_width + triangle_width}px`, top: `${( btn_height - cnt_height ) / 2}px`  }
        this.tr_style = {left: `-${triangle_width}px` ,top: `${(cnt_height - triangle_height ) / 2}px` };
      }else if(this.position == 'left'){
        this.ct_style = {right: `${btn_width + triangle_width}px`,  top: `${( btn_height - cnt_height ) / 2}px` };
        this.tr_style = {right: `-${triangle_width}px` ,top: `${( cnt_height - triangle_height ) / 2}px`  };
      }else if(this.position == 'top'){
        this.ct_style = {left: `${(btn_width-cnt_width)/2}px` ,top: `-${(cnt_height + triangle_height)}px` };  
        this.tr_style = {left: `${(cnt_width/2)-(triangle_width/2)}px` , top: `${cnt_height}px` };
      }  else{
        this.ct_style = {left: `${( btn_width - cnt_width ) / 2}px`,  top: `${(btn_height + triangle_height)}px`}
        this.tr_style = {left: `${( cnt_width / 2 ) - ( triangle_width / 2 )}px`, top: `-${triangle_height}px` };
      }            
      this.isVisible = false;        
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/base/_reset.scss';
@import '@/assets/sass/mixins/_triangle.scss';

.gt-tooltip {
  position: relative;
  display: inline-block;
  
  .gt-arrow {
    position: absolute;
  }

  .gt-tt-content {
    //display: none;
    position: absolute;
    box-sizing: border-box;
    padding: 6px 8px;
    font-size: 12px;
    color: $tooltip-font;
    border-radius: 4px; 
    min-width: 100px;
    background: $primary;    
    text-align: center;
    user-select: none;
    cursor: default;
    z-index: 1000;

    &.gt-tooltip-show {
      animation: aniTooltipVisible .1s forwards;
      @keyframes aniTooltipVisible {
        from { transform: scale(0); opacity: 0 }
        to { transform: scale(1); opacity: 1 }
      }
    }
    &.gt-tooltip-hide {
      animation: aniTooltipIvisible .1s forwards;
      @keyframes aniTooltipIvisible {
        from { transform: scale(1); opacity: 1 }
        to { transform: scale(0); opacity: 0 }
      }
    }

  }

  &[data-placement="right"] {
    .gt-triangle {
      position: absolute;
      @include triangle(left, 6px, 6px, $primary);
    }
  }

  &[data-placement="left"] {
    .gt-triangle {
      position: absolute;
      @include triangle(right, 6px, 6px, $primary);
    }
  }

  &[data-placement="bottom"] {    
    .gt-triangle {
      position: absolute;
      @include triangle(top, 6px, 6px, $primary);
    }
  }

  &[data-placement="top"] {
    .gt-triangle {
      position: absolute;
      @include triangle(bottom, 6px, 6px, $primary);
    }
  }

  .gt-triangle {
    position: absolute;
    @include triangle(bottom, 6px, 6px, $primary);
  }

  $types: (
    'primary' : $primary,
    'warning' : $warning,
    'danger' : $danger,
    'info' : $info,
    'secondary' : $secondary,
    'error' : $error,
    'importance' : $importance,
    'white' : $white,
    'attention' : $attention,
  );

  @each $key, $colorType in $types {

    &.gt-tooltip-#{$key} {
      .gt-tt-content {
        background: #{$colorType};
      }
      &[data-placement="right"] {
        .gt-triangle {
          @include triangle(left, 6px, 6px, #{$colorType});
        }
      }
      &[data-placement="left"] {
        .gt-triangle {
          @include triangle(right, 6px, 6px, #{$colorType});
        }
      }
      &[data-placement="bottom"] {
        .gt-triangle {
          @include triangle(top, 6px, 6px, #{$colorType});
        }
      }
      &[data-placement="top"] {
        .gt-triangle {
          @include triangle(bottom, 6px, 6px, #{$colorType});
        }
      }
    }
  }

}
</style>