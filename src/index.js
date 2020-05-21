import gtbutton from './components/Button/button.vue'
import gtcollapse from './components/Collapse/Collapse.vue'
import gtcollapseitem from './components/Collapse/CollapseItem.vue'
import gttooltip from "./components/Tooltip/tooltip.vue"
import gtinput from "./components/Input/Input.vue"
import gttoast from "./components/Toast/toast.vue"
import gtpagination from "./components/Pagination/Pagination.vue"
import gtpaginationscroll from "./components/Pagination/PaginationInfinite.js"
import gtModal from "./components/Modal.vue"

const install = (Vue) => {
  Vue.component(gtbutton.name, gtbutton),
  Vue.component(gtcollapse.name, gtcollapse)
  Vue.component(gtcollapseitem.name, gtcollapseitem)
  Vue.component(gttooltip.name, gttooltip)
  Vue.component(gtpagination.name, gtpagination)
  Vue.directive(gtpaginationscroll.name, gtpaginationscroll)
  Vue.component(gtinput.name, gtinput)    
  Vue.component(gttoast.name, gttoast)  //! 사용성 테스트 필요  
  Vue.component(gtModal.name, gtModal)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  gtbutton
}

export default install