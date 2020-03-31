import gtbutton from './components/button.vue'
import gtcollaps from './components/Collapse/Collapse.vue'
import gttooltip from "./components/tooltip.vue"
import gtinput from "./components/Input.vue"
import gttoast from "./components/toast.vue"
import '@/assets/sass/gtris.scss'

const install = (Vue) => {
  Vue.component(gtbutton.name, gtbutton),
  Vue.component(gtcollaps.name, gtcollaps)
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