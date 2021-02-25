<template>
  <div>
    <swiper ref="swiper">
      <swiper-item v-for="(item, index) in banners" :key="index">
         <a :href="item.link">
            <img :src="item.image" alt="" @load="homeSwiperImgLoad">
          </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper/index.js'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
    isImgLoad: false
    }
  },
  methods: {
    homeSwiperImgLoad() {
      if (!this.isImgLoad) {
        this.$emit('homeSwiperImgLoad')
      }
      this.isImgLoad = true

    }
  }
}
</script>
<style scoped>
  .slide {
    flex-shrink: 0;
  }
  .slide img {
    width: 100vw;
  }
</style>