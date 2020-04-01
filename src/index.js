import gtbutton from './components/button.vue'
import gtcollapse from './components/Collapse/Collapse.vue'
import gtcollapseitem from './components/Collapse/CollapseItem.vue'
import gttooltip from "./components/tooltip.vue"
import gtinput from "./components/Input.vue"
import gttoast from "./components/toast.vue"
import '@/assets/sass/gtris.scss'

const install = (Vue) => {
  Vue.component(gtbutton.name, gtbutton),
  Vue.component(gtcollapse.name, gtcollapse)
  Vue.component(gtcollapseitem.name, gtcollapseitem)
  Vue.component(gttooltip.name, gttooltip)  
  Vue.component(gtinput.name, gtinput)    
  Vue.component(gttoast.name, gttoast)  //! 사용성 테스트 필요  
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  gtbutton
}

export default install