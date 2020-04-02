<template>
  <div class="gt-tooltip" ref="gt-tooltip" :class="[`gt-tooltip-${type}`]"  :data-placement="position" @mouseover="$_mouseover" @mouseleave="$_mouseleave">
    <slot></slot>
    <div class="gt-tt-content"  ref="gt-content" :style="ct_style" v-show="isVisible" >
      <span class="gt-triangle" :style="tr_style" ref="gt-triangle" ></span>
      <p class="gt-tiny">{{message}}</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: "gt-tooltip",  
  data() {
    return {
      isVisible: false,
      ct_style :{background: 'transparent', color:'transparent', "border-color":'transparent'},
      tr_style :{background: 'transparent', color:'transparent', "border-color":'transparent'}
    }
  },
  props: {
    type:{ type: String, default : 'primary'},
    position:{ type: String, default : 'bottom'},
    message: { type: String, default : 'message' }    
  },
  mounted(){ 
    this.isVisible = true;     
    setTimeout(() => {
      this.$_setPosition()   
    }, 1);     
  },
  methods:{
    $_mouseover(){
     this.isVisible = true;
    },
    $_mouseleave(){ 
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

  .gt-tooltip-content, .gt-tt-content {
    //display: none;
    position: absolute;
    box-sizing: border-box;
    padding: 0px 15px; 
    min-width: 100px;
    background: $primary;    
    text-align: center;
    user-select: none;
    cursor: default;
    z-index: 1000;
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
    'info' : $info
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