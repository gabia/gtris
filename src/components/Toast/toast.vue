<template>
  <transition name="gt-toast-fade">
    <div class="gt-toast-container" :data-direction="direction" v-show="isVisible" >
      <div class="gt-toast " :class="`gt-toast-${type}`">
        {{message}}       
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "gt-toast",  
  props:{
    value:{ type: Object}
  },
  watch: {
    value(newVal) {
      if(this.bubbleLock == false && this.$_payloadChecker(newVal) == true ){
        this.bubbleLock = true;
        this.type = newVal.type;
        this.direction = newVal.direction;
        this.message = newVal.message;
        this.isVisible = true;

        setTimeout(() => {
          this.isVisible = false;
          this.bubbleLock = false;
        }, 2000); 
      } 
    }
  },  
  data() {
    return {
      bubbleLock: false,
      isVisible: false,     
      type:'primary',
      message:'',
      direction:'center-top',       
    }
  },
  methods: {
    $_payloadChecker(payload){
      let return_val = true;
      if(payload.type === undefined || ['primary','info','warning','danger' ].indexOf(payload.type) === -1 ){
        return_val = false;
      }

      if(payload.direction === undefined ||  ['right-top','left-top','right-bottom','left-bottom','center-top','center-bottom' ].indexOf(payload.type) !== -1 ){
        return_val = false;
      } 
      
      if(typeof payload.message !== 'string'){
        return_val = false;
      }

      return return_val;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/base/_reset.scss';

.gt-toast-fade-enter-active, .gt-toast-fade-leave-active {
  transition: opacity .5s;
}
.gt-toast-fade-enter, .gt-toast-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* toast */
.gt-toast-container {
	position: fixed;
	z-index: 1000;
	//opacity: 0;
	user-select: none;
	//transition-duration: .2s;

	&[data-direction="right-top"] {
		top: 12px;
		right: 12px;
	}

	&[data-direction="left-top"] {
		top: 12px;
		left: 12px;
	}

	&[data-direction="right-bottom"] {
		right: 12px;
		bottom: 12px;
	}

	&[data-direction="left-bottom"] {
		left: 12px;
		bottom: 12px;
	}

	&[data-direction="center-top"] {
		left: 50%;
		top: 12px;
		transform: translate(-50%, 0);
	}

	&[data-direction="center-bottom"] {
		left: 50%;
		bottom: 12px;
		transform: translate(-50%, 0);
	}

	.gt-toast {
		position: relative;
		pointer-events: auto;
		overflow: hidden;
		padding: 10px;
		width: 300px;
		font-size: 0.8em;
		color: $toast-font;
		background-color: $toast-bg;
		box-shadow: 2px 2px 10px $toast-shadow;
		cursor: pointer;

		&.gt-toast-over {
			transition-duration: .2s;
			&.gt-animate-opacity {animation:animatepopup 0.3s backwards}
		}

		&.gt-toast-primary {
			background-color:  $primary;
		}

		&.gt-toast-info {
			background-color: $info;
		}

		&.gt-toast-warning {
			background-color: $warning;
		}

		&.gt-toast-danger {
			background-color: $danger;
		}
	}
}
</style>