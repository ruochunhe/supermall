<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
import BSscroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
       type: Boolean,
       default: false
    }
  },
  mounted(){
    this.scroll = new BSscroll(this.$refs.wrapper,{
      // click: this.isCliick,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // observeDOM: true
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }

  }
}
</script>

<style>

</style>