<template>
    <div>
        <button type="button" class="gt-btn gt-btn-primary">Primary({{output}})</button>
    </div>
</template>

<script>
import common from '@/assets/js/common.js'

export default {
  name: 'gtbutton',
  data() {
    return {
        output: ""
    }
  },
  props: {
   awesomeUrl : {
      type: String,
      default: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
    },    
  },
  mounted: function () {
    const awesomeExist = !!document.getElementById('font-awesome')
    if (!awesomeExist) {
      const link = document.createElement('link')
      link.src = this.awesomeUrl
      link.id = 'font-awesome'
      document.body.appendChild(link)
    }
    this.output = common.test();
  }
}
</script>

<style lang="scss">
.test {
    color:aqua
}
</style>
