<template>
  <div>
    <div class="hy-swiper">
      <div class="swiper" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove" ref="swiper">
        <slot></slot>
        <!-- <div v-for="item in banners" :key="item.acm" class="slide" >
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </div> -->
      </div>
      <div class="indicator" v-if="showIndicator && slideCount > 1">
        <ul>
          <li v-for="(item,index) in slideCount" :key="index" class="indicatorItem" :class="{active: currentIndex == index + 1 || currentIndex == index-0+5 || currentIndex == index - 3}"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      totalWidth: 0,
      swiperStyle: {}, //swiper的样式
      currentIndex: 1, //当前的index
      totalWidth: 0, //swiper的宽度
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 100);
  },
  methods: {
    // 操作dom，在dom前后添加slide
    handleDom() {
      let swiperEl = this.$refs.swiper
      let swiperEls = swiperEl.getElementsByClassName("slide");
      this.slideCount = swiperEls.length;
      if (this.slideCount > 1) {
        let cloneFirst = swiperEls[0].cloneNode(true);
        let cloneLast = swiperEls[this.slideCount - 1].cloneNode(true);
        swiperEl.appendChild(cloneFirst);
        swiperEl.insertBefore(cloneLast, swiperEls[0]);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      this.setTransform(-this.totalWidth);
    },
    //设置滚动的位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
    },
    startTimer: function () {
     this.playTimer = setInterval(() => {
        //每隔1500ms动一次
        this.currentIndex++;
        this.swiperStyle.transition = this.animDuration + 'ms'
        this.setTransform(-this.currentIndex * this.totalWidth);
        //当图片移到最后一张时，延迟500ms切换到第一张
        if (this.currentIndex === 5) {
          setTimeout(() => {
            this.swiperStyle.transition = "0ms";
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth);
          },this.animDuration)
        }
      }, this.interval);
    },
    //停止定时器
    stopTimer: function(){
      clearInterval(this.playTimer)
    },
    //记录触摸时的位置
    touchStart(e){
      this.stopTimer()
      this.startX = e.touches[0].pageX
      console.log(this.startX);
    },
    //计算移动距离 让轮播图随着移动的距离动
    touchMove(e){
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX 
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      this.swiperStyle.transition = "0ms";

      this.setTransform(moveDistance)
    },
    //触摸结束，判断触摸的比例，决定是否移动一页
    touchEnd(e){
      if(this.moveX == 0){
        return
      }
      this.moveX = this.currentX - this.startX
      this.moveRatio = 0.25
      if(this.moveX > 0 && this.moveX / this.totalWidth >= this.moveRatio){
        this.currentIndex -- 
      }else if(this.moveX < 0 && this.moveX / this.totalWidth <= -this.moveRatio){
        this.currentIndex ++ 
      }
      //当移动到最后一页时，过渡完后切换到第一张
      if (this.currentIndex === 5) {
          setTimeout(() => {
            this.swiperStyle.transition = "0ms";
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth);
          },this.animDuration)
        }
      //当移动到最后一页时，过渡完后切换到最后一张
      if (this.currentIndex === 0) {
          setTimeout(() => {
            this.swiperStyle.transition = "0ms";
            this.currentIndex = 4
            this.setTransform(-this.currentIndex * this.totalWidth);
          },this.animDuration)
        }
        this.swiperStyle.transition = this.animDuration + 'ms';
        this.setTransform(-this.currentIndex * this.totalWidth);
        this.startTimer()
    },

  },
};
</script>

<style scoped>
/* 让图片横着排列 */

.swiper {
  display: flex;
  position: relative;
  width: 100vw
  /* width: 750px; */
}

.hy-swiper {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100vw
}
.indicator{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.indicator ul{
  display: flex

}
.indicatorItem {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  margin: 0 4px;
}
.active {
  background:rgba(212,62,46,1.0);
}
</style>