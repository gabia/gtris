<template>
  <div class="gt-pagination">
    <button type="button" class="gt-pagination-nav" :disabled="enabledPrev" :class="{'gt-disabled': enabledPrev}"  @click="setPageFirst()"><i class="gi gi-double-arrows-left"></i></button>
    <button type="button" class="gt-pagination-nav" :disabled="enabledPrev"  :class="{'gt-disabled': enabledPrev}" @click="setPagePrev()"><i class="gi gi-short-arrow-left-alt"></i></button>
    <button type="button" class="gt-pagination-num" v-for="(p, index) in paginate" :key="index" :class="{'gt-active':p == page}" @click="setPage(p)">
        {{ p }}
    </button>
    <button type="button" class="gt-pagination-nav" :disabled="enabledNext" :class="{'gt-disabled': enabledNext}" @click="setPageEnd()"><i class="gi gi-double-arrows-right" /></button>
    <button type="button" class="gt-pagination-nav" :disabled="enabledNext" :class="{'gt-disabled': enabledNext}"  @click="setPageNext()"><i class="gi gi-short-arrow-right-alt"></i></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1 // 현재 페이지
    };
  },
  props: {
    length : {
      type: Number,
      default: 10
    },
    current_page : {
      type: Number,
      default: 1,
    },
    from : {
      type: Number,
      default: 1,
    },
    last_page : {
      type: Number,
      default: 10,
    },
    per_page : {
      type: Number,
      default: 10,
    },
    to : {
      type: Number,
      default: 0,
    },
    total : {
      type: Number,
      default: 0,
    }
  },
  computed: {
    paginate : function() {
      // 현재 페이지 번호 동기화
      let number = [];
      let start = Math.floor((this.current_page - 1)/this.length)*this.length + 1;
      let end = start + this.length - 1;
      if(end > this.last_page) end = this.last_page;
      for(var p = start; p <= end; p++){
        number.push(p);
      }
      return number;
    },
    enabledNext() {
      if((this.current_page + 1) <= this.last_page) return false;
      else return true;
    },
    enabledPrev() {
      if((this.current_page - 1) > 0) return false;
      else return true;
    },
    isVisible(){
      return (this.last_page > 1) ? true : false;
    }
  },
  methods : {    
    setPage(num) {      
      if (num > this.last_page || num < 0) {
        throw(e) => {
          alert("잘못된 접근 : " + e);
        }
      } else {
        // Set Page
        this.page = num;
        this.current_page = num;
        this.$emit('input', this.page); // 현재 페이지
      }
    },
    setPageNext() {
      if(this.enabledNext !== false || this.page === 0 ){
        return;
      }

      let tmpNext = Math.ceil(this.current_page/ this.length) * this.length + 1 ; 
      if (tmpNext < this.last_page  ){
        this.setPage(tmpNext);
      }else{
        this.setPage(this.last_page);
      }
    },
    setPagePrev() {
      if(this.enabledPrev !== false || this.page === 0){
        return;
      }
      let tmpPrev = (Math.ceil(this.current_page/ this.length) - 1 ) * this.length  ;
      if( tmpPrev > 0 ) {	
        this.setPage(tmpPrev);
      }else{
        this.setPage(1);
      }
    },
    setPageFirst() {
      if((this.current_page - 1) > 0){
        let _page = 1;
        this.setPage(_page);
      }
    },
    setPageEnd() {
      if((this.current_page + 1) <= this.last_page){
        let _page = this.last_page;
        this.setPage(_page);
      }
    },
    isActive(Number) {
      if(this.current_page == Number) return true;
      else return false;
    }
  }
}
</script>

<style lang="scss" scoped>/* Pagination */
.gt-pagination { display: flex; }

.gt-pagination .gt-pagination-nav,
.gt-pagination .gt-pagination-num { 
  display: inline-block;
  min-width: 34px;
  max-height: 34px;
  line-height: 34px;
  margin: 0 4px;
  font-size: 13px;
  font-weight: 500;
  font-family: arial;
  color: #909090;
  border: 1px solid #d6d6d6;
  user-select: none;
  border-radius: 4px;
  transition-duration: .1s;
  outline: 0;
}

.gt-pagination .gt-pagination-nav:hover,
.gt-pagination .gt-pagination-num:hover {
  background: #ccc;
  border-color: #d6d6d6;
  color: #fff
}

.gt-pagination .gt-pagination-nav.gt-active,
.gt-pagination .gt-pagination-num.gt-active {
  background: #2985db;
  border-color: #2985db;
  color: #fff;
  pointer-events: none
}

.gt-pagination .gt-pagination-nav.gt-disabled,
.gt-pagination .gt-pagination-num.gt-disabled {
  pointer-events: none;
  opacity: .5;
}

.gt-flex-center {
  justify-content: center;
}
.gt-flex-right {
  justify-content: flex-end;
}
</style>