import gtbutton from './components/button.vue'
//import gtcollaps from './components/collapse.vue'
import '@/assets/sass/gtris.scss'

const install = (Vue) => {
  Vue.component(gtbutton.name, gtbutton)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  gtbutton
}

export default install