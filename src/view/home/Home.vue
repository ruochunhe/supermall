<template>
  <div id="home">
    <home-nav-bar class="homeNavBar"></home-nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="topTabControl" class="topTabControl" v-show="isShowTopTabControl"></tab-control>
    <scroll ref="scroll"
            class="content"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            >
      <!-- <swiper :banners="this.banners" class="swiper"></swiper> -->
      <home-swiper :banners="this.banners" @homeSwiperImgLoad="homeSwiperImgLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="middleTabControl"></tab-control>
      <goods-list :goods="showGoods" :currentType="currentType" ></goods-list>
    </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import homeNavBar from './childComps/HomeNavBar'
import recommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'


import { getHomeMultidata, getHomeGoods } from 'network/home'
import { debounce } from 'common/utils.js'

import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeSwiper,
    homeNavBar,
    recommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners:[],
      recommend: [],
      currentType: 'pop',
      goods: {
        'pop':{ page: 0, list: []},
        'new':{ page: 0, list: []},
        'sell':{ page: 0, list: []}
      },
      isShowBackTop: false,
      tabOffsetTop: 0,
      isShowTopTabControl: false,
      savePosition: 0
    }
  },

  created(){
    //获取banner和recommend数据
    this.getHomeMultidata()

    //获取goods数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    console.log(this.$store.state.loading);
    const refresh = debounce( this.$refs.scroll.refresh, 50)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.savePosition)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.savePosition = this.$refs.scroll.scroll.y
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    tabClick(index){
      console.log(index);
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.middleTabControl.currentIndex = index
      this.$refs.topTabControl.currentIndex = index
    },
    //获取banner和recommend数据方法
    getHomeMultidata(){
      getHomeMultidata().then( res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    //获取goods数据方法
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then( res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
      })
    },
    loadMore() {
        this.getHomeGoods(this.currentType)
    },
    //判断是否显示BackTop
    contentScroll(position){
      this.isShowBackTop = -(position.y) > 1000
      this.isShowTopTabControl = -position.y  >= this.tabOffsetTop
    },
    //点击BackTop回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    homeSwiperImgLoad(){
      this.tabOffsetTop = this.$refs.middleTabControl.$el.offsetTop
      
      // console.log(this.tabOffsetTop);
      
    }
  }
}
</script>

<style scoped>

  #home {
    height: 100vh;
    position: relative;
    
  }

  .homeNavBar {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    z-index: 9;
  }
  .topTabControl {
    background: var(--color-background);
    position: relative;
    z-index: 10;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>