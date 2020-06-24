<!--
  Attributes
  - name
  - value
  - checked
  - disabled

  Events
  - change

  Comments
  - v-model은 value를 checked 로 사용하게 된다.
   v-model을 사용하지 않거나 :value 로 별도의 value를 지정하고 checked를 이벤트로 받을 수 있다.
-->
<template>
  <label>
    <div class="hw-checkbox" :class="{checked: isChecked, disabled: disabled}" :title="text">
      <span class="checkbox-input"></span>
      <input class="checkbox-original" type="checkbox" :name="name" ref="checkbox" :disabled="disabled" checked="false" @click="update()" />
      <span class="label"><slot></slot></span>
    </div>
  </label>
</template> 

<script>
export default {
  name: 'gt-checkbox',
  props : {
    label: {
      default: null
    },
    name: {
      type: [String],
      default: null
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    all: {
      type: [String],
      default: ''
    },
    checked:{
      //! 생성과 동시에 체크되어 있어야 하는경우 사용
      type: [Boolean],
      default: false
    }
  },
  data() {
    return {
      check : false,
      text : ''
    }
  },
  watch: {
    all(){
      if(this.all == 'A') this.check = true;
      else if(this.all == 'N') this.check = false;
      
      this.$emit('input', this.label);
    },
    name(){
      this.getTitleText();
    }
  },
  mounted() {
    if(this.checked){
      this.check = true;
    }
    this.getTitleText();
  },
  computed: {
    isChecked() {
      if(this.check) return true;
      else return false;
    },
    getName() {
      return (typeof this.name !== undefined) ? this.name : '';
    },
  },
  methods: {
    getTitleText() {
      let inputSlot = this.$slots.default;
      if (inputSlot) {
        this.text = inputSlot[0].text;
      }
    },
    update() {
      this.$emit('all', '');
      this.check = !this.check;
      this.$emit('ischecked', this.check);
      this.$emit('input', this.label);
      this.$emit('change', this.$refs.checkbox.checked);
      this.$emit('checkStatus', { label:this.label , check:this.check });
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #2589db;
label {
  display: inline-block;
  .hw-checkbox {
    position: relative;
    display: inline-block;
    display: block;
    font-size: 14px;
    padding: 0px;
    cursor: pointer;
    user-select: none;
    .checkbox-input {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      border: 1px solid #707070;
      background-color: #fff;
      vertical-align: middle;
    }
    .label {
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 21px);
      white-space: nowrap;
      margin-left: 5px;
      color: #333;
    }
    &.checked {
      .checkbox-input {
        background-color: $primary-color;
        border-color: $primary-color;
        &:after {
          position: absolute;
          content: "";
          border: 2px solid #fff;
          border-left: 0;
          border-top: 0;
          width: 4px;
          height: 9px;
          left: 4px;
          top: 0px;
          transform: rotate(45deg) scaleY(1);
          box-sizing: content-box;
          -webkit-box-sizing: content-box;
        }
      }
    }    

    &:hover {
      .checkbox-input {
        border-color: $primary-color;
      }
    }

    &.disabled {
      cursor: default;
      .checkbox-input {
        background-color: #edf2fc;
        border-color: #dcdfe6;
        &:after {
          border-color: #ccc;
        }
      }
      .label {
        color: #c0c4cc;
      }
    }

    .checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
}

</style>
