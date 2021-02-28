<template>
  <div>
    <swiper>
       <swiper-item v-for="(item, index) in topmages" :key="index" class="detailSwiperItem">
         <img :src="item" alt="">
       </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topmages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detailSwiperItem img{
    width: 100vw
  }
  .detailSwiperItem{
    height: 300px;
  }
</style>